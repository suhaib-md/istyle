import { instagramPosts } from "@/data/instagram";
import { InstagramIcon } from "@/components/ui/Icons";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function InstagramStrip() {
  return (
    <section aria-label="Instagram feed" className="py-16 lg:py-24 bg-warm-cream">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <AnimatedSection className="px-6 lg:px-12 mb-8 lg:mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="label-sm-caps text-sage-teal mb-2">Follow Along</p>
            <h2 className="font-serif font-bold text-leather-brown text-headline-md">
              @istyleLeathers
            </h2>
          </div>
          <a
            href="https://www.instagram.com/istyleLeathers/"
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

        {/* Horizontal scroll grid */}
        <div
          className="
            flex gap-2 lg:gap-3
            overflow-x-auto scrollbar-hide
            px-6 lg:px-12
            snap-x snap-mandatory
          "
        >
          {instagramPosts.map((post, i) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={post.alt}
              className="
                group relative flex-none
                w-[42vw] sm:w-[28vw] lg:w-[calc((100%-5*12px)/6)]
                aspect-square overflow-hidden bg-surface-high snap-start
              "
            >
              {/* Placeholder image */}
              <div
                className="
                  absolute inset-0 bg-cover bg-center
                  transition-transform duration-700 ease-out
                  group-hover:scale-[1.06]
                "
                style={{ backgroundImage: `url('${post.src}')` }}
                aria-hidden
              />

              {/* Instagram hover overlay */}
              <div
                className="
                  absolute inset-0 bg-leather-brown/0
                  group-hover:bg-leather-brown/40
                  transition-colors duration-300
                  flex items-center justify-center
                "
              >
                <InstagramIcon
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
