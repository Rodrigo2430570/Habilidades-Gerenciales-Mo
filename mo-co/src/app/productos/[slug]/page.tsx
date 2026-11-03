import { Arrow } from '@/components/ui/Arrow';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { accessibleProductName, products, money, purchaseSummary, rules } from '@/lib/store';
import { AddToBag } from '@/components/shop/AddToBag';

export function generateStaticParams() { return products.map(product => ({ slug: product.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const product = products.find(item => item.slug === slug); return { title: `${product?.name ?? 'Producto'} | MO Co.`, description: product?.description }; }
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(item => item.slug === slug);
  if (!product) notFound();
  const modular = product.category === 'Modulares';
  const specs = ['Procesador', 'RAM', 'Almacenamiento', 'Materiales', 'Batería', 'Autonomía', 'Conectividad', 'Medidas', 'Peso', 'Color'] as const;
  return <main id="contenido" className="store-page"><div className="shell store-shell product-detail">
    <nav className="store-breadcrumb" aria-label="Ruta de navegación"><a href="/productos/">Nuestros productos</a><span aria-hidden="true">/</span><span>{product.name}</span></nav>
    <section className="product-overview" aria-labelledby="product-title"><div className="product-portrait"><img src={product.image} alt={`${product.alt}. ${accessibleProductName(product)}`} width="1024" height="1024" fetchPriority="high"/><span>Ilustración conceptual · MO Co.</span></div>
      <div className="product-intro"><h1 id="product-title">{product.name}</h1><p className="store-label">{product.category}</p><p className="product-role">{product.role}</p><p className="product-sku">SKU {product.id}</p><p className="product-description">{product.description}</p><p className="detail-price">{money(product.price)} <small>MXN</small></p><p className="price-caption">Precio final · IVA incluido</p>
      {product.specialDelivery && <p className="local-notice">Manejo especial: {money(rules.specialPerUnit)} por unidad a domicilio. Preparación de 5 a 7 días hábiles. No participa en envío estándar gratuito.</p>}
      <AddToBag id={product.id}/><p className="product-reassurance">{purchaseSummary}</p><a href="/compras-y-entregas/">Condiciones de compra y entrega</a>{modular && <div className="modular-note"><p>Se vende por separado. Consulta el paquete compatible.</p><a href="/paquetes/#duo-bloom">Conoce el Dúo Bloom</a></div>}
      <div className="product-help"><p>¿Este MO va contigo? Te ayudamos a elegir.</p><a href={`/ayuda/?producto=${product.id}&tipo=Consulta#solicitud`}>¿Tienes dudas sobre este MO?</a></div></div>
    </section>
    <div className="product-information"><section><h2>Hecho para acompañarte.</h2><h3>Funciones principales</h3><p>{product.functions}.</p>{product.slug === 'emo-restore' && <p>La recuperación depende del estado de los archivos. Un reinicio requiere tu autorización expresa.</p>}{product.slug === 'smo-guard' && <p>Apoyo de supervisión sin armas. No sustituye las medidas de protección de tus instalaciones.</p>}{product.slug === 'mmo-assist-xl' && <p>Diseñado para trasladar materiales de hasta 60 kg en espacios preparados.</p>}{product.slug === 'flowermo-bloom' && <p>También puede utilizarse de forma independiente.</p>}<h3>En tu caja</h3><p>{product.includes}.</p>{modular && <p>{product.slug === "squaremo-hub" ? "❁MO se vende por separado." : "◻MO se vende por separado."}</p>}{product.care && <><h3>Cuidados</h3><p>{product.care}.</p></>}<h3>Para recibir tu MO</h3><p>Preparación: {product.preparation}, a partir de la confirmación de pedido y disponibilidad. Traslado estimado: 3 a 7 días hábiles adicionales. Cobertura y fecha por confirmar.</p><p>{product.specialDelivery ? `Manejo especial a domicilio de ${money(rules.specialPerUnit)} por unidad.` : `Envío estándar de ${money(rules.standardDelivery)} por pedido; sin costo desde ${money(rules.freeFrom)} en artículos estándar después de promociones.`}</p><p>Recolección sin costo, con cita y aviso de pedido listo. Conservamos el pedido durante 5 días hábiles desde el aviso de disponibilidad.</p><h3>Cambios y garantía</h3><p>12 meses de garantía por defectos de fabricación desde la entrega. Solicita revisión para cambios o devoluciones dentro de 30 días naturales. Por preferencia, conserva todos los accesorios y el producto sin daños por uso; el traslado corresponde al cliente. MO cubre los traslados por producto incorrecto, daño de entrega o falla de origen.</p><a href="/compras-y-entregas/#cambios-y-devoluciones">Ver condiciones de cambios y devoluciones</a></section>
      <section className="technical-specs"><h2>Conoce cada detalle.</h2><table><caption>Especificaciones de {product.name}</caption><tbody>{specs.map(label => <tr key={label}><th scope="row">{label}</th><td>{product.specs[label]}</td></tr>)}<tr><th scope="row">Sistema</th><td>MO OS 1.0</td></tr></tbody></table><p className="muted">La autonomía se expresa como «hasta» y depende del uso.</p></section>
    </div><a className="shop-button shop-button--outline" href="/productos/">Volver al catálogo <Arrow /></a>
  </div></main>;
}
