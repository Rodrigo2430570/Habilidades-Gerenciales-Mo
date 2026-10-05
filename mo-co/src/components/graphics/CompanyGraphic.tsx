const principles = [
  { label: 'Funcionamiento', detail: 'Inspeccionar y verificar', path: 'M12 4h8l1 4 4 1 3 7-3 7-4 1-1 4h-8l-1-4-4-1-3-7 3-7 4-1 1-4Zm9 12a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z' },
  { label: 'Información', detail: 'Respaldar y recuperar', path: 'M16 4 27 9v8c0 7-11 12-11 12S5 24 5 17V9L16 4Zm-5 12 4 4 7-8' },
  { label: 'Conocimiento', detail: 'Documentar y compartir', path: 'M16 9c-4-4-9-4-13-2v19c4-2 9-2 13 2 4-4 9-4 13-2V7c-4-2-9-2-13 2Zm0 0v19' },
];

export function CompanyGraphic() {
  return <div className="company-graphic" aria-label="Tres compromisos: funcionamiento, información y conocimiento">
    <div className="company-graphic__core" aria-hidden="true">MO<span>Co.</span></div>
    <div className="company-graphic__branches">{principles.map(item => <div className="company-graphic__principle" key={item.label}>
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={item.path} /></svg>
      <strong>{item.label}</strong><span>{item.detail}</span>
    </div>)}</div>
  </div>;
}
