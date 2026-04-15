import NewsletterForm from "@/components/layout/NewsletterForm";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function NewsletterSignup() {
  return (
    <section
      aria-label="Newsletter signup"
      className="bg-surface-low py-16 lg:py-20"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <AnimatedSection className="flex flex-col items-center text-center max-w-[480px] mx-auto">

          <p className="label-sm-caps text-sage-teal mb-3">Stay in the Loop</p>

          <h2 className="font-serif font-bold text-leather-brown text-headline-md leading-tight mb-3">
            Be the First to Know
          </h2>

          <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mb-8 max-w-[36ch]">
            New designs, new leather. We send one email when something worth seeing drops — nothing else.
          </p>

          <div className="w-full max-w-[420px]">
            <NewsletterForm />
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
}
