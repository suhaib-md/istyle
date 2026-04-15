"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import type { Product } from "@/types/product";

const PAGE_SIZE = 12;

interface ProductGridProps {
  products: Product[];
  totalUnfiltered: number;
}

export default function ProductGrid({ products, totalUnfiltered }: ProductGridProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visible = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  // Empty state
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center text-center py-20 px-6">
        <p className="font-serif text-headline-sm text-leather-brown mb-3">
          No products match your filters.
        </p>
        <p className="font-sans text-body-md text-on-surface-variant mb-8 max-w-[40ch]">
          Try adjusting your filters or browse the full collection.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="?"
            className="
              inline-flex items-center font-sans font-semibold text-label-lg
              border border-leather-brown text-leather-brown px-5 py-2.5
              hover:bg-leather-brown hover:text-warm-cream transition-colors duration-200
            "
          >
            Clear All Filters
          </Link>
          <Link
            href="/collections"
            className="
              inline-flex items-center font-sans font-semibold text-label-lg
              text-on-surface-variant hover:text-leather-brown
              transition-colors duration-150 px-5 py-2.5
            "
          >
            Browse All Collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Product count */}
      <p className="font-sans text-body-sm text-on-surface-variant mb-6">
        Showing{" "}
        <span className="font-semibold text-leather-brown">{Math.min(visibleCount, products.length)}</span>{" "}
        of{" "}
        <span className="font-semibold text-leather-brown">{products.length}</span>{" "}
        {products.length !== totalUnfiltered && (
          <span className="text-on-surface-variant">(filtered from {totalUnfiltered})</span>
        )}
      </p>

      {/* Grid — 2 col mobile, 3 col tablet, 4 col desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-6 lg:gap-y-12">
        {visible.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center mt-12 lg:mt-16">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="
              font-sans font-semibold text-label-lg tracking-wide
              border border-leather-brown text-leather-brown
              px-8 py-3.5
              hover:bg-leather-brown hover:text-warm-cream
              transition-colors duration-200
            "
          >
            Load More ({products.length - visibleCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
