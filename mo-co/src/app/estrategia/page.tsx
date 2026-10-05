import type { Metadata } from 'next';
import { PageIntro } from '@/components/sections/PageIntro';
import { StrategySection } from '@/components/sections/CompanySections';
import { PlanTimeline, StoryImage } from '@/components/sections/Visuals';

export const metadata: Metadata = { title: 'Estrategia | MO Co.', description: 'Filosofía, panorama, objetivos y planes de MO Co.' };

export default function StrategyPage() {
  return <main id="contenido">
    <PageIntro headingId="strategy-page-title" title="Cuidar lo que viene." description="Nuestra estrategia une innovación, mantenimiento y preservación del conocimiento para dar continuidad a los MO." image="/assets/mo-fabrica.png" alt="Interpretación de la fábrica MO en el desierto de las Tierras Baldías" />
    <div className="shell page-visual"><PlanTimeline /></div>
    <StrategySection />
    <div className="shell page-visual page-visual--after"><StoryImage src="/assets/mo-memoria.png" alt="Archivo técnico con manuales y módulos de memoria en la fábrica MO" caption="EL CONOCIMIENTO TAMBIÉN SE CUIDA" /></div>
  </main>;
}
