import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { WA_GENERIC_URL } from "@/lib/whatsapp";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn about the craft and passion behind I Style Leathers, handcrafted in Melvisharam, Tamil Nadu.",
  alternates: { canonical: "https://istyleleathers.vercel.app/about" },
  openGraph: {
    url: "https://istyleleathers.vercel.app/about",
    title: "Our Story - I Style Leathers",
    description:
      "Learn about the craft and passion behind I Style Leathers, handcrafted in Melvisharam, Tamil Nadu.",
  },
};

const craftSteps = [
  {
    number: "01",
    title: "Material Selection",
    description:
      "Every piece starts with the hide. We select full-grain leathers for their natural texture, durability, and the way they age.",
    image: "/images/placeholder/craft-material.jpg",
  },
  {
    number: "02",
    title: "Cutting & Shaping",
    description:
      "Patterns are traced and cut by hand. Each cut is deliberate because fit and finish depend on precision from the very first step.",
    image: "/images/placeholder/craft-cutting.jpg",
  },
  {
    number: "03",
    title: "Stitching",
    description:
      "We use a saddle-stitch technique that takes longer than machine stitching and gives the finished piece far more strength.",
    image: "/images/placeholder/craft-stitching.jpg",
  },
  {
    number: "04",
    title: "Finishing",
    description:
      "Edges are burnished, surfaces conditioned, and hardware fitted before each product is checked in daylight and approved.",
    image: "/images/placeholder/craft-finishing.jpg",
  },
];

const values = [
  {
    heading: "Handcrafted with Care",
    body: "Every piece is made by hand in our workshop in Melvisharam. No factory lines and no shortcuts.",
  },
  {
    heading: "Available on Order",
    body: "We make to order so every piece is fresh and we can accommodate custom sizing and colour requests where possible.",
  },
  {
    heading: "Made for Indian Needs",
    body: "Our products are designed for the Indian climate, the Indian street, and the Indian wardrobe.",
  },
];

const productTour = [
  {
    label: "Footwear",
    href: "/collections/footwear",
    description: "Sandals, slides, and slippers built for daily wear.",
    bg: "bg-[#2a1208]",
  },
  {
    label: "Bags",
    href: "/collections/bags",
    description: "Briefcases, backpacks, and weekenders that go the distance.",
    bg: "bg-[#1b3a5c]",
  },
  {
    label: "Accessories",
    href: "/collections/accessories",
    description: "Watch rolls, keychains, and small leather goods.",
    bg: "bg-[#3a2a1a]",
  },
];

