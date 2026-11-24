import { mkdir, readFile, writeFile } from 'node:fs/promises';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';

// GLTFExporter writes a Blob. Adapt its browser FileReader to Node.
globalThis.FileReader ??= class {
  async readAsArrayBuffer(blob) {
    this.result = await blob.arrayBuffer();
    this.onloadend();
  }
};

const hardware = {
  black: '#20302e',
  silver: '#a4aaa5',
  screen: '#cee6b9',
  seam: '#314749',
  green: '#44cb77',
  yellow: '#ffd34f',
  red: '#e94953',
  blue: '#29bade',
};
const sphere = new THREE.SphereGeometry(1, 22, 14);
const axis = new THREE.Vector3(0, 1, 0);
const point = (values) => new THREE.Vector3(...values);

function sculpt() {
  const group = new THREE.Group();
  const materials = new Map();
  function part(geometry, color, position, scale, finish = 'shell') {
    const key = color + finish;
    if (!materials.has(key)) {
      materials.set(key, new THREE.MeshStandardMaterial({
        color,
        roughness: finish === 'glass' ? .33 : .53,
        metalness: finish === 'metal' ? .32 : .06,
        emissive: finish === 'glass' ? color : '#000000',
        emissiveIntensity: finish === 'glass' ? .17 : 0,
      }));
    }
    const mesh = new THREE.Mesh(geometry, materials.get(key));
    mesh.position.set(...position);
    if (scale) mesh.scale.set(...scale);
    group.add(mesh);
    return mesh;
  }
  function box(x, y, z, w, h, d, color, radius = .07, finish) {
    return part(new RoundedBoxGeometry(w, h, d, 2, Math.min(radius, w / 2, h / 2, d / 2)), color, [x, y, z], null, finish);
  }
  function orb(x, y, z, rx, ry, rz, color, finish) {
    return part(sphere, color, [x, y, z], [rx, ry, rz], finish);
  }
  function rod(from, to, radius, color, finish) {
    const start = point(from);
    const end = point(to);
    const vector = end.clone().sub(start);
    const mesh = part(new THREE.CylinderGeometry(radius, radius, vector.length(), 12), color, start.lerp(end, .5).toArray(), null, finish);
    mesh.quaternion.setFromUnitVectors(axis, vector.normalize());
    return mesh;
  }
  function tube(points, radius, color) {
    const line = new THREE.CatmullRomCurve3(points.map(point));
    return part(new THREE.TubeGeometry(line, 18, radius, 10, false), color, [0, 0, 0]);
  }
  function disc(x, y, z, radius, depth, color, finish = 'metal') {
    return rod([x, y, z - depth / 2], [x, y, z + depth / 2], radius, color, finish);
  }
  function screw(x, y, z) {
    disc(x, y, z, .026, .023, hardware.silver);
    box(x, y, z + Math.sign(z) * .012, .025, .005, .006, hardware.seam, .003);
  }
  function face({ x = 0, y, z, w, h, color = hardware.screen, round = false, happy = false }) {
    if (round) {
      orb(x, y, z - .025, w * .52, h * .54, .14, hardware.seam);
      orb(x, y, z + .025, w / 2, h / 2, .13, color, 'glass');
    } else {
      box(x, y, z, w + .07, h + .07, .1, hardware.seam, .15);
      box(x, y, z + .06, w, h, .08, color, .12, 'glass');
    }
    const faceZ = z + (round ? .155 : .105);
    for (const sign of [-1, 1]) {
      orb(x + sign * w * .22, y + .065 * h, faceZ - (round ? .015 : 0), w * .028, h * .057, .018, hardware.black);
    }
    const mouth = [[x - .115 * w, y - .10 * h, faceZ], [x, y - .17 * h, faceZ + .013], [x + .115 * w, y - .10 * h, faceZ]];
    tube(mouth, .014 * Math.min(w, 1.3), hardware.black);
    if (happy) orb(x, y - .126 * h, faceZ + .006, w * .102, h * .052, .014, hardware.seam);
  }
  function rear(w, h, y, z, shell, trim, vents = 3) {
    box(0, y, -z, w, h, .055, trim, .09);
    box(0, y, -z - .029, w * .92, h * .92, .037, shell, .085);
    for (const sign of [-1, 1]) {
      screw(sign * w * .37, y + h * .32, -z - .05);
      screw(sign * w * .37, y - h * .32, -z - .05);
    }
    for (let index = 0; index < vents; index++) {
      box(0, y + h * .30 - index * h * .12, -z - .05, w * .47, .027, .017, hardware.seam, .01);
    }
    box(-.09, y - h * .32, -z - .05, .17, .057, .018, hardware.seam, .012);
    disc(.09, y - h * .32, -z - .056, .018, .013, hardware.green);
  }
  function arms(x, y, endX, endY, color, radius = .07, hand = color, claw = false) {
    for (const sign of [-1, 1]) {
      const first = [sign * x, y, 0];
      const elbow = [sign * (x + (endX - x) * .64), y * .52 + endY * .48, .025];
      const last = [sign * endX, endY, .09];
      orb(...first, radius * 1.36, radius * 1.4, radius * 1.4, hand);
      tube([first, elbow, last], radius, color);
      orb(...last, radius * 1.22, radius * 1.46, radius * 1.12, hand);
      if (claw) {
        for (const finger of [-1, 1]) {
          tube([last, [last[0] + finger * radius, endY - .105, .11], [last[0] + finger * radius * .65, endY - .17, .16]], radius * .45, hand);
        }
      }
    }
  }
  function legs(spacing, y, color, foot, radius = .075, boot = .19, style = 'round') {
    for (const sign of [-1, 1]) {
      const x = sign * spacing;
      rod([x, .22, .02], [x, y, 0], radius, color);
      if (style === 'square') box(x, .125, .09, boot * 2, .24, boot * 2.15, foot, .055);
      else orb(x, .105, .09, boot, .13, boot * 1.37, foot);
    }
  }
  function cross(x, y, z, color, size = .28) {
    box(x, y, z, size, size * .34, .095, color, .026);
    box(x, y, z + .001, size * .34, size, .098, color, .026);
  }
  function vents(x, y, z, rows, columns, spacing = .058) {
    for (let row = 0; row < rows; row++) for (let column = 0; column < columns; column++) {
      disc(x + column * spacing, y - row * spacing, z, .014, .012, hardware.seam);
    }
  }
  return { group, part, box, orb, rod, tube, disc, screw, face, rear, arms, legs, cross, vents };
}

