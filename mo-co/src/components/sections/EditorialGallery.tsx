export function EditorialGallery() {
  return <section className="editorial" aria-labelledby="editorial-title">
    <div className="shell editorial__grid">
      <div className="editorial__copy" data-reveal="rise"><span className="card-kicker">EL MUNDO DE MO CO.</span><h2 id="editorial-title">Pequeños robots.<br /><em>Grandes posibilidades.</em></h2><p>Entre la fábrica y el mundo de Ooo, cada unidad MO representa una oportunidad para cuidar, explorar y aprender.</p></div>
      <figure className="editorial__image" data-reveal="image"><img src="/assets/mundo-mo.png" width="1536" height="1024" loading="lazy" alt="Robots MO en un paisaje verde de Ooo, con la fábrica a lo lejos" /><figcaption>OOO / UN MUNDO PARA CONECTAR</figcaption></figure>
    </div>
  </section>;
}
