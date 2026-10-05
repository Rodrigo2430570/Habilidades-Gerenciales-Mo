'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { companyPages } from './site-map';

const navigation = [['/', 'Inicio'], ...companyPages.map(page => [page.href, page.label])];

export function Navigation() {
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (event.target instanceof Node && mobileMenu.current && !mobileMenu.current.contains(event.target)) mobileMenu.current.open = false;
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenu.current?.open) {
        mobileMenu.current.open = false;
        mobileMenu.current.querySelector('summary')?.focus();
      }
    };
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', escape); };
  }, []);

  return <header className="site-header"><div className="shell site-header__inner">
    <a className="brand" href="/" aria-label="MO Co., ir al inicio"><span className="brand__symbol">MO<span>•</span></span><span className="brand__name">MO Co.<small>CREADOS PARA CONECTAR</small></span></a>
    <nav className="desktop-nav" aria-label="Navegación principal">{navigation.map(([href, label]) => <a key={href} href={href} aria-current={pathname === href || `${pathname}/` === href ? 'page' : undefined}>{label}</a>)}</nav>
    <details className="mobile-nav" ref={mobileMenu}><summary>Menú <span aria-hidden="true">+</span></summary><nav aria-label="Navegación móvil">{navigation.map(([href, label]) => <a key={href} href={href} aria-current={pathname === href || `${pathname}/` === href ? 'page' : undefined} onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }}>{label}</a>)}</nav></details>
  </div></header>;
}
