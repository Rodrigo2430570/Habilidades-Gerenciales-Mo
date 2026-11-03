import type { Metadata } from 'next';
import { Navigation } from '@/components/sections/Navigation';
import { MotionController } from '@/components/motion/MotionController';
import { ReadingNavigation, PageJourney } from '@/components/sections/PageJourney';
import { ShopProvider } from '@/components/shop/ShopProvider';
import './globals.css';
import './motion.css';
import './multipage.css';
import './journey.css';
import './store.css';

export const metadata: Metadata = {
  title: 'MO Co. | Tecnología con corazón',
  description: 'Tecnología con corazón. Conoce MO Co., encuentra tu próximo MO y descubre cómo te acompañamos.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>
    <ShopProvider>
    <MotionController />
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <Navigation />
    <ReadingNavigation />
    {children}
    <PageJourney />
    <footer className="site-footer"><div className="shell store-footer"><div className="store-footer__top"><div><a href="/" className="footer-logo">MO Co.</a><p className="footer-motto">Tecnología con corazón.</p></div><p className="footer-closing">El futuro de tu MO empieza por cuidar lo que lo hace único.</p></div><nav aria-label="Enlaces del pie de página"><a href="/productos/">Nuestros productos</a><a href="/paquetes/">Paquetes MO</a><a href="/ayuda/">Atención al cliente</a><a href="/ayuda/?tipo=Queja#solicitud">Quejas y sugerencias</a><a href="/compras-y-entregas/">Compras y entregas</a><a href="/ayuda/#uso-de-datos">Uso de datos</a></nav><div className="store-footer__bottom"><p>Concepto independiente inspirado en el universo de Hora de Aventura.<br />Sitio no oficial. Ambientación de «Be More» e ilustraciones conceptuales.</p><a href="/">Volver al inicio</a></div></div></footer>
    </ShopProvider>
  </body></html>;
}
