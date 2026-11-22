import type { Metadata } from 'next';
import { PageIntro } from '@/components/sections/PageIntro';
import { StrategySection } from '@/components/sections/CompanySections';
import { companyScenes } from '@/components/sections/company-scenes';

export const metadata: Metadata = { title: 'Estrategia | MO Co.', description: 'Filosofía, panorama, objetivos y planes de MO Co.' };

export default function StrategyPage() {
  return <main id="contenido">
    <PageIntro headingId="strategy-page-title" title="Cuidar lo que viene." description="Nuestra estrategia une innovación, mantenimiento y preservación del conocimiento para dar continuidad a los MO." image={companyScenes.factory} alt="Interpretación de la fábrica MO en el desierto de las Tierras Baldías" />
    <StrategySection />
  </main>;
}
