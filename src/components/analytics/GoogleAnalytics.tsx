import Script from "next/script";

interface GoogleAnalyticsProps {
  measurementId: string;
}

/**
 * Injects the GA4 gtag.js snippet.
 * Only rendered when NEXT_PUBLIC_GA_ID is set.
 * Uses strategy="afterInteractive" so it never blocks rendering.
 */
export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}', { send_page_view: true });
      `}</Script>
    </>
  );
}
