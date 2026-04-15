import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { MobileMenuProvider } from "@/components/layout/MobileMenuContext";
import { SearchProvider } from "@/components/layout/SearchContext";
import SearchOverlay from "@/components/layout/SearchOverlay";
import Navbar from "@/components/layout/Navbar";
import MobileDrawer from "@/components/layout/MobileDrawer";
import BottomTabBar from "@/components/layout/BottomTabBar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

const SITE_URL = "https://istyle.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "I Style Leathers — Timeless Handcrafted Leather Goods",
    template: "%s — I Style Leathers",
  },
  description:
    "Shop handcrafted leather sandals, bags, and accessories from Melvisharam, Tamil Nadu. Order directly on WhatsApp.",
  keywords: [
    "handcrafted leather",
    "leather sandals",
    "leather bags",
    "leather accessories",
    "Tamil Nadu leather",
    "WhatsApp order",
    "Melvisharam",
  ],
  authors: [{ name: "I Style Leathers" }],
  creator: "I Style Leathers",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  manifest: "/manifest.json",
  icons: {
    icon: "/logo/logo-light.svg",
    apple: "/logo/logo-light.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "I Style Leathers",
    title: "I Style Leathers — Timeless Handcrafted Leather Goods",
    description:
      "Shop handcrafted leather sandals, bags, and accessories from Melvisharam, Tamil Nadu.",
    images: [
      {
        url: "/logo/logo-light.svg",
        width: 160,
        height: 160,
        alt: "I Style Leathers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I Style Leathers — Timeless Handcrafted Leather Goods",
    description:
      "Handcrafted leather sandals, bags, and accessories from Tamil Nadu.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#351710",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "I Style Leathers",
  url: SITE_URL,
  logo: `${SITE_URL}/logo/logo-light.svg`,
  description:
    "Handcrafted leather goods — sandals, bags, and accessories made in Melvisharam, Tamil Nadu.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melvisharam",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-98423-76554",
    contactType: "customer service",
    availableLanguage: ["English", "Tamil"],
  },
  sameAs: ["https://www.instagram.com/istyleLeathers/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <MobileMenuProvider>
          <SearchProvider>
          <SearchOverlay />
          <Navbar />
          <MobileDrawer />
          <main
            className="
              flex-1
              pt-15 lg:pt-18
              pb-[calc(56px+env(safe-area-inset-bottom,0px))] lg:pb-0
            "
          >
            {children}
          </main>
          <Footer />
          <WhatsAppFAB />
          <BottomTabBar />
          </SearchProvider>
        </MobileMenuProvider>

        {/* GA4 — only injected when measurement ID is configured */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID} />
        )}

        {/* Service worker registration */}
        <Script id="sw-register" strategy="afterInteractive">{`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js');
            });
          }
        `}</Script>
      </body>
    </html>
  );
}
