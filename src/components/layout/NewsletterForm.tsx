"use client";

import { useState, useRef } from "react";

interface NewsletterFormProps {
  /** Compact mode — smaller inputs, used in footer */
  compact?: boolean;
}

export default function NewsletterForm({ compact = false }: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const honeypotRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot check — bots fill hidden fields
    if (honeypotRef.current?.value) return;

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    if (!email) return;

    // V1: no backend — just show success
    // V2: POST to MailerLite / Brevo API endpoint here
    try {
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p
        role="status"
        aria-live="polite"
        className="text-body-sm font-sans text-sage-teal font-medium py-2"
      >
        You&apos;re on the list. We&apos;ll be in touch!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-2">
      {/* Honeypot — hidden from real users, visible to bots */}
      <input
        ref={honeypotRef}
        type="text"
        name="website"
        tabIndex={-1}
        aria-hidden="true"
        className="sr-only"
        autoComplete="off"
      />

      <div className={`flex gap-2 ${compact ? "flex-col sm:flex-row" : "flex-col"}`}>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          aria-label="Email address for newsletter"
          className={`
            flex-1 border border-outline bg-warm-cream
            font-sans text-body-sm text-leather-brown placeholder:text-on-surface-variant/60
            focus:outline-none focus:border-leather-brown
            transition-colors duration-150
            ${compact ? "px-3 py-2 text-[13px]" : "px-4 py-3"}
          `}
        />
        <button
          type="submit"
          className={`
            shrink-0 bg-leather-brown text-warm-cream
            font-sans font-semibold tracking-wide
            hover:bg-russet transition-colors duration-200
            ${compact ? "px-4 py-2 text-[12px] text-label-sm" : "px-6 py-3 text-label-lg"}
          `}
        >
          Notify Me
        </button>
      </div>

      {status === "error" && (
        <p role="alert" className="text-[12px] font-sans text-russet">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
