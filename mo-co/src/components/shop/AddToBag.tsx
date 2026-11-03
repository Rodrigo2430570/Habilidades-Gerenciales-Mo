'use client';
import { Plus } from '@/components/ui/Plus';
import { useState } from 'react';
import { useShop } from './ShopProvider';
import { validQuantity } from '@/lib/store';

export function AddToBag({ id }: { id: string }) {
  const { add, ready } = useShop();
  const [quantity, setQuantity] = useState('1');
  const [error, setError] = useState('');
  return <form className="add-to-bag" noValidate onSubmit={event => { event.preventDefault(); const value = Number(quantity); if (!validQuantity(id, value) || value < 1) { setError('Elige una cantidad entera mayor que cero que podamos calcular.'); return; } setError(''); add(id, value); }}>
    <div><label htmlFor={`quantity-${id}`}>Cantidad</label><input id={`quantity-${id}`} type="number" min="1" step="1" inputMode="numeric" value={quantity} onChange={event => setQuantity(event.target.value)} aria-invalid={!!error} aria-describedby={error ? `quantity-error-${id}` : undefined}/></div><button className="shop-button shop-button--primary" disabled={!ready} type="submit">Agregar a la bolsa <Plus /></button>{error && <p id={`quantity-error-${id}`} className="field-error" role="alert">{error}</p>}
  </form>;
}
