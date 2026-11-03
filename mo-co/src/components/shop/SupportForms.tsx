'use client';
import { Arrow } from '@/components/ui/Arrow';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { bundles, products } from '@/lib/store';
import { downloadText } from '@/lib/download';
import { emptyDraft, readRequests, requestChangedEvent, requestStorageKey, requestText, requestTypes, validateRequest, type LocalRequest, type RequestDraft, type RequestErrors } from '@/lib/support';

const failure = 'No pudimos completar la operación. Conservamos el texto para que puedas intentarlo de nuevo.';

function RequestReceipt({ record, onDelete }: { record: LocalRequest; onDelete: () => void }) {
  const [copy, setCopy] = useState('');
  const [error, setError] = useState('');
  return <div className="request-receipt"><p className="receipt-status">{record.status}</p><h3>Tu solicitud está preparada.</h3><p>Descarga el comprobante para conservarla. Aún no se ha enviado al equipo de MO.</p><dl><div><dt>Folio local</dt><dd className="folio">{record.folio}</dd></div><div><dt>Asunto</dt><dd>{record.subject}</dd></div><div><dt>Fecha</dt><dd>{new Date(record.createdAt).toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })} · centro de México</dd></div></dl>
    <details className="receipt-details"><summary>Ver contenido de la solicitud</summary><p><strong>Tipo:</strong> {record.type}</p><p><strong>Nombre:</strong> {record.name}</p><p><strong>Correo:</strong> {record.email}</p><p><strong>Pedido:</strong> {record.order || 'No indicado'}</p><p><strong>Producto:</strong> {[...products, ...bundles].find(item => item.id === record.product)?.name || 'Otro / No aplica'}</p><p className="request-message">{record.message}</p></details><div className="store-actions"><button className="shop-button" onClick={() => { try { downloadText(`${record.folio}.txt`, requestText(record)); } catch { setError('No se pudo descargar. Vuelve a intentarlo; tu solicitud sigue preparada en esta sesión.'); } }}>Descargar solicitud</button><button className="shop-button shop-button--outline" onClick={async () => { try { await navigator.clipboard.writeText(record.folio); setCopy('Folio copiado.'); } catch { setCopy('No se pudo copiar. Selecciona el folio y cópialo manualmente.'); } }}>Copiar folio</button></div><p role="status">{copy}</p>{error && <p className="field-error" role="alert">{error}</p>}<p className="muted">Disponible en esta sesión del navegador. Conserva el archivo descargado para no perder tu información.</p><button className="text-button" onClick={onDelete}>Eliminar registro local</button>
  </div>;
}

