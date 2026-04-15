import type { Metadata } from "next";
import { WA_PHONE_DISPLAY } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with I Style Leathers on WhatsApp, Instagram, or email.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto flex w-full max-w-[960px] flex-col px-6 py-16 lg:px-12">
      <p className="label-sm-caps text-sage-teal">Phase 1 Foundation</p>
      <h1 className="mt-4 font-serif text-headline-lg text-leather-brown">
        Contact details are ready.
      </h1>
      <p className="mt-4 max-w-[60ch] font-sans text-body-lg text-on-surface-variant">
        The full contact experience with form and map is planned for Phase 7.
        This placeholder keeps the navigation complete while the shared shell is
        being finalized.
      </p>

      <div className="mt-10 space-y-3 rounded-sm border border-outline bg-surface-low p-6">
        <p className="font-sans text-body-md text-leather-brown">
          WhatsApp: {WA_PHONE_DISPLAY}
        </p>
        <p className="font-sans text-body-md text-leather-brown">
          Instagram: @istyleLeathers
        </p>
        <p className="font-sans text-body-md text-leather-brown">
          Email: istyleleathersmvs@gmail.com
        </p>
      </div>

      <div id="shipping" className="mt-10 rounded-sm border border-outline bg-warm-cream p-6">
        <h2 className="font-serif text-headline-sm text-leather-brown">
          Shipping & Returns
        </h2>
        <p className="mt-3 font-sans text-body-md text-on-surface-variant">
          Shipping policy content is scheduled for a later phase. This anchor is
          available now so footer navigation works cleanly.
        </p>
      </div>
    </section>
  );
}
