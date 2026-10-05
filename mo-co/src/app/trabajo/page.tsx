import type { Metadata } from 'next';
import { PageIntro } from '@/components/sections/PageIntro';
import { WorkSection } from '@/components/sections/CompanySections';
import { StoryImage } from '@/components/sections/Visuals';

export const metadata: Metadata = { title: 'Forma de trabajar | MO Co.', description: 'Cuidado, responsabilidad y colaboración en MO Co.' };

export default function WorkPage() {
  return <main id="contenido">
    <PageIntro headingId="work-page-title" title="Cuidar, aprender, compartir." description="Los valores de MO Co. guían la forma de preservar recuerdos, mejorar capacidades y trabajar juntos." image="/assets/mo-memoria.png" alt="Mesa de trabajo con manuales, piezas y memorias en la antigua fábrica MO" />
    <WorkSection />
    <div className="shell page-visual page-visual--after"><StoryImage src="/assets/mo-comunidad.png" alt="Diversas unidades MO comparten los espacios de la fábrica" caption="EL TRABAJO SE CONSTRUYE EN EQUIPO" /></div>
  </main>;
}
