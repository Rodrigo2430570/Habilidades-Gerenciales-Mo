import { StoreHeader } from '@/components/shop/StoreHeader';

export default function NotFound() {
  return <main id="contenido" className="store-page"><StoreHeader label="MO Co." title="Volvamos a encontrarnos."><p>No encontramos esta página. Puedes explorar nuestros productos o volver al inicio para continuar tu recorrido.</p></StoreHeader><div className="shell store-shell store-actions"><a className="shop-button shop-button--primary" href="/productos/">Ver productos</a><a className="shop-button shop-button--outline" href="/">Volver al inicio</a></div></main>;
}
