import type { Metadata } from 'next';
import { StoreHeader } from '@/components/shop/StoreHeader';
import { Bag } from '@/components/shop/Bag';
export const metadata: Metadata = { title: 'Tu bolsa | MO Co.' };
export default function BagPage() { return <main id="contenido" className="store-page"><StoreHeader label="Tu bolsa" title="Tu próxima compañía."><p>Revisa tus MO, elige cómo recibirlos y prepara tu solicitud de pedido.</p></StoreHeader><Bag/></main>; }
