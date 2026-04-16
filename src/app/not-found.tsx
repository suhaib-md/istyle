import Link from "next/link";
import SiteLogo from "@/components/layout/SiteLogo";
import ProductCard from "@/components/catalog/ProductCard";
import { products } from "@/data/products";

export default function NotFound() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4);

  return (
    <div className="bg-warm-cream">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 pt-20 pb-16 lg:pt-28 lg:pb-20 flex flex-col items-center text-center">
        <SiteLogo href="/" priority />

        <p
          className="font-serif font-bold text-[9rem] lg:text-[12rem] leading-none text-leather-brown/10 select-none mt-6 mb-0"
          aria-hidden
        >
          404
        </p>

        <h1 className="font-serif font-bold text-leather-brown text-headline-md lg:text-headline-lg leading-tight mb-4 -mt-4 lg:-mt-6">
          That page seems to have walked off.
        </h1>

        <p className="font-sans text-body-lg text-on-surface-variant max-w-[44ch] leading-relaxed mb-10">
          We couldn&apos;t find what you were looking for. It may have moved, or the
          link might be outdated. Try browsing the collection instead.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="
              inline-flex items-center
              bg-leather-brown text-warm-cream
              font-sans font-bold text-label-lg
              px-8 py-4
              hover:bg-russet transition-colors duration-200
            "
          >
            Go Home
          </Link>
          <Link
            href="/collections"
            className="
              inline-flex items-center
              border border-leather-brown text-leather-brown
              font-sans font-bold text-label-lg
              px-8 py-4
              hover:bg-leather-brown hover:text-warm-cream
              transition-colors duration-200
            "
          >
            Browse All Products
          </Link>
        </div>
      </div>

      {featuredProducts.length > 0 && (
        <div className="border-t border-outline bg-parchment">
          <div className="max-w-8xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
            <h2 className="font-serif font-bold text-leather-brown text-headline-md mb-8">
              You Might Like These
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
