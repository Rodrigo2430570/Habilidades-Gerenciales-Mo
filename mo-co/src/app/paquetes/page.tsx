import type { Metadata } from 'next';
import { StoreHeader, PurchaseStrip } from '@/components/shop/StoreHeader';
import { BundleCatalog, BundleIntroduction } from '@/components/shop/BundleCatalog';
export const metadata: Metadata = { title: 'Más juntos, mejor | MO Co.' };
export default function BundlesPage() { return <main id="contenido" className="store-page"><StoreHeader label="Paquetes MO" title="Más juntos, mejor."><BundleIntroduction/></StoreHeader><div className="shell store-shell"><PurchaseStrip /></div><BundleCatalog /></main>; }
