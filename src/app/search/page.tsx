import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the I Style Leathers collection.",
};

export default function SearchPage() {
  return (
    <section className="mx-auto flex min-h-[50vh] w-full max-w-[960px] flex-col justify-center px-6 py-16 lg:px-12">
      <p className="label-sm-caps text-sage-teal">Phase 1 Foundation</p>
      <h1 className="mt-4 font-serif text-headline-lg text-leather-brown">
        Search will arrive in Phase 8.
      </h1>
      <p className="mt-4 max-w-[60ch] font-sans text-body-lg text-on-surface-variant">
        The search helper is already in the codebase; the dedicated overlay and
        results experience are still pending.
      </p>
    </section>
  );
}
