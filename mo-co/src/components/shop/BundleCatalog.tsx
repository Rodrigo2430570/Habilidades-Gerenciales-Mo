'use client';
import { Plus } from '@/components/ui/Plus';
import { bundles, campaign, campaignActive, getProduct, money, priceOf, separatePrice, rules } from '@/lib/store';
import { useShop } from './ShopProvider';

function campaignDates() { const format = (date: string) => new Intl.DateTimeFormat('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: campaign.timeZone }).format(new Date(`${date}T12:00:00-06:00`)); return `${format(campaign.start)} al ${format(campaign.end)}`; }
export function BundleIntroduction() { const { now } = useShop(); return <p>{campaignActive(now) ? 'Dos formas de acompañarte, una mejor combinación. Elige un paquete y aprovecha un precio especial frente a comprar sus integrantes por separado.' : 'Dos formas de acompañarte, una mejor combinación. Elige dos compañeros en un solo paquete.'}</p>; }

export function BundleCatalog() {
  const { add, now, ready } = useShop();
  const active = campaignActive(now);
  return <div className="shell store-shell bundle-section">
    <p className="campaign-notice">{active ? `Precios especiales del ${campaignDates()}, inclusive. Hora del centro de México.` : 'Encuentra dos compañeros en una sola selección. Precio actual: suma de sus integrantes.'}</p>
    <div className="bundle-grid">{bundles.map(bundle => <article className="bundle-card" id={bundle.slug} key={bundle.id}>
      <div className="bundle-images">{bundle.members.map(id => { const product = getProduct(id); return <a href={`/productos/${product.slug}/`} key={id} aria-label={`Ver ${product.name}`}><img src={product.image} alt={product.alt} width="1024" height="1024" loading="lazy" /></a>; })}</div>
      <div className="bundle-copy"><h2>{bundle.name}</h2><p className="product-category">{bundle.id}</p><p>{bundle.description}</p><ul className="bundle-members">{bundle.members.map(id => { const product = getProduct(id); return <li key={id}>1 <a href={`/productos/${product.slug}/`}>{product.name}</a></li>; })}</ul>
      <dl className="bundle-prices"><div><dt>Por separado</dt><dd>{money(separatePrice(bundle))}</dd></div><div><dt>En paquete</dt><dd>{money(priceOf(bundle, now))} <small>MXN</small></dd></div>{active && <div className="bundle-saving"><dt>Ahorras</dt><dd>{money(separatePrice(bundle) - bundle.campaignPrice)}</dd></div>}</dl>
      <button className="shop-button shop-button--primary" disabled={!ready || !now} onClick={() => add(bundle.id)}>Elegir paquete <Plus /></button><a className="conditions-link" href="/compras-y-entregas/">Condiciones de compra y entrega</a></div>
    </article>)}</div>
    <section className="bundle-conditions" aria-labelledby="campaign-conditions"><h2 id="campaign-conditions">Cada compañía cuenta.</h2><p>Incluyen los accesorios listados de cada modelo y 12 meses de garantía para cada unidad. Preparación de 2 a 4 días hábiles. Envío estándar o recolección.</p><ul><li>Una unidad de cada integrante por paquete, en la combinación indicada.</li><li>El precio final del paquete participa en el umbral de envío estándar gratuito de {money(rules.freeFrom)}.</li><li>Devolución por preferencia: paquete completo y sus accesorios. Si una unidad presenta una falla, revisamos la unidad afectada mediante garantía.</li>{active && <li>Campaña del {campaignDates()}, inclusive, en {campaign.timeZone}. No acumulable con otras promociones. Fuera de la vigencia se aplica la suma vigente de los integrantes.</li>}</ul><a href="/compras-y-entregas/">Consulta todas las condiciones</a></section>
  </div>;
}
