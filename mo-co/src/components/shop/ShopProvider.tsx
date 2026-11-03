'use client';
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { getItem, nextCampaignChange, normalizeCart, validQuantity, type CartLine, type Delivery } from '@/lib/store';

type ShopState = { lines: CartLine[]; delivery: Delivery; setDelivery: (value: Delivery) => void; add: (id: string, quantity?: number) => void; setQuantity: (id: string, quantity: number) => void; now: Date | null; ready: boolean };
const ShopContext = createContext<ShopState | null>(null);
export const useShop = () => { const value = useContext(ShopContext); if (!value) throw new Error('ShopProvider missing'); return value; };
const cartKey = 'mo-bag-v1';

export function ShopProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [delivery, setDelivery] = useState<Delivery>('home');
  const [ready, setReady] = useState(false);
  const [now, setNow] = useState<Date | null>(null);
  const [notice, setNotice] = useState('');
  const [storageError, setStorageError] = useState(false);
  const noticeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    try { const saved = JSON.parse(localStorage.getItem(cartKey) || '{}'); setLines(normalizeCart(saved.lines)); setDelivery(saved.delivery === 'pickup' ? 'pickup' : 'home'); } catch { setStorageError(true); }
    setReady(true);
    let clock: ReturnType<typeof setTimeout>;
    const tick = () => {
      clearTimeout(clock);
      const date = new Date(); setNow(date);
      // Check at least hourly and precisely at the campaign's inclusive date boundaries.
      clock = setTimeout(tick, nextCampaignChange(date));
    };
    tick();
    const focus = () => tick(); window.addEventListener('focus', focus);
    return () => { clearTimeout(clock); if (noticeTimer.current) clearTimeout(noticeTimer.current); window.removeEventListener('focus', focus); };
  }, []);
  useEffect(() => { if (ready) { try { localStorage.setItem(cartKey, JSON.stringify({ lines, delivery })); } catch { setStorageError(true); } } }, [lines, delivery, ready]);
  function add(id: string, quantity = 1) {
    const item = getItem(id); if (!item || !validQuantity(id, quantity) || quantity < 1) return;
    setLines(previous => { const found = previous.find(line => line.id === id); if (found && !validQuantity(id, found.quantity + quantity)) return previous; return normalizeCart(found ? previous.map(line => line.id === id ? { ...line, quantity: line.quantity + quantity } : line) : [...previous, { id, quantity }]); });
    setNotice(`Agregamos ${item.name} a tu bolsa.`);
    if (noticeTimer.current) clearTimeout(noticeTimer.current);
    noticeTimer.current = setTimeout(() => setNotice(''), 7000);
  }
  function setQuantity(id: string, quantity: number) { if (!validQuantity(id, quantity)) return; setLines(previous => normalizeCart(previous.map(line => line.id === id ? { ...line, quantity } : line))); }
  return <ShopContext.Provider value={{ lines, delivery, setDelivery, add, setQuantity, now, ready }}>
    {children}
    <div className={`bag-notice ${notice ? 'bag-notice--visible' : ''}`} role="status" aria-live="polite" aria-atomic="true">{notice && <><span>{notice}</span><a href="/bolsa/">Ver bolsa</a><button aria-label="Cerrar confirmación" onClick={() => setNotice('')}>×</button></>}</div>
    {storageError && <p className="storage-note" role="status">El navegador no permite guardar la bolsa. Puedes usarla en esta página y descargar su resumen.</p>}
  </ShopContext.Provider>;
}
