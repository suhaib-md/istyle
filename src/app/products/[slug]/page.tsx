import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug, getRelatedProducts, formatPrice } from "@/data/products";
import { categories } from "@/data/products";
import ImageGallery from "@/components/product/ImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductAccordion from "@/components/product/ProductAccordion";
import RelatedProducts from "@/components/product/RelatedProducts";
import StickyOrderBar from "@/components/product/StickyOrderBar";

const SITE_URL = "https://istyleleathers.vercel.app";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const pageUrl = `${SITE_URL}/products/${slug}`;
  const ogImage = product.images[0] ?? "/og-default.jpg";

  return {
    title: product.name,
    description: `${product.shortDescription} ${formatPrice(product.price)}. Available on order. Chat on WhatsApp to buy.`,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      url: pageUrl,
      title: `${product.name} — I Style Leathers`,
      description: product.shortDescription,
      images: [{ url: ogImage, width: 1200, height: 630, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const pageUrl = `${SITE_URL}/products/${slug}`;
  const related = getRelatedProducts(product, 4);
  const categoryMeta = categories.find((c) => c.slug === product.category);

  // Schema.org/Product JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((img) =>
      img.startsWith("http") ? img : `${SITE_URL}${img}`
    ),
    brand: { "@type": "Brand", name: "I Style Leathers" },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "INR",
      availability:
        product.status === "in-stock"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
      url: pageUrl,
      seller: { "@type": "Organization", name: "I Style Leathers" },
    },
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        {/* ── Breadcrumb ─────────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="py-5 lg:py-6">
          {/* Desktop: full path */}
          <ol className="hidden lg:flex items-center gap-1.5 font-sans text-body-sm text-on-surface-variant flex-wrap">
            <li><Link href="/" className="hover:text-leather-brown transition-colors">Home</Link></li>
            <li aria-hidden className="text-outline">›</li>
            <li>
              <Link
                href={`/collections/${product.category}`}
                className="hover:text-leather-brown transition-colors capitalize"
              >
                {categoryMeta?.label ?? product.category}
              </Link>
            </li>
            <li aria-hidden className="text-outline">›</li>
            <li className="text-leather-brown font-medium truncate max-w-[30ch]">{product.name}</li>
          </ol>

          {/* Mobile: just parent link */}
          <Link
            href={`/collections/${product.category}`}
            className="lg:hidden inline-flex items-center gap-1.5 font-sans text-body-sm text-on-surface-variant hover:text-leather-brown transition-colors"
          >
            <span aria-hidden>‹</span>
            {categoryMeta?.label ?? product.category}
          </Link>
        </nav>

        {/* ── Main product grid ──────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 pb-12 lg:pb-16">

          {/* Left — image gallery */}
          <div>
            <ImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Right — product info */}
          <div className="flex flex-col gap-10">
            <ProductInfo product={product} pageUrl={pageUrl} />
            <ProductAccordion product={product} />
          </div>
        </div>

        {/* ── Sticky order bar sentinel lives right after the info panel ─ */}
        <StickyOrderBar
          productName={product.name}
          price={product.price}
          pageUrl={pageUrl}
        />

        {/* ── Related products ───────────────────────────── */}
        <div className="border-t border-outline">
          <RelatedProducts products={related} />
        </div>
      </div>
    </>
  );
}
