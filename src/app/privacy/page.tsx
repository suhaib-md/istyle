import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy placeholder for I Style Leathers.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto flex min-h-[40vh] w-full max-w-[960px] flex-col justify-center px-6 py-16 lg:px-12">
      <h1 className="font-serif text-headline-lg text-leather-brown">
        Privacy Policy
      </h1>
      <p className="mt-4 font-sans text-body-md text-on-surface-variant">
        Policy content will be added in a later phase. This page is live now so
        footer navigation is not broken.
      </p>
    </section>
  );
}
