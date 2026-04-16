import { InstagramIcon } from "@/components/ui/Icons";
import AnimatedSection from "@/components/ui/AnimatedSection";
import LiveInstagramFeed from "@/components/home/LiveInstagramFeed";
import { instagramPosts } from "@/data/instagram";

export default function InstagramStrip() {
  const beholdFeedId = process.env.NEXT_PUBLIC_BEHOLD_FEED_ID?.trim();

  return (
    <section aria-label="Instagram feed" className="py-16 lg:py-24 bg-warm-cream">
      <div className="max-w-8xl mx-auto">
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

        <div className="px-6 lg:px-12">
          {beholdFeedId ? (
            <LiveInstagramFeed feedId={beholdFeedId} />
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
              {instagramPosts.map((post) => (
                <a
                  key={post.id}
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block aspect-square overflow-hidden bg-surface-mid"
                  aria-label={post.alt}
                >
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${post.src}')` }}
                  />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
