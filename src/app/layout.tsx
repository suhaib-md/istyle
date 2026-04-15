import type { Metadata, Viewport } from "next";
import "./globals.css";
import { MobileMenuProvider } from "@/components/layout/MobileMenuContext";
import Navbar from "@/components/layout/Navbar";
import MobileDrawer from "@/components/layout/MobileDrawer";
import BottomTabBar from "@/components/layout/BottomTabBar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

export const metadata: Metadata = {
  title: {
    default: "I Style Leathers - Timeless Handcrafted Leather Goods",
    template: "%s - I Style Leathers",
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
  ],
  authors: [{ name: "I Style Leathers" }],
  creator: "I Style Leathers",
  metadataBase: new URL("https://istyle.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://istyle.vercel.app",
    siteName: "I Style Leathers",
    title: "I Style Leathers - Timeless Handcrafted Leather Goods",
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
    title: "I Style Leathers - Timeless Handcrafted Leather Goods",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <MobileMenuProvider>
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
        </MobileMenuProvider>
      </body>
    </html>
  );
}
