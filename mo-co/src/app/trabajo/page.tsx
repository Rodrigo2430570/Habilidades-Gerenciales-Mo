import type { Metadata } from 'next';
import { PageIntro } from '@/components/sections/PageIntro';
import { WorkSection } from '@/components/sections/CompanySections';
import { GraphicStory } from '@/components/sections/Visuals';

export const metadata: Metadata = { title: 'Forma de trabajar | MO Co.', description: 'Cuidado, responsabilidad y colaboración en MO Co.' };

export default function WorkPage() {
  return <main id="contenido">
    <PageIntro headingId="work-page-title" title="Cuidar, aprender, compartir." description="Los valores de MO Co. guían la forma de preservar recuerdos, mejorar capacidades y trabajar juntos." image="/assets/bmo-archivo.png" alt="BMO conserva un módulo de memoria en el archivo MO" />
    <WorkSection />
    <div className="shell page-visual page-visual--after"><GraphicStory caption="EL TRABAJO SE CONSTRUYE EN EQUIPO" /></div>
  </main>;
}
