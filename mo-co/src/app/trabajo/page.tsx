import type { Metadata } from 'next';
import { PageIntro } from '@/components/sections/PageIntro';
import { WorkSection } from '@/components/sections/CompanySections';
import { companyScenes } from '@/components/sections/company-scenes';

export const metadata: Metadata = { title: 'Forma de trabajar | MO Co.', description: 'Cuidado, responsabilidad y colaboración en MO Co.' };

export default function WorkPage() {
  return <main id="contenido">
    <PageIntro headingId="work-page-title" title="Cuidar, aprender, compartir." description="Los valores de MO Co. guían la forma de preservar recuerdos, mejorar capacidades y trabajar juntos." image={companyScenes.archive} alt="Mesa de trabajo con manuales, piezas y memorias en la antigua fábrica MO" />
    <WorkSection />
  </main>;
}
