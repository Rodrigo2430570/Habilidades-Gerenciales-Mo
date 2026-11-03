'use client';
import { Arrow } from '@/components/ui/Arrow';
import { useMemo, useState } from 'react';
import { accessibleProductName, categories, matchesProduct, money, products, rules } from '@/lib/store';
import { useShop } from './ShopProvider';

export function ProductCatalog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todos');
  const [sort, setSort] = useState('recommended');
  const { add, ready } = useShop();
  const results = useMemo(() => products.filter(product => (category === 'Todos' || product.category === category) && matchesProduct(product, query)).sort((a, b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : sort === 'name' ? a.name.localeCompare(b.name, 'es') : products.indexOf(a) - products.indexOf(b)), [query, category, sort]);
  function clear() { setQuery(''); setCategory('Todos'); setSort('recommended'); }
  return <section className="shell store-shell catalog-section" aria-label="Catálogo de robots MO">
    <div className="catalog-tools"><div className="search-field"><label htmlFor="product-search">Busca tu MO o lo que necesitas</label><div><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg><input id="product-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Nombre, función o modelo" /></div></div>
      <div className="sort-field"><label htmlFor="product-sort">Ordenar por</label><select id="product-sort" value={sort} onChange={event => setSort(event.target.value)}><option value="recommended">Recomendados</option><option value="low">Menor precio</option><option value="high">Mayor precio</option><option value="name">Nombre A–Z</option></select></div>
    </div>
    <fieldset className="category-filters"><legend className="sr-only">Filtrar por categoría</legend>{categories.map(value => <button key={value} type="button" aria-pressed={category === value} onClick={() => setCategory(value)}>{value}</button>)}</fieldset>
    <div className="catalog-count"><p role="status" aria-live="polite">{results.length} {results.length === 1 ? 'MO encontrado' : 'MO encontrados'}</p><button className="text-button" type="button" onClick={clear}>Limpiar filtros</button></div>
    {results.length ? <div className="product-grid">{results.map(product => <article className="product-card" id={product.slug} key={product.id}>
      <a href={`/productos/${product.slug}/`} className="product-card__image" aria-label={`Conocer ${accessibleProductName(product)}`}><img src={product.image} alt={`${product.alt}. ${accessibleProductName(product)}`} width="1024" height="1024" loading="lazy" /></a>
      <div className="product-card__body"><h2><a href={`/productos/${product.slug}/`}>{product.name}</a></h2><p className="product-category">{product.category}</p><p className="product-tagline">{product.tagline}</p><p className="product-price">{money(product.price)} <small>MXN</small></p><ul className="product-highlights"><li>{product.functions.split(',')[0]}</li><li>{product.specs['Autonomía']}</li></ul>
      {product.specialDelivery && <p className="delivery-note">Manejo especial: {money(rules.specialPerUnit)} por unidad.</p>}
      <div className="product-card__actions"><a className="shop-button shop-button--outline" href={`/productos/${product.slug}/`}>Ver mi MO <Arrow /></a><button className="shop-button" type="button" disabled={!ready} onClick={() => add(product.id)}>Agregar a la bolsa</button></div>
      <a className="conditions-link" href="/compras-y-entregas/">Condiciones de compra y entrega</a></div>
    </article>)}</div> : <div className="empty-state"><h2>Probemos otra aventura.</h2><p>No encontramos un MO con esa búsqueda. Prueba con otro nombre o explora el catálogo completo.</p><button className="shop-button" onClick={clear}>Ver todo el catálogo</button></div>}
    <aside className="store-invitation"><div><h2>Hay conexiones que se sienten mejor.</h2><p>Descubre las combinaciones de nuestros paquetes MO.</p></div><a className="shop-button shop-button--outline" href="/paquetes/">Más juntos, mejor <Arrow /></a></aside>
  </section>;
}
