import type { Metadata } from 'next';
import { PageIntro } from '@/components/sections/PageIntro';
import { StrategySection } from '@/components/sections/CompanySections';
import { PlanTimeline, StoryImage } from '@/components/sections/Visuals';

export const metadata: Metadata = { title: 'Estrategia | MO Co.', description: 'Filosofía, panorama, objetivos y planes de MO Co.' };

export default function StrategyPage() {
  return <main id="contenido">
    <PageIntro headingId="strategy-page-title" title="Cuidar lo que viene." description="Nuestra estrategia une innovación, mantenimiento y preservación del conocimiento para dar continuidad a los MO." image="/assets/bmo-taller.png" alt="BMO revisa una unidad MO en un taller" />
    <nav className="page-jump shell" aria-label="En esta página"><a href="#filosofia">Filosofía</a><a href="#panorama">Panorama</a><a href="#objetivos">Objetivos</a><a href="#estrategias">Estrategias</a><a href="#accion">Planes de acción</a></nav>
    <div className="shell page-visual"><PlanTimeline /></div>
    <StrategySection />
    <div className="shell page-visual page-visual--after"><StoryImage src="/assets/bmo-archivo.png" alt="BMO archiva un módulo de memoria junto a otras unidades MO" caption="EL CONOCIMIENTO TAMBIÉN SE CUIDA" /></div>
  </main>;
}
