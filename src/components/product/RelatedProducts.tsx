import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";
import ProductCard from "@/components/catalog/ProductCard";
import type { Product } from "@/types/product";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section aria-label="Related products" className="py-12 lg:py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="font-serif font-bold text-leather-brown text-headline-md">
          You May Also Like
        </h2>
        <Link
          href="/collections"
          className="hidden sm:inline-flex items-center gap-1.5 font-sans font-semibold text-label-lg text-leather-brown hover:text-russet transition-colors duration-150 shrink-0 mb-0.5"
        >
          View All
          <ArrowRightIcon size={15} aria-hidden />
        </Link>
      </div>

      {/* Desktop: 4-col grid. Mobile: horizontal scroll */}
      <div className="flex lg:grid lg:grid-cols-4 gap-5 lg:gap-6 overflow-x-auto scrollbar-hide snap-x lg:overflow-visible pb-4 lg:pb-0">
        {products.map((product) => (
          <div key={product.slug} className="flex-none w-[72vw] sm:w-[48vw] lg:w-auto snap-start">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
