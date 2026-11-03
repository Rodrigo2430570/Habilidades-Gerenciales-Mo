'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { companyPages } from './site-map';
import { useShop } from '@/components/shop/ShopProvider';

const navigation = [['/', 'Inicio'], ['/#explora-title', 'Conoce MO'], ['/productos/', 'Nuestros productos'], ['/paquetes/', 'Más juntos, mejor'], ['/ayuda/', 'Ayuda']];

export function Navigation() {
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  const { lines } = useShop();
  const count = lines.reduce((sum, line) => sum + line.quantity, 0);

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
    <div className="header-actions"><a className="bag-link" href="/bolsa/" aria-label={`Bolsa, ${count} artículos`} aria-current={pathname.startsWith('/bolsa') ? 'page' : undefined}><svg aria-hidden="true" width="20" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 7h14l2 14H3L5 7Z"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/></svg><span>Bolsa</span><span className="bag-count">{count}</span></a><details className="mobile-nav" ref={mobileMenu}><summary>Menú <span aria-hidden="true">+</span></summary><nav aria-label="Navegación móvil">{navigation.map(([href, label]) => <a key={href} href={href} aria-current={pathname === href || `${pathname}/` === href ? 'page' : undefined} onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }}>{label}</a>)}<div className="mobile-company-links">{companyPages.map(page => <a key={page.href} href={page.href}>{page.label}</a>)}</div></nav></details></div>
  </div></header>;
}
