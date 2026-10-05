import type { Metadata } from 'next';
import { Navigation } from '@/components/sections/Navigation';
import { MotionController } from '@/components/motion/MotionController';
import { ReadingNavigation, PageJourney } from '@/components/sections/PageJourney';
import './globals.css';
import './motion.css';
import './multipage.css';
import './journey.css';

export const metadata: Metadata = {
  title: 'MO Co. | Tecnología con corazón',
  description: 'Conoce la estrategia, organización y compromisos de MO Co., la fábrica de robots de Ooo.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>
    <MotionController />
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <Navigation />
    <ReadingNavigation />
    {children}
    <PageJourney />
    <footer className="site-footer"><div className="shell site-footer__inner"><a href="/" className="footer-logo">MO Co.</a><p>Concepto independiente inspirado en el universo de Hora de Aventura.<br />Sitio no oficial. Ambientación de «Be More» e ilustraciones conceptuales.</p><a href="/">Volver al inicio</a></div></footer>
  </body></html>;
}
