import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn about I Style Leathers and the craftsmanship behind our handmade leather goods.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto flex min-h-[50vh] w-full max-w-[960px] flex-col justify-center px-6 py-16 lg:px-12">
      <p className="label-sm-caps text-sage-teal">Phase 1 Foundation</p>
      <h1 className="mt-4 font-serif text-headline-lg text-leather-brown">
        Our Story is coming next.
      </h1>
      <p className="mt-4 max-w-[60ch] font-sans text-body-lg text-on-surface-variant">
        The full editorial About page is planned for Phase 6. For now, the site
        foundation is in place and the shared navigation route is live.
      </p>
    </section>
  );
}
