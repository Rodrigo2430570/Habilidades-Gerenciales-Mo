'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { companyPages, pageIndex } from './site-map';
import { Arrow } from '../ui/Arrow';

export function ReadingNavigation() {
  const pathname = usePathname();
  const index = pageIndex(pathname);
  const page = companyPages[index];
  const [active, setActive] = useState('');

  useEffect(() => {
    if (!page) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const edge = (document.querySelector('.site-header')?.getBoundingClientRect().height ?? 78) + 90;
      let current: string = page.sections[0][0];
      for (const [id] of page.sections) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= edge) current = id;
      }
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [page]);

  if (!page) return null;
  return <div className="reading-nav"><div className="shell reading-nav__inner">
    <a className="reading-nav__home" href="/#explora-title"><Arrow direction="left" /><span>Inicio</span></a>
    <span className="reading-nav__page">{page.label}</span>
    <nav className="reading-nav__sections" aria-label="En esta página">{page.sections.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>{label}</a>)}</nav>
  </div></div>;
}

export function PageJourney() {
  const index = pageIndex(usePathname());
  if (index < 0) return null;
  const previous = companyPages[index - 1];
  const next = companyPages[index + 1];
  return <nav className="page-journey shell" aria-label="Continuar el recorrido">
    <div className="page-journey__heading"><h2>Sigamos conociendo MO Co.</h2><a href="/#explora-title">Ver todos los apartados <Arrow /></a></div>
    <div className="page-journey__links">
      <a className="journey-link" href={previous?.href ?? '/#explora-title'}><Arrow direction="left" /><span><small>{previous ? 'Anterior' : 'Volver a'}</small><strong>{previous?.label ?? 'Inicio'}</strong></span></a>
      <a className="journey-link journey-link--next" href={next?.href ?? '/#explora-title'}><span><small>{next ? 'Siguiente' : 'Volver a explorar'}</small><strong>{next?.label ?? 'MO Co.'}</strong></span><Arrow /></a>
    </div>
  </nav>;
}
