import { Arrow } from '../ui/Arrow';

export function EditorialGallery() {
  return <section className="editorial" aria-labelledby="editorial-title">
    <div className="shell editorial__grid">
      <div className="editorial__copy" data-reveal="rise"><h2 id="editorial-title">Pequeños robots.<br /><em>Grandes posibilidades.</em></h2><p>Entre la fábrica y el mundo de Ooo, cada unidad MO representa una oportunidad para cuidar, explorar y aprender.</p><p className="editorial__context">En «Be More», de Hora de Aventura, MO Co. es la antigua fábrica de Moe en las Tierras Baldías. Bajo su superficie industrial vive una comunidad de MO: distintas formas, capacidades y maneras de ser.</p><a className="editorial__link" href="/organizacion/">Conoce nuestra organización <Arrow /></a></div>
      <figure className="editorial__image"><img src="/assets/mo-comunidad.png" alt="Interpretación de la comunidad MO bajo la fábrica, inspirada en Be More" width="1536" height="1024" loading="lazy" /><figcaption>UNA FÁBRICA. MUCHAS FORMAS DE SER MO.</figcaption></figure>
    </div>
  </section>;
}
