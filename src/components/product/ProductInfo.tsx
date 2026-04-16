"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import Chip from "@/components/ui/Chip";
import SizeGuideModal from "./SizeGuideModal";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { formatPrice } from "@/data/products";
import { trackWhatsAppClick } from "@/lib/analytics";
import type { Product } from "@/types/product";

interface ProductInfoProps {
  product: Product;
  pageUrl: string;
}

const TRUST_SIGNALS = [
  { icon: "*", label: "Handcrafted Quality" },
  { icon: "*", label: "Easy WhatsApp Ordering" },
  { icon: "*", label: "Pan-India Delivery" },
];

export default function ProductInfo({ product, pageUrl }: ProductInfoProps) {
  const { name, price, shortDescription, leatherType, colors, sizes, status } = product;

  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const waUrl = buildWhatsAppURL(name, pageUrl);

  return (
    <>
      <div className="flex flex-col gap-6" id="product-info-panel">
        <div>
          <h1 className="font-serif font-bold text-leather-brown text-headline-md lg:text-headline-lg leading-tight mb-4">
            {name}
          </h1>
          <p className="font-sans font-bold text-[1.75rem] text-leather-brown leading-none">
            {formatPrice(price)}
          </p>
          {status === "available-on-order" && (
            <p className="font-sans text-body-sm text-on-surface-variant mt-1">
              Available on order - ships within 7-10 days
            </p>
          )}
        </div>

        <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
          {shortDescription}
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="label-sm-caps text-on-surface-variant">Leather:</span>
          <Chip label={leatherType} readOnly />
        </div>

        {colors.length > 1 && (
          <div>
            <p className="font-sans text-body-sm text-leather-brown font-semibold mb-2.5">
              Available colours
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              {colors.map((color) => (
                <span
                  key={color.name}
                  className="inline-flex items-center gap-2 rounded-full border border-outline px-2.5 py-1.5"
                >
                  <span
                    className="h-4 w-4 rounded-full border border-black/10"
                    style={{ backgroundColor: color.hex }}
                    aria-hidden
                  />
                  <span className="font-sans text-body-sm text-on-surface-variant">
                    {color.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        )}

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
          onClick={() => trackWhatsAppClick(name)}
        >
          <WhatsAppIcon size={20} aria-hidden />
          Order on WhatsApp
        </a>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 border-t border-outline">
          {TRUST_SIGNALS.map((signal) => (
            <span
              key={signal.label}
              className="flex items-center gap-1.5 font-sans text-body-sm text-on-surface-variant"
            >
              <span className="text-sage-teal text-[8px]">{signal.icon}</span>
              {signal.label}
            </span>
          ))}
        </div>
      </div>

      <SizeGuideModal
        isOpen={showSizeGuide}
        onClose={() => setShowSizeGuide(false)}
      />
    </>
  );
}
