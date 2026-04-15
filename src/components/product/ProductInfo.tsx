"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import Chip from "@/components/ui/Chip";
import SizeGuideModal from "./SizeGuideModal";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { formatPrice } from "@/data/products";
import type { Product } from "@/types/product";

interface ProductInfoProps {
  product: Product;
  /** Full canonical URL of this page — injected server-side */
  pageUrl: string;
}

const TRUST_SIGNALS = [
  { icon: "✦", label: "Handcrafted Quality" },
  { icon: "✦", label: "Easy WhatsApp Ordering" },
  { icon: "✦", label: "Pan-India Delivery" },
];

export default function ProductInfo({ product, pageUrl }: ProductInfoProps) {
  const { name, price, shortDescription, leatherType, colors, sizes, status } = product;

  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name ?? "");
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const waUrl = buildWhatsAppURL(name, pageUrl);

  return (
    <>
      <div className="flex flex-col gap-5" id="product-info-panel">
        {/* Name + price */}
        <div>
          <h1 className="font-serif font-bold text-leather-brown text-headline-md lg:text-headline-lg leading-tight mb-3">
            {name}
          </h1>
          <p className="font-sans font-bold text-[1.75rem] text-leather-brown leading-none">
            {formatPrice(price)}
          </p>
          {status === "available-on-order" && (
            <p className="font-sans text-body-sm text-on-surface-variant mt-1">
              Available on order — ships within 7–10 days
            </p>
          )}
        </div>

        {/* Short description */}
        <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
          {shortDescription}
        </p>

        {/* Leather type chip */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="label-sm-caps text-on-surface-variant">Leather:</span>
          <Chip label={leatherType} readOnly />
        </div>

        {/* Color swatches — only if multiple colors */}
        {colors.length > 1 && (
          <div>
            <p className="font-sans text-body-sm text-leather-brown font-semibold mb-2.5">
              Colour: <span className="font-normal text-on-surface-variant">{selectedColor}</span>
            </p>
            <div className="flex items-center gap-2.5">
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  aria-label={`Select colour ${c.name}`}
                  aria-pressed={selectedColor === c.name}
                  className={`
                    w-8 h-8 rounded-full border-[2px] transition-all duration-150
                    ${selectedColor === c.name ? "border-leather-brown scale-110" : "border-transparent hover:border-outline"}
                  `}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Size selector — footwear only */}
        {sizes && sizes.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <p className="font-sans text-body-sm text-leather-brown font-semibold">
                Size (UK){selectedSize ? `: ${selectedSize}` : ""}
              </p>
              <button
                onClick={() => setShowSizeGuide(true)}
                className="font-sans text-body-sm text-on-surface-variant underline underline-offset-2 hover:text-leather-brown transition-colors duration-150"
              >
                Size guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <Chip
                  key={size}
                  label={String(size)}
                  selected={selectedSize === size}
                  onClick={() => setSelectedSize(size)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Primary CTA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center justify-center gap-2.5 w-full
            bg-whatsapp text-white
            font-sans font-bold text-label-lg tracking-wide
            py-4 px-6
            hover:opacity-90 transition-opacity duration-150
            mt-1
          "
          aria-label="Order on WhatsApp"
        >
          <WhatsAppIcon size={20} aria-hidden />
          Order on WhatsApp
        </a>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 border-t border-outline">
          {TRUST_SIGNALS.map((t) => (
            <span key={t.label} className="flex items-center gap-1.5 font-sans text-body-sm text-on-surface-variant">
              <span className="text-sage-teal text-[8px]">{t.icon}</span>
              {t.label}
            </span>
          ))}
        </div>
      </div>

      <SizeGuideModal isOpen={showSizeGuide} onClose={() => setShowSizeGuide(false)} />
    </>
  );
}
