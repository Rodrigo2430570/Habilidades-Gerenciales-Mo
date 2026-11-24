'use client';

import { createElement, useEffect, useRef, useState } from 'react';

type Reaction = 'idle' | 'hello' | 'joy' | 'curious';
type Pose = 'wave' | 'surprise' | 'blink';
type ModelViewerElement = HTMLElement & {
  availableAnimations?: string[];
  animationName?: string;
  play?: () => void;
  pause?: () => void;
};

// Add the finished GLB to public/assets and set this value at build time.
// Until then the original, high-quality illustration remains the hero asset.
const modelSrc = process.env.NEXT_PUBLIC_MO_HERO_MODEL || null;
const reactions: Reaction[] = ['hello', 'joy', 'curious'];
const portrait = '/assets/bmo-institute.webp';
const poses: Record<Pose, string> = {
  wave: '/assets/bmo-wave-v2.webp',
  surprise: '/assets/bmo-surprise-v2.webp',
  blink: '/assets/bmo-blink-v2.webp',
};

function HeroModel({ src, reaction, animate }: { src: string; reaction: Reaction; animate: boolean }) {
  const viewer = useRef<ModelViewerElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    import('@google/model-viewer').catch(() => { /* The illustration stays visible. */ });
    const node = viewer.current;
    const onLoad = () => { if (active) setLoaded(true); };
    node?.addEventListener('load', onLoad);
    return () => { active = false; node?.removeEventListener('load', onLoad); };
  }, []);

  useEffect(() => {
    const node = viewer.current;
    if (!loaded || !node) return;
    if (!animate) { node.pause?.(); return; }
    if (!node.availableAnimations?.length) return;
    const wanted = reaction === 'idle' ? 'Idle' : reaction === 'hello' ? 'Wave' : reaction === 'joy' ? 'Happy' : 'Curious';
    const match = node.availableAnimations.find(name => name.toLowerCase() === wanted.toLowerCase());
    const idle = node.availableAnimations.find(name => name.toLowerCase() === 'idle');
    if (match || idle) {
      node.animationName = match || idle;
      node.play?.();
    }
  }, [loaded, reaction, animate]);

  return <div className={`hero__model-shell${loaded ? ' is-loaded' : ''}`}>
    <img className="hero__model-poster" src={portrait} width="1122" height="1402" alt="" aria-hidden="true" />
    {createElement('model-viewer', {
      ref: viewer,
      src,
      alt: 'Robot MO tridimensional con cuerpo verde azulado y rostro luminoso',
      poster: portrait,
      'environment-image': 'neutral',
      'camera-orbit': '0deg 75deg auto',
      'camera-target': 'auto auto auto',
      'field-of-view': '30deg',
      'shadow-intensity': '0.8',
      'shadow-softness': '0.9',
      exposure: '1.05',
      'interaction-prompt': 'none',
      'touch-action': 'pan-y',
      className: 'hero__model',
    })}
  </div>;
}

export function HeroMascot() {
  const art = useRef<HTMLDivElement>(null);
  const [reaction, setReaction] = useState<Reaction>('idle');
  const [blink, setBlink] = useState(false);
  const [frames, setFrames] = useState<Partial<Record<Pose, boolean>>>({});
  const [visible, setVisible] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const reactionIndex = useRef(0);
  const blinkPlayed = useRef(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (resetTimer.current) clearTimeout(resetTimer.current); }, []);

  useEffect(() => {
    const loaded = [...(art.current?.querySelectorAll<HTMLImageElement>('img[data-frame]') ?? [])]
      .filter(image => image.complete && image.naturalWidth > 0);
    if (loaded.length > 0) {
      setFrames(current => ({
        ...current,
        ...Object.fromEntries(loaded.map(image => [image.dataset.frame, true])),
      }));
    }
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setMotionAllowed(!preference.matches);
    const updateVisibility = () => {
      const box = art.current?.getBoundingClientRect();
      setVisible(Boolean(box && box.bottom > 0 && box.top < innerHeight && !document.hidden));
    };
    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(updateVisibility);
    if (art.current) observer?.observe(art.current);
    updateMotion();
    updateVisibility();
    preference.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      observer?.disconnect();
      preference.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (modelSrc || !motionAllowed || !visible || !frames.blink || blinkPlayed.current || reaction !== 'idle') return;
    let close: ReturnType<typeof setTimeout> | undefined;
    const start = setTimeout(() => {
      blinkPlayed.current = true;
      setBlink(true);
      close = setTimeout(() => setBlink(false), 145);
    }, 1800);
    return () => {
      clearTimeout(start);
      clearTimeout(close);
      setBlink(false);
    };
  }, [motionAllowed, visible, reaction, frames.blink]);

  function interact() {
    setReaction(reactions[reactionIndex.current % reactions.length]);
    reactionIndex.current += 1;
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setReaction('idle'), 760);
  }

  const pose = reaction === 'curious' ? 'surprise' : reaction !== 'idle' ? 'wave' : blink ? 'blink' : undefined;

  return <div className="hero__art" ref={art} data-reaction={reaction} data-pose={pose && frames[pose] ? pose : undefined}>
    <span className="hero__art-word" aria-hidden="true">MO</span>
    <button className="hero__mascot-button" type="button" onClick={interact} aria-label="Interactuar con MO">
      {modelSrc ? <HeroModel src={modelSrc} reaction={reaction} animate={motionAllowed && visible} /> : <span className="hero__mascot-frames">
        <img className="hero__mascot-frame hero__mascot-frame--base" src={portrait} width="1122" height="1402" alt="Robot MO verde azulado, con rostro sonriente y controles de colores" fetchPriority="high" />
        {(Object.keys(poses) as Pose[]).map(frame => <img key={frame} data-frame={frame} className={`hero__mascot-frame hero__mascot-frame--${frame}`} src={poses[frame]} width="1122" height="1402" alt="" aria-hidden="true" fetchPriority="low" onLoad={() => setFrames(current => current[frame] ? current : { ...current, [frame]: true })} />)}
      </span>}
      <span className="hero__screen-light" aria-hidden="true" />
    </button>
    <p>UN PROPÓSITO EN CADA CIRCUITO</p>
  </div>;
}
