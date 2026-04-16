import { InstagramIcon } from "@/components/ui/Icons";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LiveInstagramFeed from "@/components/home/LiveInstagramFeed";

const BEHOLD_FEED_ID = "LfNYDEl4t0BAZQfbq1fh";

export default function InstagramStrip() {
  return (
    <section aria-label="Instagram feed" className="py-16 lg:py-24 bg-warm-cream">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <AnimatedSection className="px-6 lg:px-12 mb-8 lg:mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="label-sm-caps text-sage-teal mb-2">Follow Along</p>
            <h2 className="font-serif font-bold text-leather-brown text-headline-md">
              @istyle_leathers
            </h2>
          </div>
          <a
            href="https://www.instagram.com/istyle_leathers/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              font-sans font-semibold text-label-lg text-leather-brown
              hover:text-russet transition-colors duration-150
              shrink-0
            "
            aria-label="Follow I Style Leathers on Instagram"
          >
            <InstagramIcon size={18} aria-hidden />
            Follow on Instagram
          </a>
        </AnimatedSection>

        {/* Live Behold feed */}
        <div className="px-6 lg:px-12">
          <LiveInstagramFeed feedId={BEHOLD_FEED_ID} />
        </div>
      </div>
    </section>
  );
}
