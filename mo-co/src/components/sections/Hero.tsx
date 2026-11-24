import { Button } from '../ui/Button';
import { HeroMascot } from './HeroMascot';

export function Hero() {
  return <section id="inicio" className="hero" aria-labelledby="hero-title">
    <div className="shell hero__grid">
      <div className="hero__copy">
        <p className="hero__mark"><span className="hero__mark-name">MO Co.</span><span className="hero__mark-tag">CREADOS PARA CONECTAR</span></p>
        <h1 id="hero-title"><span className="hero__title-line">Tecnología</span>{' '}<span className="hero__title-line">con <em>corazón.</em></span></h1>
        <p className="hero__lead">Creamos robots MO para ayudar, aprender y conectar. Cuidamos sus capacidades, sus recuerdos y el conocimiento que los hizo posibles.</p>
        <div className="hero__cta"><Button href="/estrategia/">Conoce nuestra estrategia</Button></div>
      </div>
      <HeroMascot />
    </div>
    <div className="shell hero__foot"><span>FÁBRICA DE ROBOTS DE OOO</span><a href="#explora-title">Explora MO Co.</a></div>
  </section>;
}
