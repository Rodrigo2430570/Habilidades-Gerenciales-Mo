import { Fragment } from 'react';
import { Hero } from '@/components/sections/Hero';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { EditorialGallery } from '@/components/sections/EditorialGallery';
import { Navigation } from '@/components/sections/Navigation';
import { MotionController } from '@/components/motion/MotionController';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const swot = [
  { number: '01', title: 'Fortalezas', label: 'Lo que nos impulsa', tone: 'mint' as const, items: ['Tecnología avanzada para robots autónomos.', 'Diversidad de robots para distintas tareas.', 'Infraestructura propia en sistemas MO.', 'Personal capacitado para restauración.', 'Creaciones excepcionales, como BMO.'] },
  { number: '02', title: 'Oportunidades', label: 'Lo que podemos explorar', tone: 'dark' as const, items: ['Cubrir necesidades de asistencia.', 'Intercambio con otros inventores.', 'Recuperación de materiales y piezas.', 'Uso de robots para exploración.', 'Aprendizaje por convivencia con los MO.'] },
  { number: '03', title: 'Debilidades', label: 'Lo que debemos mejorar', tone: 'white' as const, items: ['Dependencia del creador, Moe.', 'Deterioro en áreas de la fábrica.', 'Procedimientos rígidos ante fallas.', 'Fallas en el control de acceso.', 'Limitaciones de unidades ante lo desconocido.', 'Dependencia de personal especializado.'] },
  { number: '04', title: 'Amenazas', label: 'Lo que debemos anticipar', tone: 'paper' as const, items: ['Ataques contra las instalaciones.', 'Escasez de componentes.', 'Catástrofes en equipos e infraestructura.', 'Mal uso de la tecnología por terceros.', 'Aislamiento que dificulte recibir ayuda.', 'Daños por exposición a radiación.'] },
];

const goals = [
  { number: '01', title: 'Mejorar el mantenimiento', deadline: '3 MESES', description: 'Inspeccionar todas las unidades MO, elaborar diagnósticos individuales y resolver las fallas reparables.', metrics: [['100 %', 'unidades inspeccionadas'], ['≥ 80 %', 'fallas reparables resueltas']], criteria: [['Qué haremos', 'Inspeccionar y reparar las unidades MO.'], ['Cómo lo mediremos', 'Revisar el 100 % y reparar al menos el 80 % de las fallas.'], ['Con qué contamos', 'Recursos y conocimientos técnicos de MO Co.'], ['Por qué importa', 'Mantiene los robots funcionando correctamente.'], ['Plazo', '3 meses.']] },
  { number: '02', title: 'Proteger los recuerdos', deadline: '4 MESES', description: 'Crear un respaldo antes de cada reparación y comprobar la recuperación de la información.', metrics: [['100 %', 'unidades intervenidas con respaldo'], ['Prueba', 'de recuperación de datos']], criteria: [['Qué haremos', 'Crear respaldos antes de cada reparación.'], ['Cómo lo mediremos', 'Aplicarlo al 100 % de las unidades intervenidas.'], ['Con qué contamos', 'Sistemas de almacenamiento de MO Co.'], ['Por qué importa', 'Evita la pérdida de recuerdos e información.'], ['Plazo', '4 meses.']] },
  { number: '03', title: 'Conservar el conocimiento de Moe', deadline: '4 MESES', description: 'Documentar procedimientos esenciales y transferir el conocimiento a unidades MO capacitadas.', metrics: [['5', 'procedimientos documentados'], ['3 MO', 'unidades capacitadas'], ['≥ 90 %', 'en evaluación práctica']], criteria: [['Qué haremos', 'Documentar y transferir los conocimientos de Moe.'], ['Cómo lo mediremos', 'Crear 5 procedimientos, capacitar 3 MO y alcanzar al menos 90 % en evaluación.'], ['Con qué contamos', 'Moe puede capacitar gradualmente a las unidades.'], ['Por qué importa', 'Reduce la dependencia de una sola persona.'], ['Plazo', '4 meses.']] },
];

