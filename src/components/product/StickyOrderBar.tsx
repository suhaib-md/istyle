"use client";

import { useEffect, useRef, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { formatPrice } from "@/data/products";

interface StickyOrderBarProps {
  productName: string;
  price: number;
  pageUrl: string;
}

export default function StickyOrderBar({ productName, price, pageUrl }: StickyOrderBarProps) {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const waUrl = buildWhatsAppURL(productName, pageUrl);

  // Show bar after user scrolls past the info panel sentinel
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // sentinel is above the viewport = user has scrolled past info panel
        setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/*
       * Invisible sentinel — placed just below the product info panel.
       * When this scrolls above the viewport the sticky bar appears.
       */}
      <div ref={sentinelRef} aria-hidden className="h-px" />

      {/* Sticky bar — mobile only, above bottom tab bar */}
      <div
        aria-hidden={!visible}
        className={`
          lg:hidden
          fixed inset-x-0 z-40
          bg-warm-cream border-t border-outline
          px-4 py-3 flex items-center gap-3
          transition-transform duration-300
          ${visible ? "translate-y-0" : "translate-y-full"}
        `}
        style={{
          bottom: "calc(56px + env(safe-area-inset-bottom, 0px))",
        }}
      >
        <div className="flex-1 min-w-0">
          <p className="font-sans font-semibold text-body-sm text-leather-brown truncate">
            {productName}
          </p>
          <p className="font-sans font-bold text-body-sm text-leather-brown">
            {formatPrice(price)}
          </p>
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="
            shrink-0 inline-flex items-center gap-2
            bg-whatsapp text-white
            font-sans font-bold text-label-lg
            px-5 py-3
            hover:opacity-90 transition-opacity duration-150
          "
          aria-label={`Order ${productName} on WhatsApp`}
        >
          <WhatsAppIcon size={18} aria-hidden />
          Order
        </a>
      </div>
    </>
  );
}