export function SupportForm() {
  const [draft, setDraft] = useState<RequestDraft>(emptyDraft);
  const [errors, setErrors] = useState<RequestErrors>({});
  const [operationError, setOperationError] = useState('');
  const [prepared, setPrepared] = useState<LocalRequest | null>(null);
  const form = useRef<HTMLFormElement>(null);
  const receipt = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const type = query.get('tipo') || '';
    const product = query.get('producto') || '';
    setDraft(previous => ({ ...previous, type: requestTypes.includes(type) ? type : '', product: [...products, ...bundles].some(item => item.id === product) ? product : '' }));
  }, []);
  useEffect(() => { if (prepared) receipt.current?.focus(); }, [prepared]);
  useEffect(() => { const refresh = () => { if (!prepared) return; try { if (!readRequests().some(record => record.folio === prepared.folio)) { setPrepared(null); setDraft(emptyDraft); } } catch { /* Keep the current receipt available for download if storage fails. */ } }; window.addEventListener(requestChangedEvent, refresh); return () => window.removeEventListener(requestChangedEvent, refresh); }, [prepared]);
  function change<K extends keyof RequestDraft>(key: K, value: RequestDraft[K]) { setDraft(previous => ({ ...previous, [key]: value })); setErrors(previous => ({ ...previous, [key]: undefined })); }
  function submit(event: FormEvent) {
    event.preventDefault(); setOperationError('');
    const nextErrors = validateRequest(draft); setErrors(nextErrors);
    if (Object.keys(nextErrors).length) { requestAnimationFrame(() => form.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()); return; }
    try {
      const record: LocalRequest = { ...draft, name: draft.name.trim(), email: draft.email.trim(), subject: draft.subject.trim(), folio: `MO-LOCAL-${crypto.randomUUID().toUpperCase()}`, createdAt: new Date().toISOString(), status: 'Preparada · pendiente de envío' };
      const records = readRequests();
      sessionStorage.setItem(requestStorageKey, JSON.stringify([...records, record]));
      setPrepared(record);
    } catch { setOperationError(failure); }
  }
  function remove() {
    try { sessionStorage.setItem(requestStorageKey, JSON.stringify(readRequests().filter(record => record.folio !== prepared?.folio))); window.dispatchEvent(new Event(requestChangedEvent)); setPrepared(null); setDraft(emptyDraft); setOperationError('Registro local eliminado.'); } catch { setOperationError('No pudimos eliminar el registro local. Inténtalo de nuevo.'); }
  }
  const fieldProps = (name: keyof RequestDraft) => ({ id: `request-${name}`, name, 'aria-invalid': !!errors[name], 'aria-describedby': errors[name] ? `error-${name}` : undefined });
  const error = (name: keyof RequestDraft) => errors[name] && <span id={`error-${name}`} className="field-error">{errors[name]}</span>;
  return <section id="solicitud" className="support-form-section" aria-labelledby="request-title"><h2 id="request-title">Tu opinión nos ayuda a ser más.</h2><p>Si algo no salió como esperabas o tienes una idea para mejorar, queremos escucharte. Cuéntanos lo ocurrido y comparte los datos de tu pedido, si los tienes. Revisaremos tu caso y te explicaremos los siguientes pasos.</p>
    {prepared ? <div ref={receipt} tabIndex={-1} className="receipt-focus"><RequestReceipt record={prepared} onDelete={remove}/><button className="text-button" onClick={() => { setPrepared(null); setDraft(emptyDraft); }}>Preparar otra solicitud</button></div> : <form ref={form} noValidate onSubmit={submit} className="support-form">
      <p className="form-required">Los campos con * son obligatorios.</p>
      <div className="form-grid"><div className="form-field"><label htmlFor="request-type">Tipo de solicitud *</label><select {...fieldProps('type')} required value={draft.type} onChange={event => change('type', event.target.value)}><option value="">Selecciona una opción</option>{requestTypes.map(type => <option key={type}>{type}</option>)}</select>{error('type')}</div>
      <div className="form-field"><label htmlFor="request-product">Producto relacionado</label><select {...fieldProps('product')} value={draft.product} onChange={event => change('product', event.target.value)}><option value="">Otro / No aplica</option><optgroup label="Robots MO">{products.map(product => <option value={product.id} key={product.id}>{product.name}</option>)}</optgroup><optgroup label="Paquetes MO">{bundles.map(bundle => <option value={bundle.id} key={bundle.id}>{bundle.name}</option>)}</optgroup></select></div>
      <div className="form-field"><label htmlFor="request-name">Nombre *</label><input {...fieldProps('name')} required maxLength={80} autoComplete="name" value={draft.name} onChange={event => change('name', event.target.value)}/>{error('name')}</div>
      <div className="form-field"><label htmlFor="request-email">Correo electrónico *</label><input {...fieldProps('email')} required type="email" maxLength={254} autoComplete="email" value={draft.email} onChange={event => change('email', event.target.value)}/>{error('email')}</div>
      <div className="form-field form-field--full"><label htmlFor="request-order">Número de pedido <span>(opcional)</span></label><input {...fieldProps('order')} maxLength={80} value={draft.order} aria-describedby="order-help" onChange={event => change('order', event.target.value)}/><span id="order-help" className="field-help">Si todavía no has comprado, deja este campo vacío.</span></div>
      <div className="form-field form-field--full"><label htmlFor="request-subject">Asunto *</label><input {...fieldProps('subject')} required maxLength={120} value={draft.subject} onChange={event => change('subject', event.target.value)}/>{error('subject')}</div>
      <div className="form-field form-field--full"><label htmlFor="request-message">Mensaje *</label><textarea {...fieldProps('message')} required minLength={10} maxLength={2000} rows={7} value={draft.message} onChange={event => change('message', event.target.value)}/><span className="field-help">{draft.message.length} / 2000 caracteres · mínimo 10</span>{error('message')}</div></div>
      <div className="consent-field"><label><input {...fieldProps('consent')} type="checkbox" required checked={draft.consent} onChange={event => change('consent', event.target.checked)}/><span>He leído <a href="#uso-de-datos">cómo se utilizarán mis datos</a> para atender esta solicitud *</span></label>{error('consent')}</div>
      <p className="local-notice">Puedes preparar y descargar tu solicitud. El envío al equipo de atención aún no está disponible en este canal.</p><button className="shop-button shop-button--primary" type="submit">Preparar solicitud <Arrow /></button>
    </form>}
    {operationError && <p className="field-error" role="status">{operationError}</p>}
    <aside className="privacy-notice" id="uso-de-datos"><h3>Tu información, con cuidado.</h3><p>Usaremos tu nombre, correo y mensaje para atender esta solicitud y comunicar su seguimiento. No incluyas contraseñas, información bancaria ni documentos personales.</p><p>La solicitud preparada se conserva temporalmente en esta sesión del navegador y no se envía a MO. Puedes descargarla o eliminarla cuando quieras.</p></aside>
  </section>;
}