const models = {
  'bmo-play'({ box, disc, face, rear, arms, legs, cross, rod, part }) {
    const teal = '#4aac91';
    box(0, 1.61, 0, 1.68, 2.12, .72, teal, .17);
    face({ y: 2.04, z: .35, w: 1.28, h: .87, color: '#bbecab' });
    box(-.28, 1.42, .369, .57, .075, .055, '#17554f', .025);
    cross(-.38, 1.06, .421, hardware.yellow, .31);
    disc(.29, .88, .416, .13, .12, hardware.red, 'shell');
    disc(.52, 1.11, .414, .078, .1, hardware.green, 'shell');
    disc(.44, 1.45, .403, .049, .075, '#365488', 'shell');
    const triangle = new THREE.Shape().moveTo(-.095, -.059).lineTo(.095, -.059).lineTo(0, .112).closePath();
    const button = new THREE.ExtrudeGeometry(triangle, { depth:.046, bevelSize:.018, bevelThickness:.018, bevelSegments:2, steps:1 });
    part(button, hardware.blue, [.27, 1.22, .385]);
    box(-.47, .75, .39, .14, .053, .064, '#3b486d', .027);
    box(-.22, .75, .39, .14, .053, .064, '#3b486d', .027);
    for (const y of [2.07, 2.19, 2.31, 2.43]) {
      for (const z of [-.13, -.01, .11]) rod([-.826, y, z], [-.852, y, z], .019, '#285c54');
    }
    box(.840, 1.76, .02, .020, .27, .25, '#378b7b', .012);
    box(.852, 1.76, .02, .018, .066, .15, '#23534d', .008);
    rear(1.27, 1.61, 1.6, .36, '#4fa990', '#2b7066', 4);
    arms(.78, 1.43, 1.03, .72, teal);
    legs(.34, .62, teal, '#459981', .075, .13);
  },
  'cmo-assist'({ box, face, rear, arms, legs, screw }) {
    const sand = '#cbbda1';
    box(0, 1.56, 0, 1.55, 1.77, .93, sand, .14);
    face({ y: 1.81, z: .46, w: 1.13, h: .88, color: '#c8ddc0' });
    box(0, .98, .492, .62, .2, .11, '#427fb1', .046);
    for (const x of [-.66, .66]) for (const y of [.81, 2.33]) screw(x, y, .47);
    for (const y of [1.88, 2.01, 2.14]) box(.774, y, .06, .029, .039, .27, '#625944', .016);
    rear(1.21, 1.35, 1.58, .465, '#b6a98d', '#87765c');
    arms(.74, 1.36, 1.13, .67, sand, .064, '#b8a68a', true);
    legs(.35, .75, '#bfb295', sand, .07, .16, 'square');
  },
  'dmo-welcome'({ box, face, rear, arms, legs, rod, orb }) {
    const brass = '#aca17b', gold = '#ebbd41';
    box(0, 2.60, 0, 1.12, .9, .53, brass, .20);
    face({ y: 2.60, z: .265, w: .77, h: .58, color: '#c7eba9' });
    rod([0, 3.02, 0], [0, 3.31, 0], .023, '#69634e', 'metal');
    orb(0, 3.35, 0, .061, .061, .061, gold);
    box(0, 1.48, 0, .54, 1.34, .42, brass, .116);
    box(0, 1.76, .225, .33, .45, .068, gold, .05);
    for (const x of [-.09, 0, .09]) for (const y of [1.64, 1.76, 1.88]) {
      box(x, y, .267, .053, .055, .027, '#e5a929', .013);
    }
    rear(.72, .57, 2.61, .265, '#968968', '#655e46', 2);
    rear(.38, .85, 1.43, .212, brass, '#746748', 2);
    arms(.25, 1.99, .45, 1.13, gold, .042);
    legs(.17, .87, gold, '#998c67', .047, .135);
  },
  'emo-restore'({ box, face, rear, arms, rod, disc }) {
    const olive = '#707565', tire = '#292d2b';
    box(0, 1.68, 0, 1.37, 2.24, .86, olive, .15);
    face({ y: 1.87, z: .43, w: .86, h: .59 });
    for (const y of [2.33, 2.45, 2.57]) box(0, y, .44, .86, .056, .038, '#252e2a', .021);
    box(0, 1.16, .444, .83, .53, .047, '#7c8170', .06);
    rear(1.01, 1.79, 1.67, .43, '#626959', '#434b42', 5);
    arms(.67, 1.55, 1.1, 1.08, '#4a96b6', .064, '#8f9991', true);
    for (const sign of [-1, 1]) {
      const x = sign * .53;
      box(x, .31, 0, .47, .56, 1.10, tire, .21);
      for (const z of [-.32, .33]) {
        rod([x - .252, .28, z], [x + .252, .28, z], .18, '#434b42', 'metal');
        rod([x - .265, .28, z], [x + .265, .28, z], .068, '#919685', 'metal');
      }
      for (const z of [-.34, -.17, 0, .17, .34]) box(x, .578, z, .42, .034, .074, '#434747', .018);
    }
    disc(.38, 1.11, .476, .021, .017, hardware.green);
  },
  'smo-guard'({ box, face, rear, arms, legs, screw }) {
    const graphite = '#393b3a', bronze = '#817c5c';
    box(0, 1.64, 0, 1.46, 2.32, .91, graphite, .15);
    box(0, 1.58, .443, 1.21, 1.99, .10, bronze, .075);
    const hood = box(0, 2.73, 0, 1.41, .28, .82, graphite, .095);
    hood.rotation.x = -.30;
    face({ y: .97, z: .50, w: .76, h: .52, color: '#bbdfae' });
    for (const y of [1.72, 1.89, 2.06, 2.23]) box(0, y, .504, .74, .067, .037, '#272824', .026);
    for (const x of [-.52, .52]) for (const y of [.67, 2.47]) screw(x, y, .503);
    rear(1.12, 1.86, 1.60, .455, '#434644', '#292d2d', 5);
    arms(.71, 1.52, 1.05, .74, graphite, .142);
    legs(.36, .66, graphite, '#343635', .12, .18, 'square');
  },
  'mmo-assist-xl'({ box, face, rear, arms, legs, screw, disc }) {
    const royal = '#457faa', bumper = '#384a55';
    box(0, 1.41, 0, 2.23, 1.76, 1.02, royal, .18);
    face({ y: 1.72, z: .512, w: 1.63, h: .68, happy: true });
    for (const x of [-1.02, 1.02]) {
      box(x, 1.43, .47, .24, 1.31, .17, bumper, .078);
      screw(x, 1.93, .561);
      screw(x, .94, .561);
    }
    rear(1.77, 1.21, 1.46, .514, '#376783', bumper, 4);
    arms(1.04, 1.59, 1.51, .73, '#4885b6', .195);
    legs(.6, .65, bumper, '#414748', .18, .34, 'square');
    disc(.67, 1.15, .531, .059, .046, hardware.yellow);
  },
  'qmo-garden'({ box, orb, face, rear, tube, legs, rod, disc, part }) {
    const mint = '#66c2b0', steel = '#879894';
    orb(0, 2.54, 0, .71, .69, .58, mint);
    face({ y: 2.57, z: .48, w: 1.02, h: .72, color: '#e6ddbb', round: true });
    orb(0, 1.81, 0, .29, .14, .26, steel, 'metal');
    box(0, 1.27, 0, .61, .96, .51, mint, .15);
    box(0, .83, 0, .63, .10, .53, steel, .06, 'metal');
    rear(.41, .59, 1.35, .26, '#62a799', '#488578', 2);
    tube([[-.27, 1.63, 0], [-.46, 1.37, .04], [-.53, .96, .12]], .052, mint);
    tube([[.26, 1.63, 0], [.42, 1.32, .02], [.62, 1.28, .21]], .052, mint);
    part(new THREE.CylinderGeometry(.16, .205, .36, 20), steel, [.66, 1.00, .21], null, 'metal');
    tube([[.52, 1.14, .21], [.57, 1.36, .21], [.73, 1.35, .21], [.79, 1.15, .21]], .029, steel);
    rod([.77, .99, .21], [.97, 1.2, .29], .047, steel, 'metal');
    disc(.97, 1.2, .29, .074, .044, '#a8bab7');
    legs(.19, .87, '#6488a6', '#789bb8', .048, .135);
  },
  'omo-active'({ orb, face, arms, legs, disc, box, rod }) {
    const teal = '#47bcb0';
    orb(0, 1.63, 0, .98, .98, .76, teal);
    face({ x: .05, y: 1.78, z: .64, w: 1.28, h: 1.01, color: '#d8e3c5', round: true });
    for (const x of [-.94, .94]) rod([x - .07, 1.8, 0], [x + .07, 1.8, 0], .17, '#819f98', 'metal');
    orb(0, 1.62, -.721, .37, .39, .066, '#31877f');
    for (const y of [1.58, 1.7, 1.82]) box(0, y, -.785, .34, .032, .024, '#256861', .012);
    disc(0, 1.41, -.781, .028, .023, hardware.green);
    arms(.84, 1.46, 1.08, .78, teal, .062);
    legs(.33, .83, teal, '#8da49c', .064, .176);
  },
  'pmo-learn'({ box, face, rear, arms, legs, disc, part }) {
    const purple = '#9e73b8';
    box(0, 1.35, 0, 1.48, 1.16, .70, purple, .12);
    part(new THREE.ConeGeometry(1, .92, 4).rotateY(Math.PI / 4), '#aa7bc5', [0, 2.30, 0], [1.04, 1, .50]);
    face({ y: 1.49, z: .35, w: 1.03, h: .62, color: '#dfdfcb' });
    disc(.43, 1.01, .38, .070, .073, '#a5a39a');
    rear(1.09, .81, 1.36, .352, '#9163ad', '#684b86', 2);
    arms(.71, 1.43, .92, .71, purple);
    legs(.34, .84, '#9168b2', '#9366b1', .083, .16);
  },
  'wmo-audio'({ box, face, rear, arms, legs, disc, vents }) {
    const emerald = '#368e76';
    box(0, 1.04, 0, 2.38, 1.22, .67, emerald, .19);
    face({ y: 1.25, z: .335, w: 1.51, h: .56, color: '#c5e6b4' });
    for (const x of [-.94, .94]) {
      disc(x, 1.25, .365, .184, .108, '#b4c1be');
      disc(x, 1.25, .424, .142, .032, '#91a9a6');
      vents(x - .16, .78, .344, 3, 5);
    }
    rear(1.91, .83, 1.06, .335, '#31816a', '#205b51', 3);
    arms(1.13, .90, 1.36, .52, emerald, .062);
    legs(.53, .53, emerald, '#428b77', .092, .144);
  },
  'amo-classic'({ box, face, rear, arms, legs, tube, disc, screw }) {
    const army = '#79775b', trim = '#a39a74';
    box(0, 1.46, 0, 1.57, 1.91, .83, army, .09);
    box(0, 2.37, 0, 2.01, .29, .99, '#89846c', .10);
    face({ y: 1.86, z: .414, w: 1.16, h: .81, color: '#e1debb' });
    for (const sign of [-1, 1]) {
      tube([[sign * .94, 2.35, 0], [sign * 1.23, 2.38, 0], [sign * 1.26, 2.52, 0]], .074, trim);
      screw(sign * .87, 2.38, .489);
    }
    for (const x of [-.46, -.40, -.34]) box(x, .90, .421, .024, .32, .034, '#3d4437', .01);
    for (const x of [-.19, -.03, .13, .29]) for (const y of [.75, .90, 1.05]) box(x, y, .446, .116, .108, .057, '#c2b488', .02);
    disc(.53, 1.04, .454, .066, .053, '#a05c44');
    disc(.53, .87, .451, .052, .056, '#ba9d5f');
    rear(1.20, 1.5, 1.45, .415, '#74735a', '#555542', 4);
    arms(.75, 1.28, 1.04, .63, trim, .067, '#948c6d');
    legs(.34, .57, trim, army, .078, .19, 'square');
  },
  'heartmo-host'({ box, face, rear, arms, rod, orb, part, screw }) {
    const rose = '#ed83a0', cherry = '#ce3254';
    box(0, 2.54, 0, .93, 1.37, .5, rose, .123);
    face({ y: 2.77, z: .25, w: .66, h: .55, color: '#d1e9c9' });
    const heart = new THREE.Shape().moveTo(0, -.115)
      .bezierCurveTo(-.08, -.06, -.155, .045, -.12, .094)
      .bezierCurveTo(-.078, .146, -.018, .12, 0, .08)
      .bezierCurveTo(.018, .12, .078, .146, .12, .094)
      .bezierCurveTo(.155, .045, .08, -.06, 0, -.115);
    part(new THREE.ExtrudeGeometry(heart,{ depth:.04, bevelSize:.012, bevelThickness:.012, bevelSegments:2 }), cherry, [0, 2.28, .25]);
    for (const x of [-.37, .37]) for (const y of [1.97, 3.14]) screw(x, y, .25);
    rear(.69, 1.11, 2.55, .251, '#de7293', '#a34766', 3);
    arms(.45, 2.45, .61, 1.64, rose, .044);
    for (const x of [-.225, .225]) {
      rod([x, .25, 0], [x, 1.94, 0], .048, rose);
      rod([x, .06, -.045], [x, .24, -.02], .028, cherry);
      const shoe = orb(x, .13, .083, .078, .084, .165, cherry);
      shoe.rotation.x = -.33;
    }
  },
  'lmo-game'({ box, orb, face, rear, arms, legs, rod, cross, disc }) {
    const grape = '#8460aa', lilac = '#ac8fca';
    orb(0, 1.15, 0, .86, .54, .43, grape);
    for (const sign of [-1, 1]) {
      const grip = orb(sign * .60, .93, -.03, .42, .52, .40, grape);
      grip.rotation.z = sign * .29;
    }
    rod([0, 1.56, 0], [0, 1.94, 0], .15, '#707b79', 'metal');
    box(0, 2.22, 0, 1.26, .89, .63, grape, .26);
    face({ y: 2.23, z: .316, w: .93, h: .60, color: '#c4e9bd' });
    cross(-.43, 1.18, .411, lilac, .32);
    disc(.41, 1.38, .387, .105, .098, hardware.yellow, 'shell');
    disc(.64, 1.26, .379, .105, .098, '#f07368', 'shell');
    disc(.41, 1.13, .428, .095, .098, '#62aee2', 'shell');
    rear(.86, .58, 2.22, .317, '#744b99', '#5b3876', 2);
    arms(.84, 1.34, 1.18, 1.02, lilac, .054, lilac, true);
    legs(.39, .67, lilac, grape, .065, .156);
  },
  'squaremo-hub'({ box, face, rear, arms, legs, screw }) {
    const ice = '#89b6c6', inset = '#396875';
    box(0, .92, 0, 1.72, 1.16, .83, ice, .13);
    box(0, 1.38, 0, 1.11, .08, .62, inset, .03);
    for (const x of [-.704, .704]) box(x, 1.54, 0, .31, .31, .83, ice, .095);
    for (const z of [-.32, .32]) box(0, 1.54, z, 1.22, .31, .19, ice, .088);
    face({ y: 1.04, z: .419, w: 1.21, h: .73, color: '#d1e5ce' });
    for (const x of [-.70, .70]) for (const y of [.52, 1.55]) screw(x, y, .427);
    rear(1.28, .84, .97, .419, '#72a5b6', '#4f8093', 3);
    arms(.82, 1.08, 1.04, .48, ice, .060, '#76a5b8', true);
    legs(.46, .42, '#76a4b4', '#75929e', .096, .17);
  },
  'flowermo-bloom'({ box, orb, disc, face, rear, arms, legs, rod, screw }) {
    const pink = '#e9849a';
    box(0, 1.02, 0, 1.44, 1.26, .74, pink, .15);
    face({ y: 1.04, z: .376, w: 1.06, h: .78, color: '#e6dec2' });
    for (const x of [-.6, .6]) for (const y of [.54, 1.51]) screw(x, y, .376);
    disc(.46, 1.63, .22, .035, .021, '#e2a74b');
    box(0, 1.65, 0, .36, .11, .36, '#ce617d', .057);
    rod([0, 1.66, 0], [0, 2.30, 0], .06, '#71a43f');
    for (let count = 0; count < 6; count++) {
      const angle = count * Math.PI / 3;
      const petal = orb(Math.sin(angle) * .26, 2.32 + Math.cos(angle) * .26, .025, .145, .215, .095, hardware.yellow);
      petal.rotation.z = -angle;
    }
    orb(0, 2.32, .10, .135, .135, .087, '#f7e0a0');
    rear(1.04, .99, .99, .373, '#d76c89', '#a44666', 3);
    arms(.69, .91, .97, .45, pink, .067);
    legs(.33, .47, pink, '#da738a', .093, .11);
  },
};

