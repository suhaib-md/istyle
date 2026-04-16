"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { searchProducts } from "@/lib/search";
import ProductCard from "@/components/catalog/ProductCard";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { WA_GENERIC_URL } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const results = query.trim().length >= 2 ? searchProducts(query.trim(), 12) : [];

  if (query.trim().length < 2) {
    return (
      <div className="flex flex-col items-center text-center py-16 lg:py-24 gap-4">
        <p className="font-serif font-bold text-leather-brown text-headline-sm">
          Start typing to search
        </p>
        <p className="font-sans text-body-md text-on-surface-variant max-w-[40ch]">
          Use the search bar to find sandals, bags, or accessories by name,
          leather type, or style.
        </p>
        <Link
          href="/collections"
          className="font-sans font-semibold text-body-sm text-sage-teal hover:text-leather-brown transition-colors duration-150 mt-2"
        >
          Browse all collections -&gt;
        </Link>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center text-center py-16 lg:py-24 gap-4">
        <p className="font-serif font-bold text-leather-brown text-headline-sm">
          No results for &ldquo;{query}&rdquo;
        </p>
        <p className="font-sans text-body-md text-on-surface-variant max-w-[44ch] leading-relaxed">
          We couldn&apos;t find anything matching that search. Try a different term,
          or chat with us on WhatsApp and we&apos;ll help you find what you need.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <Link
            href="/collections"
            className="
              inline-flex items-center
              border border-leather-brown text-leather-brown
              font-sans font-semibold text-label-lg
              px-6 py-3
              hover:bg-leather-brown hover:text-warm-cream
              transition-colors duration-200
            "
          >
            Browse Collections
          </Link>
          <a
            href={WA_GENERIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick()}
            className="
              inline-flex items-center gap-2
              bg-[#25D366] text-white
              font-sans font-semibold text-label-lg
              px-6 py-3
              hover:opacity-90 transition-opacity duration-150
            "
          >
            <WhatsAppIcon size={16} aria-hidden />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="font-sans text-body-sm text-on-surface-variant mb-8">
        {results.length} result{results.length !== 1 ? "s" : ""} for{" "}
        <span className="font-semibold text-leather-brown">&ldquo;{query}&rdquo;</span>
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {results.map(({ item }) => (
          <ProductCard key={item.slug} product={item} />
        ))}
      </div>
    </div>
  );
}