const strategies = [
  { number: '01', title: 'Mantenimiento con prioridad', copy: 'Organizar el mantenimiento preventivo por tipo de robot y prioridad de falla, aprovechando la especialización de los MO.' },
  { number: '02', title: 'Respaldos verificables', copy: 'Integrar la copia y la recuperación de datos al proceso de reparación, evitando que el borrado sea la respuesta automática.' },
  { number: '03', title: 'Conocimiento compartido', copy: 'Transferir gradualmente el saber de Moe a un archivo técnico y a varias unidades capacitadas.' },
];

const actions = [
  { number: '01', title: 'Mantenimiento de los MO', time: '3 MESES', steps: ['Registrar las unidades.', 'Inspeccionar y clasificar las fallas.', 'Asignar reparaciones y verificar el funcionamiento.'], people: 'Moe y 2 unidades MO especializadas en mantenimiento.', budget: '8,000 UM estimadas' },
  { number: '02', title: 'Respaldo y recuperación', time: '4 MESES', steps: ['Preparar almacenamiento seguro.', 'Crear el procedimiento de copia previa.', 'Probar la recuperación de datos.'], people: 'Moe y 2 unidades MO de sistemas y almacenamiento.', budget: '5,000 UM estimadas' },
  { number: '03', title: 'Transferencia de conocimientos', time: '4 MESES', steps: ['Documentar 5 procedimientos esenciales.', 'Elaborar manuales técnicos.', 'Capacitar a 3 unidades MO y evaluar su desempeño.'], people: 'Moe como instructor y 3 unidades MO en capacitación.', budget: '3,500 UM estimadas' },
];

function SectionHeading({ number, title, subtitle, id }: { number: string; title: string; subtitle: string; id: string }) {
  const words = title.split(' ');
  return <div className="section-heading" data-reveal="heading"><span className="section-number" aria-hidden="true">{number}</span><div><h2 id={id}>{words.map((word, index) => <Fragment key={`${word}-${index}`}><span className="section-heading__word-mask"><span>{word}</span></span>{index < words.length - 1 ? ' ' : null}</Fragment>)}</h2><p>{subtitle}</p></div></div>;
}

function BlockHeading({ id, title, note }: { id: string; title: string; note?: string }) {
  const editorialReveal = ['swot-title', 'action-title', 'structure-title', 'results-title'].includes(id);
  return <div className="block-intro" data-reveal={editorialReveal ? 'rise' : undefined}><h3 id={id}>{title}</h3>{note && <p>{note}</p>}</div>;
}

