'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { companyPages, pageIndex } from './site-map';
import { Arrow } from '../ui/Arrow';

export function ReadingNavigation() {
  const pathname = usePathname();
  const index = pageIndex(pathname);
  const page = companyPages[index];
  const [active, setActive] = useState('');
  const sectionsNav = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!page) return;
    let frame = 0;
    const sections = page.sections.map(([id]) => document.getElementById(id));
    const update = () => {
      frame = 0;
      const edge = (sectionsNav.current?.closest('.reading-nav')?.getBoundingClientRect().bottom ?? 128) + 40;
      let current = '';
      for (const section of sections) {
        if (section && section.getBoundingClientRect().top <= edge) current = section.id;
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

  useEffect(() => {
    const nav = sectionsNav.current;
    if (!nav || nav.contains(document.activeElement)) return;
    const current = nav.querySelector('[aria-current="location"]');
    if (!current) return;
    const bounds = nav.getBoundingClientRect();
    const item = current.getBoundingClientRect();
    if (item.left < bounds.left || item.right > bounds.right) {
      nav.scrollBy({ left: item.left - bounds.left - 4, behavior: 'instant' });
    }
  }, [active, page]);

  if (!page) return null;
  return <div className="reading-nav"><div className="shell reading-nav__inner">
    <a className="reading-nav__home" href="/#explora-title"><Arrow direction="left" /><span>Inicio</span></a>
    <span className="reading-nav__page">{page.label}</span>
    <nav ref={sectionsNav} className="reading-nav__sections" aria-label="En esta página">{page.sections.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>{label}</a>)}</nav>
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
