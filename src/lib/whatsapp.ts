// ── WhatsApp URL Builder — I Style Leathers ───────────────────

const WA_NUMBER = "919842376554"; // Country code + number, no +
const WA_BASE = `https://wa.me/${WA_NUMBER}`;

const DEFAULT_MESSAGE =
  "Hi! I'm interested in I Style Leathers products.";

/**
 * Build a wa.me URL with a pre-filled message.
 *
 * @param productName - Product name to mention in the message (optional)
 * @param productUrl  - Full URL of the product page (optional)
 * @returns A wa.me URL string ready for use in an <a href>
 */
export function buildWhatsAppURL(
  productName?: string,
  productUrl?: string
): string {
  let message: string;

  if (productName && productUrl) {
    message = `Hi! I'm interested in the ${productName}. ${productUrl}`;
  } else if (productName) {
    message = `Hi! I'm interested in the ${productName}.`;
  } else {
    message = DEFAULT_MESSAGE;
  }

  return `${WA_BASE}?text=${encodeURIComponent(message)}`;
}

/** The generic floating FAB link (no product context) */
export const WA_GENERIC_URL = buildWhatsAppURL();

/** Display-formatted phone number */
export const WA_PHONE_DISPLAY = "+91 98423 76554";
