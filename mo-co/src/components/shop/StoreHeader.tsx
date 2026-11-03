import type { ReactNode } from 'react';

export function StoreHeader({ label, title, children, actions }: { label: string; title: string; children: ReactNode; actions?: ReactNode }) {
  return <header className="store-heading"><div className="shell store-shell"><h1>{title}</h1><p className="store-label">{label}</p><div className="store-heading__lead">{children}</div>{actions && <div className="store-actions">{actions}</div>}</div></header>;
}
export function PurchaseStrip() { return <p className="purchase-strip">Precios en MXN <span>·</span> IVA incluido <span>·</span> Garantía de 12 meses <span>·</span> Entrega a domicilio o recolección</p>; }
