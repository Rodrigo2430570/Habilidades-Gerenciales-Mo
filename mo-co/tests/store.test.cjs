const { test } = require('node:test');
const assert = require('node:assert/strict');
const { products, bundles, calculateOrder, separatePrice, campaignActive, priceOf, nextCampaignChange, normalizeCart, matchesProduct } = require('../.test-build/lib/store.js');
const { emptyDraft, validateRequest } = require('../.test-build/lib/support.js');
const active = new Date('2026-11-03T04:00:00Z');
const line = (id, quantity = 1) => ({ id, quantity });

test('15 unique models and four unique bundles with the approved components and savings', () => {
  assert.equal(products.length, 15);
  assert.equal(new Set([...products, ...bundles].map(item => item.id)).size, 19);
  assert.equal(new Set(products.map(item => item.image)).size, 15);
  assert.deepEqual(bundles.map(bundle => [separatePrice(bundle), bundle.campaignPrice, separatePrice(bundle) - bundle.campaignPrice]), [[13998,12598,1400],[11998,10798,1200],[24998,22498,2500],[10998,9898,1100]]);
  assert.deepEqual(bundles.map(bundle => bundle.members), [['MO-BMO-001','MO-OMO-008'],['MO-PMO-009','MO-LMO-013'],['MO-DMO-003','MO-CMO-002'],['MO-SQUARE-014','MO-FLOWER-015']]);
});
test('inclusive campaign dates follow Mexico City, not UTC or build time', () => {
  assert.equal(campaignActive(new Date('2026-11-02T05:59:59.999Z')), false);
  assert.equal(campaignActive(new Date('2026-11-02T06:00:00Z')), true);
  assert.equal(campaignActive(new Date('2026-12-01T05:59:59.999Z')), true);
  assert.equal(campaignActive(new Date('2026-12-01T06:00:00Z')), false);
  assert.equal(priceOf(bundles[3], new Date('2026-12-01T06:00:00Z')), 10998);
  assert.equal(priceOf(bundles[3], null), 10998);
  assert.equal(nextCampaignChange(new Date('2026-12-01T05:59:59.500Z')), 500);
});
test('all seven approved delivery examples, including a mixed special shipment', () => {
  const examples = [
    [[line('MO-BMO-001')], 'home', 8999, 199, 9198],
    [[line('MO-DMO-003')], 'home', 18999, 0, 18999],
    [[line('MO-PACK-019')], 'home', 9898, 199, 10097],
    [[line('MO-PACK-018')], 'home', 22498, 0, 22498],
    [[line('MO-MMO-006')], 'home', 39999, 499, 40498],
    [[line('MO-MMO-006'),line('MO-BMO-001')], 'home', 48998, 698, 49696],
    [[line('MO-BMO-001')], 'pickup', 8999, 0, 8999],
  ];
  for (const [lines, delivery, subtotal, shipping, total] of examples) { const order = calculateOrder(lines, delivery, active); assert.deepEqual([order.subtotal, order.shipping, order.total], [subtotal, shipping, total]); }
});
test('shipping thresholds, quantities, special-only, pickup and expired bundles', () => {
  assert.equal(calculateOrder([line('MO-BMO-001',2)],'home',active).standardShipping,0);
  assert.equal(calculateOrder([line('MO-MMO-006',2)],'home',active).shipping,998);
  assert.equal(calculateOrder([line('MO-MMO-006',2),line('MO-DMO-003')],'home',active).shipping,998);
  assert.equal(calculateOrder([line('MO-MMO-006',2),line('MO-BMO-001')],'pickup',active).shipping,0);
  assert.equal(calculateOrder([],'home',active).total,0);
  assert.equal(calculateOrder([line('MO-PACK-019')],'home',new Date('2026-12-02T12:00:00Z')).total,11197);
  assert.equal(calculateOrder([line('MO-PACK-019')],'home',active).rows.length,1);
});
test('corrupted storage and invalid quantities cannot create order lines', () => {
  assert.deepEqual(normalizeCart(null),[]);
  assert.deepEqual(normalizeCart([line('missing'),line('MO-BMO-001',0),line('MO-CMO-002',-1),line('MO-DMO-003',1.5)]),[]);
  assert.deepEqual(normalizeCart([line('MO-BMO-001',1),line('MO-BMO-001',2)]),[line('MO-BMO-001',3)]);
});
test('special glyph names, ASCII aliases, accents and functions are searchable', () => {
  for (const [query, slug] of [['heartmo','heartmo-host'],['♥MO','heartmo-host'],['squaremo','squaremo-hub'],['◻MO','squaremo-hub'],['flowermo','flowermo-bloom'],['❁MO','flowermo-bloom'],['riego','qmo-garden'],['MUSICA','bmo-play']]) assert.ok(matchesProduct(products.find(product => product.slug === slug),query));
});
test('request validation covers required fields, optional order, length limits and consent', () => {
  const draft = { ...emptyDraft, type:'Queja', name:'Persona de prueba', email:'prueba@example.test', subject:'Consulta de prueba', message:'Este es un mensaje de prueba.', consent:true };
  assert.deepEqual(validateRequest(draft),{});
  assert.ok(validateRequest({...draft,email:'invalid'}).email);
  assert.ok(validateRequest({...draft,message:'corto'}).message);
  assert.ok(validateRequest({...draft,message:'x'.repeat(2001)}).message);
  assert.ok(validateRequest({...draft,consent:false}).consent);
  assert.ok(validateRequest({...draft,name:'x'.repeat(81)}).name);
  assert.ok(validateRequest({...draft,subject:'x'.repeat(121)}).subject);
  assert.ok(validateRequest({...draft,type:'inventado'}).type);
});
