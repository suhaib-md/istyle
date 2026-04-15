import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { formatPrice } from "@/data/products";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { slug, name, shortDescription, price, tags, status, images, leatherType } = product;

  const isNew = tags.includes("new");
  const isLimited = tags.includes("limited");
  const badgeVariant = isLimited ? "limited" : isNew ? "new" : null;

  const primaryImage = images[0] ?? "/images/placeholder/product-portrait.jpg";
  const secondaryImage = images[1] ?? images[0] ?? "/images/placeholder/product-side.jpg";

  return (
    <Link
      href={`/products/${slug}`}
      className="group block"
      aria-label={`View ${name}`}
    >
      {/* Image container — 4:5 */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-mid mb-4">
        {/* Badge */}
        {badgeVariant && (
          <div className="absolute top-3 left-3 z-20">
            <Badge variant={badgeVariant} />
          </div>
        )}

        {/* Primary image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0"
          style={{ backgroundImage: `url('${primaryImage}')` }}
          aria-hidden
        />

        {/* Secondary image — fades in on hover */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 scale-[1.04]"
          style={{ backgroundImage: `url('${secondaryImage}')` }}
          aria-hidden
        />

        {/* "View Product" bar — slides up on hover, desktop only */}
        <div
          className="
            absolute inset-x-0 bottom-0 z-10
            bg-leather-brown text-warm-cream
            font-sans font-semibold text-label-lg tracking-wide
            py-3 px-4
            hidden lg:flex items-center justify-center gap-2
            translate-y-full group-hover:translate-y-0
            transition-transform duration-300
          "
        >
          View Product
          <ArrowRightIcon size={14} aria-hidden />
        </div>
      </div>

      {/* Info */}
      <div>
        <p className="text-[10px] font-sans font-semibold tracking-[0.18em] uppercase text-on-surface-variant mb-1 truncate">
          {leatherType}
        </p>
        <h3 className="font-serif text-headline-sm text-leather-brown leading-tight mb-1.5 line-clamp-2">
          {name}
        </h3>
        <p className="font-sans text-body-sm text-on-surface-variant line-clamp-2 mb-2 leading-snug">
          {shortDescription}
        </p>
        <div className="flex items-center justify-between gap-2">
          <p className="font-sans font-semibold text-body-md text-leather-brown">
            {formatPrice(price)}
          </p>
          {status === "available-on-order" && (
            <span className="text-[10px] font-sans text-on-surface-variant tracking-wide">
              On Order
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
