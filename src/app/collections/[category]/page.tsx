import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getProductsByCategory } from "@/data/products";

type Params = {
  category: string;
};

export async function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const currentCategory = categories.find((item) => item.slug === category);

  if (!currentCategory) {
    return {};
  }

  return {
    title: `${currentCategory.label} Collection`,
    description: currentCategory.description,
  };
}

export default async function CollectionCategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const currentCategory = categories.find((item) => item.slug === category);

  if (!currentCategory) {
    notFound();
  }

  const products = getProductsByCategory(currentCategory.slug);

  return (
    <section className="mx-auto flex w-full max-w-[1100px] flex-col px-6 py-16 lg:px-12">
      <p className="label-sm-caps text-sage-teal">Phase 1 Foundation</p>
      <h1 className="mt-4 font-serif text-headline-lg text-leather-brown">
        {currentCategory.label}
      </h1>
      <p className="mt-4 max-w-[60ch] font-sans text-body-lg text-on-surface-variant">
        {currentCategory.description}
      </p>

      <div className="mt-10 rounded-sm border border-outline bg-surface-low p-6">
        <p className="font-sans text-body-md text-leather-brown">
          {products.length} products are already defined in the catalog data.
        </p>
        <p className="mt-3 font-sans text-body-md text-on-surface-variant">
          The full collection experience with filters, product cards, and load
          more behavior is scheduled for Phase 4.
        </p>
      </div>
    </section>
  );
}
