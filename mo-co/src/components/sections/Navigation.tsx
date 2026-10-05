'use client';

import { useRef } from 'react';

const navigation = [
  ['#estrategia', 'Nuestra estrategia'],
  ['#organizacion', 'Nuestra organización'],
  ['#trabajo', 'Nuestra forma de trabajar'],
  ['#compromiso', 'Nuestro compromiso'],
];

export function Navigation() {
  const mobileMenu = useRef<HTMLDetailsElement>(null);

  return <header className="site-header"><div className="shell site-header__inner">
    <a className="brand" href="#inicio" aria-label="MO Co., ir al inicio"><span className="brand__symbol">MO<span>•</span></span><span className="brand__name">MO Co.<small>CREADOS PARA CONECTAR</small></span></a>
    <nav className="desktop-nav" aria-label="Navegación principal">{navigation.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav>
    <details className="mobile-nav" ref={mobileMenu}><summary>Menú <span aria-hidden="true">+</span></summary><nav aria-label="Navegación móvil">{navigation.map(([href, label]) => <a key={href} href={href} onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }}>{label}</a>)}</nav></details>
  </div></header>;
}