export default function Home() {
  return <>
    <MotionController />
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <Navigation />
    <main id="contenido">
      <Hero />

      <section id="estrategia" className="page-section strategy" aria-labelledby="strategy-title"><div className="shell">
        <SectionHeading number="01" title="Nuestra estrategia" subtitle="Pensamos en el futuro de los MO sin perder de vista lo que debemos cuidar hoy." id="strategy-title" />
        <FeatureGrid />
        <div id="panorama" className="content-block"><BlockHeading id="swot-title" title="Nuestro panorama" note="Conocemos nuestras capacidades y nuestro entorno para tomar mejores decisiones." />
          <div className="swot-grid" data-stagger>{swot.map(item => <Card tone={item.tone} className="swot-card" key={item.title}><div className="swot-card__top"><span>{item.number} / FODA</span></div><h4>{item.title}</h4><p className="swot-card__label">{item.label}</p><ul>{item.items.map(value => <li key={value}>{value}</li>)}</ul></Card>)}</div>
        </div>
        <div id="objetivos" className="content-block"><BlockHeading id="goals-title" title="Hacia dónde vamos" note="Tres objetivos con plazos y criterios medibles. Las cifras son metas previstas, no resultados alcanzados." />
          <div className="goals-grid" data-stagger>{goals.map(goal => <Card className="goal-card" key={goal.number}><div className="goal-card__top"><span>{goal.number}</span><span>{goal.deadline}</span></div><h4>{goal.title}</h4><p>{goal.description}</p><div className="goal-card__metrics">{goal.metrics.map(([figure, label]) => <div key={label}><strong>{figure}</strong><span>{label}</span></div>)}</div><details><summary>Cómo lo haremos y mediremos <span aria-hidden="true">+</span></summary><dl>{goal.criteria.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl></details></Card>)}</div>
        </div>
        <div id="estrategias" className="content-block"><BlockHeading id="strategies-title" title="Nuestras estrategias" note="Convertimos los retos identificados en líneas de trabajo concretas." /><div className="strategy-list" data-stagger>{strategies.map(item => <article key={item.number}><span>{item.number}</span><h4>{item.title}</h4><p>{item.copy}</p></article>)}</div></div>
        <div id="accion" className="content-block action-block"><BlockHeading id="action-title" title="De la estrategia a la acción" note="Acciones, responsables, presupuesto estimado y plazo de cada iniciativa." /><div className="action-grid" data-stagger>{actions.map(item => <Card tone="paper" className="action-card" key={item.number}><span className="action-card__number">{item.number} / {item.time}</span><h4>{item.title}</h4><ol>{item.steps.map(step => <li key={step}>{step}</li>)}</ol><div className="action-card__meta"><p><strong>Responsables</strong>{item.people}</p><p><strong>Recursos</strong>{item.budget}</p></div></Card>)}</div></div>
      </div></section>

      <section id="organizacion" className="page-section organization" aria-labelledby="organization-title"><div className="shell">
        <SectionHeading number="02" title="Nuestra organización" subtitle="Las iniciativas documentadas reúnen dirección técnica y unidades MO especializadas." id="organization-title" />
        <div className="content-block"><BlockHeading id="structure-title" title="Nuestra estructura" note="Estructura de ejecución de los tres planes documentados. El organigrama general de la empresa aún está por definir." /><div className="org-chart" data-reveal="org"><div className="org-chart__lead"><span>DIRECCIÓN TÉCNICA E INSTRUCCIÓN</span><strong>Moe</strong><p>Responsable principal de mantenimiento e instructor en la transferencia de conocimiento.</p></div><div className="org-chart__branches"><div><span>01 / MANTENIMIENTO</span><strong>2 unidades MO</strong></div><div><span>02 / SISTEMAS Y DATOS</span><strong>2 unidades MO</strong></div><div><span>03 / FORMACIÓN</span><strong>3 unidades MO</strong></div></div></div></div>
        <div className="content-block"><BlockHeading id="areas-title" title="Nuestras áreas" note="Frentes de trabajo presentes en el plan de acción; no equivalen todavía a departamentos formales." /><div className="grid gap-5 md:grid-cols-3" data-stagger><Card className="simple-card"><span>01</span><h4>Mantenimiento</h4><p>Registro, inspección, clasificación de fallas, reparación y verificación de unidades MO.</p></Card><Card className="simple-card"><span>02</span><h4>Sistemas e información</h4><p>Almacenamiento seguro, respaldos previos y pruebas de recuperación de datos.</p></Card><Card className="simple-card"><span>03</span><h4>Conocimiento técnico</h4><p>Documentación, manuales, capacitación y evaluación de unidades MO.</p></Card></div></div>
        <div className="content-block"><BlockHeading id="team-title" title="Nuestro equipo" note="Puestos, funciones y responsabilidades descritos en los planes disponibles." /><div className="team-rows" data-stagger><div><strong>Moe</strong><span>Responsable técnico e instructor</span><p>Coordina el mantenimiento y transmite procedimientos esenciales.</p></div><div><strong>MO de mantenimiento</strong><span>2 unidades asignadas</span><p>Apoyan inspecciones, reparaciones y comprobación de funcionamiento.</p></div><div><strong>MO de sistemas</strong><span>2 unidades asignadas</span><p>Apoyan el almacenamiento y la recuperación de información.</p></div><div><strong>MO en capacitación</strong><span>3 unidades seleccionadas</span><p>Aprenden los procedimientos y presentan una evaluación práctica.</p></div></div></div>
      </div></section>

      <section id="trabajo" className="page-section work" aria-labelledby="work-title"><div className="shell">
        <SectionHeading number="03" title="Nuestra forma de trabajar" subtitle="Cuidado, responsabilidad y conocimiento compartido orientan cada iniciativa documentada." id="work-title" />
        <div className="work-grid"><div className="work-lead"><BlockHeading id="culture-title" title="Nuestra cultura de trabajo" /><p>Los cinco valores de MO Co. orientan la forma de cuidar a los robots, preservar recuerdos, responder por la tecnología y mejorar sus capacidades.</p><div className="work-quote" data-reveal="rise">Cuidar lo creado.<br /><em>Compartir lo aprendido.</em></div></div><div className="work-details" data-stagger><div><span>01</span><h3>Cómo lideramos</h3><p>Moe figura como responsable principal del mantenimiento y como instructor de las unidades seleccionadas. El estilo formal de liderazgo aún no está documentado.</p></div><div><span>02</span><h3>Cómo nos comunicamos</h3><p>El plan prevé registros, diagnósticos, manuales y evaluación para compartir información técnica. Los canales de comunicación interna están por definir.</p></div><div><span>03</span><h3>Cómo impulsamos a nuestro equipo</h3><p>La capacitación de tres unidades MO y su evaluación práctica están previstas. No se han definido otras políticas de motivación o reconocimiento.</p></div><div><span>04</span><h3>Trabajamos en equipo</h3><p>Moe y las unidades MO asignadas colaboran en mantenimiento, protección de datos y transferencia de conocimientos, con responsabilidades descritas por iniciativa.</p></div></div></div>
      </div></section>

      <section id="compromiso" className="page-section commitment" aria-labelledby="commitment-title"><div className="shell">
        <SectionHeading number="04" title="Nuestro compromiso" subtitle="Los objetivos se sostienen con criterios claros y verificaciones previstas." id="commitment-title" />
        <div className="content-block"><BlockHeading id="standards-title" title="Nuestros estándares" note="Criterios expresados en los objetivos y planes de acción existentes." /><div className="standards-grid" data-stagger><div><strong>Funcionamiento</strong><p>Diagnóstico individual y verificación después de reparar.</p></div><div><strong>Información protegida</strong><p>Respaldo previo a las intervenciones y recuperación comprobada.</p></div><div><strong>Conocimiento conservado</strong><p>Procedimientos documentados, formación y evaluación práctica.</p></div></div></div>
        <div className="content-block"><BlockHeading id="results-title" title="Medimos nuestros resultados" note="Metas previstas: estos números describen lo que buscamos alcanzar, no avances ya obtenidos." /><div className="kpi-grid" data-stagger><div><strong>100 %</strong><span>unidades MO por inspeccionar</span></div><div><strong>≥ 80 %</strong><span>fallas reparables por resolver</span></div><div><strong>100 %</strong><span>unidades intervenidas con respaldo</span></div><div><strong>5</strong><span>procedimientos por documentar</span></div><div><strong>3 MO</strong><span>unidades por capacitar</span></div><div><strong>≥ 90 %</strong><span>meta de evaluación práctica</span></div></div></div>
        <div className="content-block"><BlockHeading id="improvement-title" title="Seguimiento y mejora" note="Controles previstos en los planes de acción. Un proceso general de mejora continua está pendiente de definición." /><div className="process-grid" data-stagger><div><span>01</span><strong>Inspeccionar</strong><p>Registrar unidades y clasificar fallas.</p></div><div><span>02</span><strong>Verificar</strong><p>Comprobar funcionamiento y recuperación de datos.</p></div><div><span>03</span><strong>Documentar</strong><p>Preparar procedimientos y manuales técnicos.</p></div><div><span>04</span><strong>Evaluar</strong><p>Revisar el aprendizaje de las unidades capacitadas.</p></div></div></div>
        <div className="closing" data-reveal="fade"><p>El futuro de los MO empieza por cuidar lo que los hace únicos.</p><Button variant="light" href="#inicio">Volver al inicio</Button></div>
      </div></section>

      <EditorialGallery />
    </main>
    <footer className="site-footer"><div className="shell site-footer__inner" data-reveal="fade"><a href="#inicio" className="footer-logo">MO Co.</a><p>Concepto independiente inspirado en el universo de Hora de Aventura.<br />Sitio no oficial.</p><a href="#inicio">Volver al inicio</a></div></footer>
  </>;
}
