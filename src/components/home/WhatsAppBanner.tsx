import { WhatsAppIcon } from "@/components/ui/Icons";
import { WA_GENERIC_URL, WA_PHONE_DISPLAY } from "@/lib/whatsapp";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function WhatsAppBanner() {
  return (
    <section
      aria-label="Order on WhatsApp"
      className="bg-sage-teal py-16 lg:py-20"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <AnimatedSection className="flex flex-col items-center text-center max-w-[600px] mx-auto">

          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mb-6">
            <WhatsAppIcon size={32} className="text-white" aria-hidden />
          </div>

          <h2 className="font-serif font-bold text-white text-headline-md lg:text-headline-lg leading-tight mb-4">
            Order Directly on WhatsApp
          </h2>

          <p className="font-sans text-body-lg text-white/80 leading-relaxed mb-3 max-w-[44ch]">
            Browse what you love, then send us a message. We confirm availability, take your size, and ship directly to your door — pan-India.
          </p>

          <p className="font-sans text-body-sm text-white/60 mb-8">
            No sign-ups. No payment gateway. Just a conversation.
          </p>

          {/* CTA */}
          <a
            href={WA_GENERIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              bg-white text-sage-teal
              font-sans font-bold text-label-lg tracking-wide
              px-8 py-4
              hover:bg-warm-cream
              transition-colors duration-200
              shadow-lg
            "
          >
            <WhatsAppIcon size={22} aria-hidden />
            Chat with Us — {WA_PHONE_DISPLAY}
          </a>

          <p className="font-sans text-body-sm text-white/50 mt-5">
            Typically responds within a few hours
          </p>

        </AnimatedSection>
      </div>
    </section>
  );
}
