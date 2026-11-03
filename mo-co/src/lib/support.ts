export const requestTypes = ['Consulta', 'Queja', 'Sugerencia', 'Garantía', 'Cambio o devolución'];
export type RequestDraft = { type: string; name: string; email: string; order: string; product: string; subject: string; message: string; consent: boolean };
export type LocalRequest = RequestDraft & { folio: string; createdAt: string; status: 'Preparada · pendiente de envío' };
export type RequestErrors = Partial<Record<keyof RequestDraft, string>>;
export const emptyDraft: RequestDraft = { type: '', name: '', email: '', order: '', product: '', subject: '', message: '', consent: false };
export const requestStorageKey = 'mo-prepared-requests-v1';
export const requestChangedEvent = 'mo-prepared-requests-changed';
export function validateRequest(draft: RequestDraft): RequestErrors {
  const errors: RequestErrors = {};
  if (!requestTypes.includes(draft.type)) errors.type = 'Selecciona el tipo de solicitud.';
  if (!draft.name.trim()) errors.name = 'Escribe tu nombre.';
  else if (draft.name.trim().length > 80) errors.name = 'Tu nombre puede tener hasta 80 caracteres.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email.trim())) errors.email = 'Ingresa un correo válido para poder responderte.';
  if (!draft.subject.trim()) errors.subject = 'Escribe el asunto de tu solicitud.';
  else if (draft.subject.trim().length > 120) errors.subject = 'Tu asunto puede tener hasta 120 caracteres.';
  if (draft.message.trim().length < 10) errors.message = 'Cuéntanos un poco más: escribe al menos 10 caracteres.';
  else if (draft.message.length > 2000) errors.message = 'Tu mensaje puede tener hasta 2000 caracteres.';
  if (!draft.consent) errors.consent = 'Confirma que has leído el uso de tus datos.';
  return errors;
}
export function readRequests(): LocalRequest[] {
  const value: unknown = JSON.parse(sessionStorage.getItem(requestStorageKey) || '[]');
  if (!Array.isArray(value)) throw new Error('Invalid local request storage');
  return value.filter((record): record is LocalRequest => !!record && typeof record === 'object' && typeof record.folio === 'string' && typeof record.email === 'string' && typeof record.message === 'string' && record.status === 'Preparada · pendiente de envío');
}
export function requestText(record: LocalRequest) {
  return ['MO Co. · Solicitud preparada · pendiente de envío', 'Aún no se ha enviado al equipo de MO.', `Folio local: ${record.folio}`, `Fecha: ${new Date(record.createdAt).toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })} (centro de México)`, `Estado: ${record.status}`, `Tipo: ${record.type}`, `Nombre: ${record.name}`, `Correo: ${record.email}`, `Pedido: ${record.order || 'No indicado'}`, `Producto: ${record.product || 'Otro / No aplica'}`, `Asunto: ${record.subject}`, '', record.message, '', 'La copia del navegador solo está disponible durante esta sesión. Conserva este archivo.'].join('\n');
}
