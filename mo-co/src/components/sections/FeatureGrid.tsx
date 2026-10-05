import { Card } from '../ui/Card';

const values = [
  ['Cuidado', 'Bienestar y funcionamiento de los MO.'],
  ['Responsabilidad', 'Atender las consecuencias tecnológicas.'],
  ['Preservación', 'Conservar conocimientos y recuerdos.'],
  ['Calidad', 'Garantizar la durabilidad de los MO.'],
  ['Innovación', 'Mejorar las capacidades tecnológicas.'],
];

export function FeatureGrid() {
  return <div id="filosofia" className="content-block">
    <div className="block-intro"><h3>Nuestra filosofía</h3><p>La tecnología cobra sentido cuando ayuda a preservar lo que importa.</p></div>
    <div className="grid gap-5 md:grid-cols-2" data-stagger>
      <Card tone="mint" className="philosophy-card"><span className="card-kicker">MISIÓN</span><h4>Crear para conectar.</h4><p>Crear robots MO con capacidades especializadas para distintas tareas y desarrollar interacciones que vayan más allá de una función mecánica.</p></Card>
      <Card className="philosophy-card"><span className="card-kicker">VISIÓN</span><h4>Que el legado siga vivo.</h4><p>Preservar el legado tecnológico de Moe y asegurar la continuidad de los MO mediante innovación, mantenimiento y desarrollo de sus capacidades.</p></Card>
    </div>
    <div className="values-head"><h4>Los valores que nos guían</h4><span>05 PRINCIPIOS</span></div>
    <div className="values-grid" data-stagger>{values.map(([title, description], index) => <div className="value" key={title}><span>0{index + 1}</span><h5>{title}</h5><p>{description}</p></div>)}</div>
  </div>;
}
