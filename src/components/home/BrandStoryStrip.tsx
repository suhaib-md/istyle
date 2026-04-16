import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function BrandStoryStrip() {
  return (
    <section aria-label="Our story" className="py-16 lg:py-24 bg-parchment overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — image with floating stat card */}
          <AnimatedSection className="relative">
            {/* 4:5 image container */}
            <div className="relative aspect-4/5 w-full overflow-hidden bg-surface-high max-w-130 mx-auto lg:mx-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/placeholder/brand-story.jpg')",
                }}
                aria-hidden
              />
            </div>

            {/* Floating stat card */}
            <div
              className="
                absolute -bottom-4 -right-4 lg:-right-8
                bg-leather-brown text-warm-cream
                px-6 py-5 min-w-40
                shadow-xl
              "
            >
              <p className="font-serif font-bold text-[2rem] leading-none mb-1">
                100%
              </p>
              <p className="font-sans text-body-sm text-warm-cream/70 leading-tight">
                Handcrafted<br />in Tamil Nadu
              </p>
            </div>
          </AnimatedSection>

          {/* Right — text content */}
          <AnimatedSection delay={150} className="max-w-135">
            <p className="label-sm-caps text-sage-teal mb-4">
              Handcrafted with Passion
            </p>

            <h2 className="font-serif font-bold text-leather-brown text-headline-md lg:text-headline-lg leading-tight mb-6">
              Where Craftsmanship Meets Timeless Style
            </h2>

            <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed mb-4">
              Every piece that leaves our workshop in Melvisharam carries the weight of a craft practiced for generations. We cut, stitch, and finish by hand — not because it is the easiest way, but because it is the only way to guarantee the quality we are proud to put our name on.
            </p>

            <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mb-8">
              We design for the Indian climate, the Indian pace of life, and the Indian eye for detail. Our leather is selected for its grain and its durability. Our soles are built for streets, not showrooms.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-sans font-semibold text-label-lg text-leather-brown hover:text-russet transition-colors duration-150 group"
            >
              Meet Our Story
              <ArrowRightIcon
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
