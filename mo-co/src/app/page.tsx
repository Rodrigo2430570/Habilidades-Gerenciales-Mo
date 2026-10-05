import { Hero } from '@/components/sections/Hero';
import { EditorialGallery } from '@/components/sections/EditorialGallery';
import { CompanyGraphic } from '@/components/graphics/CompanyGraphic';
import { Arrow } from '@/components/ui/Arrow';

const destinations = [
  { href: '/estrategia/', title: 'Estrategia', description: 'Nuestra filosofía, el panorama y los planes que guían cada decisión.', image: '/assets/mo-fabrica.png', alt: 'Interpretación de la antigua fábrica MO entre las arenas de las Tierras Baldías', className: 'home-destination--wide', graphic: false },
  { href: '/organizacion/', title: 'Organización', description: 'Conoce a Moe y a las unidades que participan en las iniciativas.', image: '/assets/mo-comunidad.png', alt: 'Comunidad de unidades MO diversas en las galerías de la fábrica subterránea', className: 'home-destination--landscape', graphic: false },
  { href: '/trabajo/', title: 'Forma de trabajar', description: 'Cuidado, colaboración y conocimiento compartido en la práctica.', image: '/assets/mo-memoria.png', alt: 'Manuales, módulos de memoria y piezas en una mesa de trabajo de la fábrica MO', className: 'home-destination--wide', graphic: false },
  { href: '/compromiso/', title: 'Compromiso', description: 'Metas previstas y criterios para comprobar nuestro trabajo.', image: '', alt: '', className: 'home-destination--graphic', graphic: true },
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
            <div className="home-destination__image">{item.graphic ? <CompanyGraphic /> : <img src={item.image} alt={item.alt} loading="lazy" width="1536" height="1024" />}</div>
            <div className="home-destination__copy"><h3>{item.title}</h3><p>{item.description}</p><span aria-hidden="true"><Arrow /></span></div>
          </a>)}
        </div>
      </div>
    </section>
    <EditorialGallery />
  </main>;
}