export function RequestLookup() {
  const [folio, setFolio] = useState('');
  const [email, setEmail] = useState('');
  const [record, setRecord] = useState<LocalRequest | null>(null);
  const [error, setError] = useState('');
  const result = useRef<HTMLDivElement>(null);
  useEffect(() => { const refresh = () => { if (!record) return; try { if (!readRequests().some(value => value.folio === record.folio)) setRecord(null); } catch { /* Preserve a readable receipt when storage is unavailable. */ } }; window.addEventListener(requestChangedEvent, refresh); return () => window.removeEventListener(requestChangedEvent, refresh); }, [record]);
  function lookup(event: FormEvent) {
    event.preventDefault(); setRecord(null); setError('');
    try {
      const found = readRequests().find(value => value.folio === folio.trim().toUpperCase() && value.email.toLowerCase() === email.trim().toLowerCase());
      if (!found) setError('No encontramos una solicitud con esos datos en esta sesión. Verifica el folio y el correo.');
      else { setRecord(found); requestAnimationFrame(() => result.current?.focus()); }
    } catch { setError('No pudimos consultar la sesión. Revisa que el navegador permita almacenamiento temporal e inténtalo de nuevo.'); }
  }
  return <section className="request-lookup" id="consultar" aria-labelledby="lookup-title"><h2 id="lookup-title">Consultar solicitud preparada</h2><p>Disponible en esta sesión del navegador. Conserva el archivo descargado para no perder tu información.</p>
    <form onSubmit={lookup} noValidate><div className="form-field"><label htmlFor="lookup-folio">Folio local</label><input id="lookup-folio" required value={folio} onChange={event => { setFolio(event.target.value); setRecord(null); }}/></div><div className="form-field"><label htmlFor="lookup-email">Correo registrado</label><input id="lookup-email" type="email" required value={email} onChange={event => { setEmail(event.target.value); setRecord(null); }}/></div><button className="shop-button" type="submit">Consultar solicitud</button></form>
    {error && <p role="alert" className="field-error">{error}</p>}{record && <div ref={result} tabIndex={-1}><RequestReceipt record={record} onDelete={() => { try { sessionStorage.setItem(requestStorageKey, JSON.stringify(readRequests().filter(value => value.folio !== record.folio))); window.dispatchEvent(new Event(requestChangedEvent)); setRecord(null); setError('Registro local eliminado.'); } catch { setError('No pudimos eliminar el registro local. Inténtalo de nuevo.'); } }}/></div>}
  </section>;
}
