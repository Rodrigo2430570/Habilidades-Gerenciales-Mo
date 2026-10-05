import type { Metadata } from 'next';
import { PageIntro } from '@/components/sections/PageIntro';
import { OrganizationSection } from '@/components/sections/CompanySections';
import { StoryImage } from '@/components/sections/Visuals';

export const metadata: Metadata = { title: 'Organización | MO Co.', description: 'Responsables, áreas de trabajo y equipo de MO Co.' };

export default function OrganizationPage() {
  return <main id="contenido">
    <PageIntro headingId="organization-page-title" title="Un equipo para cada misión." description="Moe y las unidades MO especializadas colaboran en mantenimiento, sistemas y formación." image="/assets/bmo-institute.png" alt="Robot MO de color verde" theme="mint" imageMode="contain" />
    <OrganizationSection />
    <div className="shell page-visual page-visual--after"><StoryImage src="/assets/bmo-taller.png" alt="BMO trabaja en el mantenimiento de una unidad MO" caption="CADA FUNCIÓN CONTRIBUYE AL CUIDADO DE LOS MO" /></div>
  </main>;
}
