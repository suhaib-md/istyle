import Link from "next/link";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { buildWhatsAppURL, WA_GENERIC_URL } from "@/lib/whatsapp";
import { formatPrice } from "@/data/products";

// The "hero product" for the editorial block — swap slug/price when ready
const EDITORIAL_PRODUCT = {
  slug: "laptop-briefcase-black-tan",
  name: "Laptop Briefcase",
  descriptor: "Black & Tan",
  price: 8500,
  quote: "The bag that earns attention\nbefore you've said a word.",
};

export default function EditorialFeature() {
  const waUrl = buildWhatsAppURL(
    `${EDITORIAL_PRODUCT.name} — ${EDITORIAL_PRODUCT.descriptor}`,
    `https://istyle.vercel.app/products/${EDITORIAL_PRODUCT.slug}`
  );

  return (
    <section
      aria-label="Featured product"
      className="relative w-full min-h-[70vh] flex items-end overflow-hidden bg-[#1a100a]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{
          backgroundImage: "url('/images/placeholder/editorial-hero.jpg')",
          opacity: 0.55,
        }}
        aria-hidden
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-[600px]">
          <p className="label-sm-caps text-white/60 mb-5">
            Featured Piece
          </p>

          <h2
            className="
              font-serif font-bold text-white
              text-headline-md lg:text-headline-lg xl:text-[3.25rem]
              leading-tight mb-3 whitespace-pre-line
            "
          >
            {EDITORIAL_PRODUCT.quote}
          </h2>

          <p className="font-sans text-body-lg text-white/70 mb-2">
            {EDITORIAL_PRODUCT.name} &mdash; {EDITORIAL_PRODUCT.descriptor}
          </p>
          <p className="font-sans font-bold text-white text-headline-sm mb-8">
            {formatPrice(EDITORIAL_PRODUCT.price)}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2.5
                bg-whatsapp text-white
                font-sans font-semibold text-label-lg tracking-wide
                px-6 py-3.5
                hover:opacity-90 transition-opacity duration-150
              "
            >
              <WhatsAppIcon size={18} aria-hidden />
              Order on WhatsApp
            </a>

            <Link
              href={`/products/${EDITORIAL_PRODUCT.slug}`}
              className="
                inline-flex items-center gap-2
                border border-white/40 text-white
                font-sans font-semibold text-label-lg tracking-wide
                px-6 py-3.5
                hover:bg-white/10 transition-colors duration-150
              "
            >
              View Product
              <ArrowRightIcon size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
