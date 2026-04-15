import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Shipping policy placeholder for I Style Leathers.",
};

export default function ShippingPage() {
  return (
    <section className="mx-auto flex min-h-[40vh] w-full max-w-[960px] flex-col justify-center px-6 py-16 lg:px-12">
      <h1 className="font-serif text-headline-lg text-leather-brown">
        Shipping Policy
      </h1>
      <p className="mt-4 font-sans text-body-md text-on-surface-variant">
        Detailed shipping information is still pending. The route is active so
        the footer is complete for Phase 1.
      </p>
    </section>
  );
}
