import { Button } from '../ui/Button';

export function Hero() {
  return <section id="inicio" className="hero" aria-labelledby="hero-title">
    <div className="shell hero__grid">
      <div className="hero__copy">
        <p className="hero__mark"><span className="hero__mark-name">MO Co.</span><span className="hero__mark-tag">CREADOS PARA CONECTAR</span></p>
        <h1 id="hero-title"><span className="hero__title-mask"><span className="hero__title-line">Tecnología</span></span>{' '}<span className="hero__title-mask"><span className="hero__title-line">con <em>corazón.</em></span></span></h1>
        <p className="hero__lead">Creamos robots MO para ayudar, aprender y conectar. Cuidamos sus capacidades, sus recuerdos y el conocimiento que los hizo posibles.</p>
        <div className="hero__cta"><Button href="#estrategia">Conoce nuestra estrategia</Button></div>
      </div>
      <div className="hero__art">
        <span className="hero__art-word" aria-hidden="true">MO</span>
        {/* Local project artwork; not presented as official franchise imagery. */}
        <div className="hero__mascot-entry">
          <div className="hero__mascot-parallax">
            <div className="hero__mascot-reactive">
              <div className="hero__mascot-hover">
                <div className="hero__mascot-float">
                  <img src="/assets/bmo-institute.png" width="1122" height="1402" alt="Robot MO verde con controles de colores y expresión curiosa" fetchPriority="high" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>UN PROPÓSITO EN CADA CIRCUITO</p>
      </div>
    </div>
    <div className="shell hero__foot"><span>INSTITUTO DE ROBÓTICA DE OOO</span><a href="#estrategia">Explora MO Co.</a></div>
  </section>;
}
