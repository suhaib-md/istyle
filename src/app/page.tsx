import HeroSection from "@/components/home/HeroSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandStoryStrip from "@/components/home/BrandStoryStrip";
import EditorialFeature from "@/components/home/EditorialFeature";
import InstagramStrip from "@/components/home/InstagramStrip";
import WhatsAppBanner from "@/components/home/WhatsAppBanner";
import NewsletterSignup from "@/components/home/NewsletterSignup";

export default function Home() {
  return (
    <>
      {/* 1. Hero — full viewport crossfade carousel */}
      <HeroSection />

      {/* 2. Category Grid — Footwear / Bags / Accessories */}
      <CategoryGrid />

      {/* 3. Featured Products — New Arrivals */}
      <FeaturedProducts />

      {/* 4. Brand Story Strip — 50/50 with floating stat */}
      <BrandStoryStrip />

      {/* 5. Editorial Feature — hero product spotlight */}
      <EditorialFeature />

      {/* 6. Instagram Strip — 6 static posts */}
      <InstagramStrip />

      {/* 7. WhatsApp CTA Banner */}
      <WhatsAppBanner />

      {/* 8. Newsletter Signup */}
      <NewsletterSignup />
    </>
  );
}
