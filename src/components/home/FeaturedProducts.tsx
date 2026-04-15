import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { getFeaturedProducts, formatPrice } from "@/data/products";
import AnimatedSection from "@/components/ui/AnimatedSection";

function ProductCardSimple({
  slug,
  name,
  shortDescription,
  price,
  tags,
  leatherType,
}: {
  slug: string;
  name: string;
  shortDescription: string;
  price: number;
  tags: string[];
  leatherType: string;
}) {
  const isNew = tags.includes("new");
  const isLimited = tags.includes("limited");

  return (
    <Link
      href={`/products/${slug}`}
      className="group flex-none w-[72vw] sm:w-[50vw] lg:w-auto snap-start"
      aria-label={`View ${name}`}
    >
      {/* Image container — 4:5 aspect */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-mid mb-4">
        {/* Badges */}
        {(isNew || isLimited) && (
          <span
            className={`
              absolute top-3 left-3 z-10
              text-[10px] font-sans font-bold tracking-[0.2em] uppercase
              px-2.5 py-1 rounded-full text-white
              ${isLimited ? "bg-aged-brass" : "bg-sage-teal"}
            `}
          >
            {isLimited ? "Limited" : "New"}
          </span>
        )}

        {/* Placeholder bg — swap with next/image when real photos arrive */}
        <div
          className="absolute inset-0 bg-surface-high transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{
            backgroundImage: "url('/images/placeholder/product-portrait.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* "View Product" hover overlay — desktop only */}
        <div
          className="
            absolute inset-x-0 bottom-0 py-3 px-4
            bg-leather-brown text-warm-cream
            font-sans font-semibold text-label-lg tracking-wide text-center
            translate-y-full group-hover:translate-y-0
            transition-transform duration-300
            hidden lg:flex items-center justify-center gap-2
          "
        >
          View Product
          <ArrowRightIcon size={14} aria-hidden />
        </div>
      </div>

      {/* Product info */}
      <div>
        <p className="text-[10px] font-sans font-semibold tracking-[0.18em] uppercase text-on-surface-variant mb-1">
          {leatherType}
        </p>
        <h3 className="font-serif text-headline-sm text-leather-brown leading-tight mb-1.5">
          {name}
        </h3>
        <p className="font-sans text-body-sm text-on-surface-variant line-clamp-2 mb-2">
          {shortDescription}
        </p>
        <p className="font-sans font-semibold text-body-md text-leather-brown">
          {formatPrice(price)}
        </p>
      </div>
    </Link>
  );
}

export default function FeaturedProducts() {
  const featured = getFeaturedProducts(4);

  return (
    <section
      aria-label="New arrivals"
      className="py-16 lg:py-24 bg-warm-cream"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="flex items-end justify-between mb-8 lg:mb-12">
          <div>
            <p className="label-sm-caps text-sage-teal mb-2">New Arrivals</p>
            <h2 className="font-serif font-bold text-leather-brown text-headline-md lg:text-headline-lg">
              Current Collection
            </h2>
          </div>
          <Link
            href="/collections"
            className="hidden sm:inline-flex items-center gap-2 font-sans font-semibold text-label-lg text-leather-brown hover:text-russet transition-colors duration-150 shrink-0 mb-1"
            aria-label="View all products"
          >
            View All
            <ArrowRightIcon size={16} aria-hidden />
          </Link>
        </AnimatedSection>

        {/* Grid — 4-col desktop, horizontal scroll mobile */}
        <div className="flex lg:grid lg:grid-cols-4 gap-5 lg:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory lg:overflow-visible pb-4 lg:pb-0">
          {featured.map((product, i) => (
            <AnimatedSection key={product.slug} delay={i * 80} className="contents lg:block">
              <ProductCardSimple
                slug={product.slug}
                name={product.name}
                shortDescription={product.shortDescription}
                price={product.price}
                tags={product.tags}
                leatherType={product.leatherType}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* "View All" — mobile only */}
        <div className="flex justify-center mt-8 sm:hidden">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 border border-leather-brown text-leather-brown font-sans font-semibold text-label-lg tracking-wide px-6 py-3 hover:bg-leather-brown hover:text-warm-cream transition-colors duration-200"
          >
            View All Products
            <ArrowRightIcon size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
