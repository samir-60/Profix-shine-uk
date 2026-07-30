export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.startsWith("44") && cleaned.length === 12) {
    return `+44 ${cleaned.slice(2, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
  }
  return phone;
}

export function formatPhoneLink(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
