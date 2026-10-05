export const companyPages = [
  { href: '/estrategia/', label: 'Estrategia', sections: [['filosofia', 'Filosofía'], ['panorama', 'Panorama'], ['objetivos', 'Objetivos'], ['estrategias', 'Estrategias'], ['accion', 'Planes de acción']] },
  { href: '/organizacion/', label: 'Organización', sections: [['structure-title', 'Estructura'], ['areas-title', 'Áreas'], ['team-title', 'Equipo']] },
  { href: '/trabajo/', label: 'Forma de trabajar', sections: [['culture-title', 'Cultura'], ['work-practices', 'Colaboración']] },
  { href: '/compromiso/', label: 'Compromiso', sections: [['target-chart-title', 'Metas'], ['standards-title', 'Estándares'], ['results-title', 'Resultados previstos'], ['improvement-title', 'Seguimiento']] },
] as const;

export function pageIndex(pathname: string) {
  return companyPages.findIndex(page => page.href === `${pathname.replace(/\/$/, '')}/`);
}
