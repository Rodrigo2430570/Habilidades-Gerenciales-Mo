import catalog from '../data/products.json';

export type Product = (typeof catalog)[number];
export const products: Product[] = catalog;
export const categories = ['Todos', 'Compañía y entretenimiento', 'Hogar y aprendizaje', 'Negocios y asistencia', 'Modulares'];
export const contacts = { attention: 'atencion@mo-co.example', experience: 'experiencia@mo-co.example', hours: 'Lunes a viernes, de 9:00 a 18:00 h. Hora del centro de México.' };
export const rules = { standardDelivery: 199, freeFrom: 15000, specialPerUnit: 499, warrantyMonths: 12, returnsDays: 30 };
export const campaign = { start: '2026-11-02', end: '2026-11-30', timeZone: 'America/Mexico_City' };
export const bundles = [
  { id: 'MO-PACK-016', slug: 'duo-aventura', name: 'Dúo Aventura', members: ['MO-BMO-001', 'MO-OMO-008'], campaignPrice: 12598, description: 'BMO pone la imaginación y OMO el movimiento. Una combinación para jugar, crear y hacer más divertidas tus pausas.' },
  { id: 'MO-PACK-017', slug: 'aprende-y-juega', name: 'Aprende y Juega', members: ['MO-PMO-009', 'MO-LMO-013'], campaignPrice: 10798, description: 'Organiza tus sesiones con PMO y comparte los retos de LMO. Estudio, lógica y entretenimiento en un mismo paquete.' },
  { id: 'MO-PACK-018', slug: 'recepcion-en-equipo', name: 'Recepción en Equipo', members: ['MO-DMO-003', 'MO-CMO-002'], campaignPrice: 22498, description: 'DMO recibe y orienta; CMO apoya con pendientes y tareas ligeras. Dos aliados para una atención más organizada.' },
  { id: 'MO-PACK-019', slug: 'duo-bloom', name: 'Dúo Bloom', members: ['MO-SQUARE-014', 'MO-FLOWER-015'], campaignPrice: 9898, description: 'La base modular ◻MO y el pequeño ❁MO, juntos desde el primer día. Conecta sus rutinas y deja que florezca la compañía.' },
];
export type Bundle = (typeof bundles)[number];
export type CartLine = { id: string; quantity: number };
export type Delivery = 'home' | 'pickup';
export const items = [...products, ...bundles];
export function getItem(id: string) { return items.find(item => item.id === id); }
export function getProduct(id: string) { return products.find(item => item.id === id)!; }
export function accessibleProductName(product: Product) { return product.name.replace('♥MO', 'Heart MO (corazón)').replace('◻MO', 'Square MO (cuadrado)').replace('❁MO', 'Flower MO (flor)'); }
export function validQuantity(id: string, quantity: number) { const item = getItem(id); return !!item && Number.isSafeInteger(quantity) && quantity >= 0 && Number.isSafeInteger(quantity * priceOf(item, null)); }
export function isBundle(item: Product | Bundle): item is Bundle { return 'members' in item; }
export function mexicoDate(date: Date) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: campaign.timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(date);
  return ['year', 'month', 'day'].map(type => parts.find(part => part.type === type)!.value).join('-');
}
export function campaignActive(date: Date | null) { if (!date) return false; const day = mexicoDate(date); return day >= campaign.start && day <= campaign.end; }
export function nextCampaignChange(date: Date) {
  // Mexico City has no clock changes in this campaign's date range (UTC−06:00).
  const start = new Date(`${campaign.start}T00:00:00-06:00`).getTime();
  const end = new Date(`${campaign.end}T00:00:00-06:00`).getTime() + 86400000;
  return Math.min(3600000, ...[start, end].filter(time => time > date.getTime()).map(time => time - date.getTime()));
}
export function separatePrice(bundle: Bundle) { return bundle.members.reduce((sum, id) => sum + getProduct(id).price, 0); }
export function priceOf(item: Product | Bundle, date: Date | null) { return isBundle(item) ? (campaignActive(date) ? item.campaignPrice : separatePrice(item)) : item.price; }
export const money = (amount: number) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(amount);
export function normalizeCart(value: unknown): CartLine[] {
  if (!Array.isArray(value)) return [];
  const merged = new Map<string, number>();
  for (const line of value) {
    if (line && typeof line === 'object' && typeof line.id === 'string' && getItem(line.id) && Number.isSafeInteger(line.quantity) && line.quantity > 0) {
      const quantity = (merged.get(line.id) ?? 0) + line.quantity;
      if (Number.isSafeInteger(quantity) && Number.isSafeInteger(quantity * priceOf(getItem(line.id)!, null))) merged.set(line.id, quantity);
    }
  }
  return [...merged].map(([id, quantity]) => ({ id, quantity }));
}
export function calculateOrder(lines: CartLine[], delivery: Delivery, date: Date | null) {
  const rows = normalizeCart(lines).map(line => { const item = getItem(line.id)!; return { ...line, item, unitPrice: priceOf(item, date), subtotal: priceOf(item, date) * line.quantity }; });
  const subtotal = rows.reduce((sum, line) => sum + line.subtotal, 0);
  const standardSubtotal = rows.filter(line => isBundle(line.item) || !line.item.specialDelivery).reduce((sum, line) => sum + line.subtotal, 0);
  const specialQuantity = rows.filter(line => !isBundle(line.item) && line.item.specialDelivery).reduce((sum, line) => sum + line.quantity, 0);
  const standardShipping = delivery === 'pickup' || !standardSubtotal || standardSubtotal >= rules.freeFrom ? 0 : rules.standardDelivery;
  const specialShipping = delivery === 'pickup' ? 0 : specialQuantity * rules.specialPerUnit;
  return { rows, subtotal, standardSubtotal, standardShipping, specialShipping, shipping: standardShipping + specialShipping, total: subtotal + standardShipping + specialShipping };
}
export function normalizeSearch(value: string) { return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim(); }
export function matchesProduct(product: Product, query: string) { return normalizeSearch([product.name, product.role, product.description, product.functions, product.category, ...product.aliases].join(' ')).includes(normalizeSearch(query)); }
export const purchaseSummary = 'Garantía de 12 meses. Cambios y devoluciones: solicita revisión dentro de 30 días naturales. Entrega a domicilio o recolección con cita. Consulta condiciones y costos antes de preparar tu pedido.';
