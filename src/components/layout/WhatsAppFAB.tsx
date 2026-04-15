"use client";

import { useState } from "react";
import { WA_GENERIC_URL } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/Icons";

interface WhatsAppFABProps {
  /** Override the default WA URL — e.g. on product pages pass the product-specific URL */
  href?: string;
}

export default function WhatsAppFAB({ href }: WhatsAppFABProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const url = href ?? WA_GENERIC_URL;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      /*
       * Position:
       *   Mobile  — above the 56px bottom tab bar + safe area inset
       *   Desktop — 32px from bottom-right
       *
       * z-50 keeps it above page content but below modals (z-[60]+)
       */
      className="
        fixed z-50
        right-6 bottom-[calc(56px+env(safe-area-inset-bottom,0px)+16px)]
        lg:right-8 lg:bottom-8
        w-14 h-14 rounded-full
        bg-whatsapp text-white
        flex items-center justify-center
        shadow-lg
        transition-transform duration-200 hover:scale-110 active:scale-95
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2
      "
    >
      <WhatsAppIcon size={28} />

      {/* Tooltip — desktop only */}
      <span
        role="tooltip"
        className={`
          pointer-events-none
          absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2
          whitespace-nowrap
          bg-leather-brown text-warm-cream
          text-[13px] font-sans font-medium
          px-3 py-1.5 rounded-sm
          shadow-md
          transition-all duration-200
          hidden lg:block
          ${showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}
        `}
      >
        Chat with us to order
        {/* Arrow pointing right */}
        <span className="absolute top-1/2 -translate-y-1/2 -right-[5px] border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-leather-brown" />
      </span>
    </a>
  );
}
