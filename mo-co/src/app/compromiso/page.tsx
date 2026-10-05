import type { Metadata } from 'next';
import { PageIntro } from '@/components/sections/PageIntro';
import { CommitmentSection } from '@/components/sections/CompanySections';
import { TargetChart } from '@/components/sections/Visuals';
import { BmoMotif } from '@/components/graphics/BmoMotif';

export const metadata: Metadata = { title: 'Compromiso | MO Co.', description: 'Estándares, metas previstas y seguimiento de MO Co.' };

export default function CommitmentPage() {
  return <main id="contenido">
    <PageIntro headingId="commitment-page-title" title="Metas claras. Cuidado real." description="Definimos criterios verificables para el funcionamiento de los MO, la protección de sus datos y la transferencia del conocimiento." visual={<BmoMotif variant="commitment" />} theme="paper" />
    <div className="shell page-visual"><TargetChart /></div>
    <CommitmentSection />
  </main>;
}