export default function AboutPage() {
  return (
    <>
      <section
        aria-label="About hero"
        className="relative w-full min-h-[70vh] lg:min-h-[80vh] bg-leather-brown flex items-end overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/placeholder/about-hero.jpg')" }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(53,23,16,0.92) 0%, rgba(53,23,16,0.3) 60%, rgba(53,23,16,0.1) 100%)" }}
          aria-hidden
        />

        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
          <AnimatedSection>
            <p className="label-sm-caps text-sage-teal mb-5">Our Story</p>
            <h1 className="font-serif font-bold text-white text-headline-lg lg:text-[4rem] xl:text-[5rem] leading-tight max-w-[16ch] mb-5">
              The Soul Behind Every Stitch
            </h1>
            <p className="font-sans font-light text-white/70 text-body-lg lg:text-[1.25rem] max-w-[50ch] leading-relaxed">
              A family workshop in Melvisharam. Leather worked by hand. Products
              built to outlast the occasions you wear them to.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section aria-label="Origin story" className="py-16 lg:py-24 bg-warm-cream">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <AnimatedSection className="relative">
              <div className="aspect-4/5 bg-surface-high overflow-hidden max-w-130 mx-auto lg:mx-0">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/placeholder/about-workshop.jpg')" }}
                  role="img"
                  aria-label="Craftsman at work in the I Style Leathers workshop"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <p className="label-sm-caps text-sage-teal mb-4">Melvisharam, Tamil Nadu</p>
              <h2 className="font-serif font-bold text-leather-brown text-headline-md lg:text-headline-lg leading-tight mb-6">
                Made Here.<br />Worn Everywhere.
              </h2>
              <div className="space-y-4 font-sans text-body-lg text-on-surface-variant leading-relaxed">
                <p>
                  I Style Leathers started with a workshop skill passed from one
                  generation to the next and a belief that better leather goods
                  should be available without retail markup.
                </p>
                <p>
                  Our workshop is in Melvisharam, a town in Ranipet District
                  with a long tradition of leather craft. Every cutter, every
                  stitcher, and every finisher here has spent years learning the trade.
                </p>
                <p>
                  We sell directly. You place an order on WhatsApp, we make it,
                  and we ship it. The price reflects the leather and the labour,
                  not the cost of a showroom.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section aria-label="Our craft process" className="py-16 lg:py-24 bg-leather-brown">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-12 lg:mb-16">
            <p className="label-sm-caps text-sage-teal mb-4">The Process</p>
            <h2 className="font-serif font-bold text-white text-headline-md lg:text-headline-lg leading-tight max-w-[20ch]">
              Four Steps. No Shortcuts.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {craftSteps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 150}>
                <div className="aspect-4/3 bg-warm-cream/10 overflow-hidden mb-5">
                  <div
                    className="w-full h-full bg-cover bg-center opacity-70"
                    style={{ backgroundImage: `url('${step.image}')` }}
                    aria-hidden
                  />
                </div>
                <p className="font-serif font-bold text-[3rem] leading-none text-white/20 mb-2 select-none">
                  {step.number}
                </p>
                <h3 className="font-serif font-bold text-white text-headline-sm mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-body-sm text-white/65 leading-relaxed">
                  {step.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Product categories" className="py-16 lg:py-24 bg-parchment">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-10 lg:mb-12">
            <p className="label-sm-caps text-sage-teal mb-4">What We Make</p>
            <h2 className="font-serif font-bold text-leather-brown text-headline-md lg:text-headline-lg">
              Browse the Collection
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            {productTour.map((category, index) => (
              <AnimatedSection key={category.href} delay={index * 100}>
                <Link
                  href={category.href}
                  className={`group relative block overflow-hidden h-56 lg:h-72 ${category.bg}`}
                  aria-label={`Shop ${category.label}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-50 transition-transform duration-700 group-hover:scale-[1.04]"
                    style={{ backgroundImage: `url('/images/placeholder/category-${category.label.toLowerCase()}.jpg')` }}
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%)" }}
                    aria-hidden
                  />

                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                    <h3 className="font-serif font-bold text-white text-headline-sm mb-1">
                      {category.label}
                    </h3>
                    <p className="font-sans text-body-sm text-white/70 mb-3">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-sans font-semibold text-label-lg text-white/90 group-hover:gap-3 transition-all duration-200">
                      Shop Now <ArrowRightIcon size={14} aria-hidden />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Our values" className="py-16 lg:py-24 bg-warm-cream">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-10 lg:mb-14 max-w-[42ch]">
            <p className="label-sm-caps text-sage-teal mb-4">What We Stand For</p>
            <h2 className="font-serif font-bold text-leather-brown text-headline-md lg:text-headline-lg leading-tight">
              Three Things We Do Not Compromise On
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {values.map((value, index) => (
              <AnimatedSection key={value.heading} delay={index * 100}>
                <div className="w-10 h-0.5 bg-sage-teal mb-6" />
                <h3 className="font-serif font-bold text-leather-brown text-headline-sm mb-3">
                  {value.heading}
                </h3>
                <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                  {value.body}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Call to action" className="py-16 lg:py-24 bg-surface-low">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="flex flex-col items-center text-center max-w-140 mx-auto">
            <p className="label-sm-caps text-sage-teal mb-4">Ready?</p>
            <h2 className="font-serif font-bold text-leather-brown text-headline-md lg:text-headline-lg leading-tight mb-4">
              Find Something Made for You
            </h2>
            <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed mb-10 max-w-[44ch]">
              Browse the collection, pick what you love, and send us a message on
              WhatsApp. We&apos;ll take it from there.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/collections"
                className="
                  inline-flex items-center gap-2
                  bg-leather-brown text-warm-cream
                  font-sans font-semibold text-label-lg tracking-wide
                  px-8 py-4
                  hover:bg-russet transition-colors duration-200
                "
              >
                Shop the Collection
                <ArrowRightIcon size={16} aria-hidden />
              </Link>

              <WhatsAppLink
                href={WA_GENERIC_URL}
                className="
                  inline-flex items-center gap-2.5
                  border border-leather-brown text-leather-brown
                  font-sans font-semibold text-label-lg tracking-wide
                  px-8 py-4
                  hover:bg-leather-brown hover:text-warm-cream
                  transition-colors duration-200
                "
              >
                <WhatsAppIcon size={18} aria-hidden />
                Order on WhatsApp
              </WhatsAppLink>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
