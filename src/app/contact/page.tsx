import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "./ContactForm";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/Icons";
import { WA_GENERIC_URL, WA_PHONE_DISPLAY } from "@/lib/whatsapp";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

export const metadata: Metadata = {
  title: "Contact I Style Leathers — WhatsApp & Instagram",
  description:
    "Get in touch with I Style Leathers on WhatsApp (+91 9842376554) or Instagram @istyle_leathers.",
  alternates: { canonical: "https://istyleleathers.vercel.app/contact" },
  openGraph: {
    url: "https://istyleleathers.vercel.app/contact",
    title: "Contact I Style Leathers — WhatsApp & Instagram",
    description:
      "Get in touch with I Style Leathers on WhatsApp (+91 9842376554) or Instagram @istyle_leathers.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-warm-cream">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="label-sm-caps text-sage-teal mb-4">Reach Out</p>
            <h1 className="font-serif font-bold text-leather-brown text-headline-lg lg:text-[3.5rem] leading-tight mb-5">
              Get in Touch
            </h1>
            <p className="font-sans font-light text-body-lg text-on-surface-variant max-w-[50ch] leading-relaxed">
              We're a small workshop in Melvisharam, not a call centre. The
              quickest way to reach us is WhatsApp — we respond the same day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          THREE CONTACT METHODS
      ══════════════════════════════════════════════════ */}
      <section aria-label="Contact methods" className="py-12 lg:py-16 bg-parchment">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-8">

            {/* ── WhatsApp ─────────────────────────────── */}
            <AnimatedSection delay={0}>
              <div className="bg-warm-cream border border-outline p-6 lg:p-8 flex flex-col gap-5 h-full">
                <div className="w-12 h-12 bg-[#25D366] flex items-center justify-center shrink-0">
                  <WhatsAppIcon size={24} className="text-white" aria-hidden />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif font-bold text-leather-brown text-headline-sm mb-2">
                    WhatsApp
                  </h2>
                  <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed mb-1.5">
                    The fastest way to order, ask about sizing, or discuss a
                    custom piece. We respond the same day.
                  </p>
                  <p className="font-sans font-semibold text-body-sm text-leather-brown">
                    {WA_PHONE_DISPLAY}
                  </p>
                </div>
                <WhatsAppLink
                  href={WA_GENERIC_URL}
                  className="
                    inline-flex items-center justify-center gap-2
                    bg-[#25D366] text-white
                    font-sans font-bold text-label-lg
                    px-6 py-3.5
                    hover:opacity-90 transition-opacity duration-150
                  "
                >
                  <WhatsAppIcon size={18} aria-hidden />
                  Chat Now
                </WhatsAppLink>
              </div>
            </AnimatedSection>

            {/* ── Instagram ────────────────────────────── */}
            <AnimatedSection delay={100}>
              <div className="bg-warm-cream border border-outline p-6 lg:p-8 flex flex-col gap-5 h-full">
                <div className="w-12 h-12 bg-leather-brown flex items-center justify-center shrink-0">
                  <InstagramIcon size={22} className="text-warm-cream" aria-hidden />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif font-bold text-leather-brown text-headline-sm mb-2">
                    Instagram
                  </h2>
                  <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed mb-1.5">
                    Follow our workshop and see new designs as they come off
                    the bench. DMs are welcome too.
                  </p>
                  <p className="font-sans font-semibold text-body-sm text-leather-brown">
                    @istyle_leathers
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/istyle_leathers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center gap-2
                    border border-leather-brown text-leather-brown
                    font-sans font-bold text-label-lg
                    px-6 py-3.5
                    hover:bg-leather-brown hover:text-warm-cream
                    transition-colors duration-200
                  "
                >
                  <InstagramIcon size={16} aria-hidden />
                  Follow Us
                </a>
              </div>
            </AnimatedSection>

            {/* ── Email ────────────────────────────────── */}
            <AnimatedSection delay={200}>
              <div className="bg-warm-cream border border-outline p-6 lg:p-8 flex flex-col gap-5 h-full">
                <div className="w-12 h-12 bg-surface-high flex items-center justify-center shrink-0">
                  {/* Mail icon — inline SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={22}
                    height={22}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-leather-brown"
                    aria-hidden
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="font-serif font-bold text-leather-brown text-headline-sm mb-2">
                    Email
                  </h2>
                  <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed mb-1.5">
                    For wholesale enquiries, partnerships, or anything that
                    needs a paper trail.
                  </p>
                  <p className="font-sans font-semibold text-body-sm text-leather-brown break-all">
                    istyleleathersmvs@gmail.com
                  </p>
                </div>
                <a
                  href="mailto:istyleleathersmvs@gmail.com"
                  className="
                    inline-flex items-center justify-center gap-2
                    border border-leather-brown text-leather-brown
                    font-sans font-bold text-label-lg
                    px-6 py-3.5
                    hover:bg-leather-brown hover:text-warm-cream
                    transition-colors duration-200
                  "
                >
                  Send Email
                </a>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTACT FORM + LOCATION
      ══════════════════════════════════════════════════ */}
      <section aria-label="Contact form and location" className="py-16 lg:py-24 bg-warm-cream">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* ── Form ─────────────────────────────────── */}
            <AnimatedSection>
              <p className="label-sm-caps text-sage-teal mb-4">Send a Message</p>
              <h2 className="font-serif font-bold text-leather-brown text-headline-md mb-8">
                We'll Reply Within 24 Hours
              </h2>
              <ContactForm />
            </AnimatedSection>

            {/* ── Location + Map ───────────────────────── */}
            <AnimatedSection delay={150}>
              <p className="label-sm-caps text-sage-teal mb-4">Where We Are</p>
              <h2 className="font-serif font-bold text-leather-brown text-headline-md mb-3">
                Based in Melvisharam
              </h2>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mb-2">
                Melvisharam, Ranipet District, Tamil Nadu, India.
              </p>
              <p className="font-sans text-body-sm text-on-surface-variant/80 leading-relaxed mb-8">
                Our workshop is not open for walk-ins — all orders go through
                WhatsApp. Pan-India delivery available.
              </p>

              {/* Google Maps embed — general area, no API key needed */}
              <div className="aspect-4/3 w-full overflow-hidden border border-outline">
                <iframe
                  src="https://maps.google.com/maps?q=Melvisharam,+Tamil+Nadu,+India&t=m&z=13&output=embed&iwloc=near"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="I Style Leathers workshop location — Melvisharam, Tamil Nadu"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  );
}
