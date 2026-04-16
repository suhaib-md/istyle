"use client";

import Script from "next/script";

// Declare the Behold web component for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "behold-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "feed-id": string },
        HTMLElement
      >;
    }
  }
}

export default function LiveInstagramFeed({ feedId }: { feedId: string }) {
  return (
    <>
      <Script
        src="https://w.behold.so/widget.js"
        type="module"
        strategy="lazyOnload"
      />
      <behold-widget feed-id={feedId} />
    </>
  );
}
