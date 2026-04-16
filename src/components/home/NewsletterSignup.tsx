import NewsletterForm from "@/components/layout/NewsletterForm";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function NewsletterSignup() {
  return (
    <section
      aria-label="Newsletter signup"
      className="bg-surface-low py-16 lg:py-20"
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="flex flex-col items-center text-center max-w-120 mx-auto">

          <p className="label-sm-caps text-sage-teal mb-4">Stay in the Loop</p>

          <h2 className="font-serif font-bold text-leather-brown text-headline-md leading-tight mb-5">
            Be the First to Know
          </h2>

          <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mb-10 max-w-[40ch]">
            New designs, new leather. We send one email when something worth seeing drops — nothing else.
          </p>

          <div className="w-full max-w-105">
            <NewsletterForm />
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
}
