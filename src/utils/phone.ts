import { BUSINESS_INFO } from '../data/businessInfo';

export function getTelUrl(): string {
  return `tel:${BUSINESS_INFO.phoneRaw}`;
}

export function formatPhoneNumber(): string {
  return BUSINESS_INFO.phoneFormatted;
}
