import Link from "next/link";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/Icons";
import { WA_GENERIC_URL, WA_PHONE_DISPLAY } from "@/lib/whatsapp";
import NewsletterForm from "./NewsletterForm";
import SiteLogo from "./SiteLogo";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

const SHOP_LINKS = [
  { label: "Footwear", href: "/collections/footwear" },
  { label: "Bags", href: "/collections/bags" },
  { label: "Accessories", href: "/collections/accessories" },
  { label: "New Arrivals", href: "/collections?sort=new" },
];

const INFO_LINKS = [
  { label: "Our Story", href: "/about" },
  { label: "Shipping & Returns", href: "/contact#shipping" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-parchment border-t border-outline" aria-label="Site footer">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 lg:py-16">
          <div className="space-y-4">
            <SiteLogo />

            <p className="text-body-sm font-sans text-on-surface-variant leading-relaxed max-w-55">
              Handcrafted leather goods from Melvisharam, Tamil Nadu. Timeless
              style, made by hand.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/istyle_leathers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="I Style Leathers on Instagram"
                className="
                  w-9 h-9 flex items-center justify-center rounded-sm
                  text-on-surface-variant hover:text-leather-brown
                  transition-colors duration-150
                "
              >
                <InstagramIcon size={18} />
              </a>
              <WhatsAppLink
                href={WA_GENERIC_URL}
                aria-label="Chat on WhatsApp"
                className="
                  w-9 h-9 flex items-center justify-center rounded-sm
                  text-on-surface-variant hover:text-whatsapp
                  transition-colors duration-150
                "
              >
                <WhatsAppIcon size={18} />
              </WhatsAppLink>
            </div>
          </div>

          <div>
            <h3 className="label-sm-caps text-leather-brown mb-4">Shop</h3>
            <ul className="space-y-2.5">
              {SHOP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      text-body-sm font-sans text-on-surface-variant
                      hover:text-leather-brown
                      transition-colors duration-150
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-sm-caps text-leather-brown mb-4">Information</h3>
            <ul className="space-y-2.5">
              {INFO_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      text-body-sm font-sans text-on-surface-variant
                      hover:text-leather-brown
                      transition-colors duration-150
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="label-sm-caps text-leather-brown mb-3">
                Stay in the loop
              </h3>
              <p className="text-body-sm font-sans text-on-surface-variant mb-3 leading-relaxed">
                Be the first to know about new designs.
              </p>
              <NewsletterForm compact />
            </div>

            <div className="space-y-2 pt-1">
              <h3 className="label-sm-caps text-leather-brown">Contact</h3>
              <WhatsAppLink
                href={WA_GENERIC_URL}
                className="
                  flex items-center gap-2
                  text-body-sm font-sans text-on-surface-variant
                  hover:text-whatsapp transition-colors duration-150
                "
              >
                <WhatsAppIcon size={14} aria-hidden />
                {WA_PHONE_DISPLAY}
              </WhatsAppLink>
              <a
                href="https://www.instagram.com/istyle_leathers/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  text-body-sm font-sans text-on-surface-variant
                  hover:text-leather-brown transition-colors duration-150
                "
              >
                <InstagramIcon size={14} aria-hidden />
                @istyle_leathers
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-outline py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-body-sm font-sans text-on-surface-variant">
            &copy; {year} I Style Leathers. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Shipping Policy", href: "/shipping" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  text-body-sm font-sans text-on-surface-variant
                  hover:text-leather-brown transition-colors duration-150
                "
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
