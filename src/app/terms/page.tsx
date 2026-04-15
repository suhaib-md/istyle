import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms placeholder for I Style Leathers.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto flex min-h-[40vh] w-full max-w-[960px] flex-col justify-center px-6 py-16 lg:px-12">
      <h1 className="font-serif text-headline-lg text-leather-brown">
        Terms & Conditions
      </h1>
      <p className="mt-4 font-sans text-body-md text-on-surface-variant">
        Terms content will be expanded later. This route is live now to support
        the Phase 1 footer shell.
      </p>
    </section>
  );
}
