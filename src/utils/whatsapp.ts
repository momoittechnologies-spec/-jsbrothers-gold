import { BUSINESS_INFO } from '../data/businessInfo';

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMessage = "Hello JS BROTHER'S GOLD, I would like to enquire about your gold-buying services. Please share the details.";
  const message = customMessage || defaultMessage;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getServiceWhatsAppUrl(serviceName: string, details?: { weight?: string; purity?: string; notes?: string }): string {
  let msg = `Hello JS BROTHER'S GOLD,\n\nI am contacting you regarding your *${serviceName}* service.`;
  if (details?.weight) {
    msg += `\n- Approximate Weight: ${details.weight} grams`;
  }
  if (details?.purity) {
    msg += `\n- Estimated Karat/Purity: ${details.purity}`;
  }
  if (details?.notes) {
    msg += `\n- Notes: ${details.notes}`;
  }
  msg += `\n\nPlease let me know the procedure and current market evaluation. Thank you.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}
