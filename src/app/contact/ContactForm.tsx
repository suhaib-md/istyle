"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { WA_GENERIC_URL } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";

type FormState = "idle" | "loading" | "success";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement | null)?.value;
    if (honeypot) return;

    setState("loading");
    setTimeout(() => setState("success"), 700);
  }

  if (state === "success") {
    return (
      <div className="py-8 flex flex-col items-start gap-4">
        <div className="w-10 h-0.5 bg-sage-teal" />
        <p className="font-serif font-bold text-leather-brown text-headline-sm">
          Message received.
        </p>
        <p className="font-sans text-body-md text-on-surface-variant leading-relaxed max-w-[42ch]">
          We&apos;ll get back to you within 24 hours. For anything urgent, the
          quickest path is WhatsApp â€” we respond the same day.
        </p>
        <a
          href={WA_GENERIC_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick()}
          className="
            inline-flex items-center gap-2
            bg-[#25D366] text-white
            font-sans font-bold text-label-lg
            px-6 py-3
            hover:opacity-90 transition-opacity duration-150
          "
        >
          <WhatsAppIcon size={18} aria-hidden />
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  const inputClass =
    "w-full bg-warm-cream border border-outline font-sans text-body-md text-leather-brown px-4 py-3 placeholder:text-on-surface-variant/50 focus:outline-none focus:border-leather-brown transition-colors duration-150";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <input
        name="website"
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
        autoComplete="off"
      />

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-name"
          className="font-sans font-semibold text-body-sm text-leather-brown"
        >
          Name <span className="text-russet" aria-hidden>*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your full name"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-phone"
          className="font-sans font-semibold text-body-sm text-leather-brown"
        >
          WhatsApp / Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+91 98765 43210"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-message"
          className="font-sans font-semibold text-body-sm text-leather-brown"
        >
          Message <span className="text-russet" aria-hidden>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="What would you like to know? Sizing, custom orders, delivery â€” anything."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="
          self-start inline-flex items-center
          bg-leather-brown text-warm-cream
          font-sans font-bold text-label-lg
          px-8 py-4
          hover:bg-russet
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors duration-200
        "
      >
        {state === "loading" ? "Sendingâ€¦" : "Send Message"}
      </button>
    </form>
  );
}
