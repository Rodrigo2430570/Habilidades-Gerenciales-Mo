import type { Metadata } from 'next';
import './globals.css';
import './motion.css';

export const metadata: Metadata = {
  title: 'MO Co. | Tecnología con corazón',
  description: 'Conoce la estrategia, organización y compromisos de MO Co., el instituto de robótica de Ooo.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
