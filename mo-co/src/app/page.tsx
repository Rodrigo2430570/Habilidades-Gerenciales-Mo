import { Hero } from '@/components/sections/Hero';
import { EditorialGallery } from '@/components/sections/EditorialGallery';

const destinations = [
  { href: '/estrategia/', title: 'Estrategia', description: 'Nuestra filosofía, el panorama y los planes que guían cada decisión.', image: '/assets/bmo-taller.png', alt: 'BMO revisa una unidad MO en el taller', className: 'home-destination--wide' },
  { href: '/organizacion/', title: 'Organización', description: 'Conoce a Moe y a las unidades que participan en las iniciativas.', image: '/assets/bmo-institute.png', alt: 'Robot MO de color verde', className: 'home-destination--portrait' },
  { href: '/trabajo/', title: 'Forma de trabajar', description: 'Cuidado, colaboración y conocimiento compartido en la práctica.', image: '/assets/bmo-archivo.png', alt: 'BMO conserva recuerdos junto a otras unidades MO', className: 'home-destination--wide' },
  { href: '/compromiso/', title: 'Compromiso', description: 'Metas previstas y criterios para comprobar nuestro trabajo.', image: '/assets/mundo-mo.png', alt: 'Robots MO en un paisaje verde', className: 'home-destination--landscape' },
];

export default function Home() {
  return <main id="contenido">
    <Hero />
    <section className="home-wayfinding" aria-labelledby="explora-title">
      <div className="shell">
        <div className="home-wayfinding__intro">
          <h2 id="explora-title">Conoce MO Co. a tu ritmo.</h2>
          <p>Cuatro páginas para descubrir qué nos mueve, cómo nos organizamos y qué nos proponemos lograr.</p>
        </div>
        <div className="home-destinations">
          {destinations.map(item => <a className={`home-destination ${item.className}`} href={item.href} key={item.href}>
            <div className="home-destination__image"><img src={item.image} alt={item.alt} loading="lazy" /></div>
            <div className="home-destination__copy"><h3>{item.title}</h3><p>{item.description}</p><span aria-hidden="true">↗</span></div>
          </a>)}
        </div>
      </div>
    </section>
    <EditorialGallery />
  </main>;
}
