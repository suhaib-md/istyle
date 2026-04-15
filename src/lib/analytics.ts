// Analytics utility — safe gtag wrappers that no-op when GA isn't loaded.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
}

/** Track a WhatsApp CTA click. Call this on every "Order on WhatsApp" button. */
export function trackWhatsAppClick(productName?: string) {
  gtag("event", "whatsapp_cta_click", {
    event_category: "engagement",
    event_label: productName ?? "generic",
  });
}

/** Track a search query submission. */
export function trackSearch(query: string) {
  gtag("event", "search", {
    search_term: query,
  });
}

/** Track a newsletter signup. */
export function trackNewsletterSignup() {
  gtag("event", "newsletter_signup", {
    event_category: "engagement",
  });
}
