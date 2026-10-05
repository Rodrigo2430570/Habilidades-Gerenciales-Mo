export function StoryImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return <figure className="story-image" data-reveal="image"><img src={src} alt={alt} loading="lazy" width="1536" height="1024" /><figcaption>{caption}</figcaption></figure>;
}

const plans = [
  { name: 'Mantenimiento', duration: '3 meses', width: '75%' },
  { name: 'Respaldo y recuperación', duration: '4 meses', width: '100%' },
  { name: 'Transferencia de conocimientos', duration: '4 meses', width: '100%' },
];

export function PlanTimeline() {
  return <div className="plan-timeline" role="img" aria-label="Plazos previstos: mantenimiento tres meses, respaldo y recuperación cuatro meses, transferencia de conocimientos cuatro meses">
    <div className="plan-timeline__heading"><h3>Horizonte de los planes</h3><p>Duración prevista de cada iniciativa. No indica avance alcanzado.</p></div>
    <div className="plan-timeline__scale" aria-hidden="true"><span>Inicio</span><span>1 mes</span><span>2 meses</span><span>3 meses</span><span>4 meses</span></div>
    {plans.map(plan => <div className="plan-timeline__row" key={plan.name}><strong>{plan.name}</strong><div className="plan-timeline__track"><span style={{ width: plan.width }} /></div><span>{plan.duration}</span></div>)}
  </div>;
}

const targets = [
  { name: 'Unidades por inspeccionar', value: 100, label: '100 %' },
  { name: 'Fallas reparables por resolver', value: 80, label: '≥ 80 %' },
  { name: 'Evaluación práctica', value: 90, label: '≥ 90 %' },
];

export function TargetChart() {
  return <div className="target-chart" aria-labelledby="target-chart-title">
    <div className="target-chart__heading"><h3 id="target-chart-title">Umbrales previstos</h3><p>Las marcas muestran objetivos del plan, no resultados actuales.</p></div>
    <div className="target-chart__plot">
      {targets.map(target => <div className="target-chart__row" key={target.name}>
        <span>{target.name}</span>
        <div className="target-chart__track" role="img" aria-label={`${target.name}: meta ${target.label}`}><i style={{ left: `${target.value}%` }} /></div>
        <strong>{target.label}</strong>
      </div>)}
      <div className="target-chart__scale" aria-hidden="true"><span>0</span><span>25</span><span>50</span><span>75</span><span>100 %</span></div>
    </div>
  </div>;
}
