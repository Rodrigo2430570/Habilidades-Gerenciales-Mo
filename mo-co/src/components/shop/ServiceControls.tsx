'use client';
import { useState } from 'react';
import serviceCopy from '@/data/service-copy.json';
const { faqs } = serviceCopy;

export function CopyContact({ address }: { address: string }) {
  const [status, setStatus] = useState('');
  return <div className="copy-contact"><p>{address}</p><button className="text-button" onClick={async () => { try { await navigator.clipboard.writeText(address); setStatus('Dirección copiada.'); } catch { setStatus('No se pudo copiar. Selecciona la dirección para copiarla manualmente.'); } }}>Copiar dirección</button><span role="status">{status}</span></div>;
}
export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return <section id="preguntas" className="faq-section" aria-labelledby="faq-title"><h2 id="faq-title">Lo que quieras saber.</h2><p>Respuestas para elegir y cuidar tu MO con tranquilidad.</p><div className="faq-list">{faqs.map((faq, index) => <div className="faq-item" key={faq.question}><h3><button aria-expanded={open === index} aria-controls={`faq-${index}`} id={`faq-button-${index}`} onClick={() => setOpen(open === index ? null : index)}>{faq.question}<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14"/>{open !== index && <path d="M12 5v14"/>}</svg></button></h3><div hidden={open !== index} id={`faq-${index}`} role="region" aria-labelledby={`faq-button-${index}`}><p>{faq.answer}</p></div></div>)}</div></section>;
}
