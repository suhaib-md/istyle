import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { categories, getProductsByCategory } from "@/data/products";
import type { SortOption } from "@/components/catalog/FilterBottomSheet";
import FilterBar from "@/components/catalog/FilterBar";
import ProductGrid from "@/components/catalog/ProductGrid";

type Params = { category: string };
type SearchParams = { subcategory?: string; sort?: string };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.label} Collection`,
    description: `Browse our handcrafted leather ${cat.label.toLowerCase()}. Made in Tamil Nadu. Order on WhatsApp.`,
  };
}

export default async function CollectionCategoryPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
}) {
  const { category } = await params;
  const { subcategory, sort } = await searchParams;

  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  // All products in this category (unfiltered count for display)
  const allProducts = getProductsByCategory(cat.slug);

  // Filtered + sorted products to display
  const filtered = getProductsByCategory(cat.slug, {
    subcategory: subcategory ?? undefined,
    sort: (sort as SortOption) ?? "featured",
  });

  return (
    <>
      {/* ── Category hero ──────────────────────────────────── */}
      <div className="relative w-full h-[35vw] min-h-50 max-h-100 bg-[#1a100a] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('${cat.heroImage}')` }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 100%)" }}
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col justify-end px-6 lg:px-12 pb-8 lg:pb-10 max-w-8xl mx-auto">
          <p className="label-sm-caps text-white/60 mb-2">{cat.subcategories.map((s) => s.label).join(" · ")}</p>
          <h1 className="font-serif font-bold text-white text-headline-md lg:text-headline-lg">
            {cat.label} Collection
          </h1>
        </div>
      </div>

      {/* ── Main content ───────────────────────────────────── */}
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-6 lg:py-10">

        {/* Category description */}
        <p className="font-sans text-body-lg text-on-surface-variant max-w-[65ch] mb-6">
          {cat.description}
        </p>

        {/* Filter bar — needs Suspense because it reads useSearchParams */}
        <Suspense fallback={<div className="h-12 border-b border-outline mb-6" />}>
          <FilterBar
            subcategories={cat.subcategories}
            totalProducts={allProducts.length}
          />
        </Suspense>

        {/* Product grid */}
        <div className="mt-8 lg:mt-10">
          <ProductGrid
            products={filtered}
            totalUnfiltered={allProducts.length}
          />
        </div>

      </div>
    </>
  );
}