function prepare({ group }) {
  // Batch surfaces by material to keep the interactive model inexpensive to draw.
  group.updateMatrixWorld(true);
  const batches = new Map();
  for (const mesh of group.children) {
    const geometry = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
    geometry.deleteAttribute('uv');
    geometry.applyMatrix4(mesh.matrixWorld);
    const batch = batches.get(mesh.material) ?? [];
    batch.push(geometry);
    batches.set(mesh.material, batch);
  }
  const scene = new THREE.Group();
  for (const [material, pieces] of batches) {
    scene.add(new THREE.Mesh(mergeVertices(mergeGeometries(pieces)), material));
  }
  const bounds = new THREE.Box3().setFromObject(scene);
  const center = bounds.getCenter(new THREE.Vector3());
  scene.position.set(-center.x, -bounds.min.y, -center.z);
  return scene;
}

const output = new URL('../public/assets/models/', import.meta.url);
const catalog = JSON.parse(await readFile(new URL('../src/data/products.json', import.meta.url), 'utf8'));
if (catalog.length !== Object.keys(models).length || catalog.some(({ slug }) => !models[slug])) {
  throw new Error('Every catalog product needs a model.');
}
await mkdir(output, { recursive: true });
const exporter = new GLTFExporter();
for (const { slug } of catalog) {
  const robot = sculpt();
  models[slug](robot);
  const binary = await exporter.parseAsync(prepare(robot), { binary: true });
  await writeFile(new URL(slug + '.glb', output), Buffer.from(binary));
  console.log(slug, Math.round(binary.byteLength / 1024) + ' KiB');
}
