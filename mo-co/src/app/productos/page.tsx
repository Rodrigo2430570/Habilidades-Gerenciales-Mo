import type { Metadata } from 'next';
import { StoreHeader, PurchaseStrip } from '@/components/shop/StoreHeader';
import { ProductCatalog } from '@/components/shop/ProductCatalog';
export const metadata: Metadata = { title: 'Nuestros productos | MO Co.', description: 'Encuentra tu próximo MO. Compañeros para jugar, aprender, crear y cuidar lo que importa.' };
export default function ProductsPage() { return <main id="contenido" className="store-page"><StoreHeader label="Nuestros productos" title="Encuentra tu próximo MO."><p>Cada MO tiene una forma distinta de acompañarte. Explora compañeros para tu hogar, tu negocio y tus mejores ideas.</p></StoreHeader><div className="shell store-shell"><PurchaseStrip /></div><ProductCatalog /></main>; }
