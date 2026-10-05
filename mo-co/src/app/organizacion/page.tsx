import type { Metadata } from 'next';
import { PageIntro } from '@/components/sections/PageIntro';
import { OrganizationSection } from '@/components/sections/CompanySections';
import { StoryImage } from '@/components/sections/Visuals';

export const metadata: Metadata = { title: 'Organización | MO Co.', description: 'Responsables, áreas de trabajo y equipo de MO Co.' };

export default function OrganizationPage() {
  return <main id="contenido">
    <PageIntro headingId="organization-page-title" title="Un equipo para cada misión." description="Moe y las unidades MO especializadas colaboran en mantenimiento, sistemas y formación." image="/assets/mo-comunidad.png" alt="Unidades MO de distintas formas conviven en las galerías subterráneas de la fábrica" theme="mint" />
    <OrganizationSection />
    <div className="shell page-visual page-visual--after"><StoryImage src="/assets/mo-memoria.png" alt="Herramientas y documentación para conservar las capacidades de los MO" caption="CADA FUNCIÓN CONTRIBUYE AL CUIDADO DE LOS MO" /></div>
  </main>;
}
