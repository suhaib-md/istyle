// Static Instagram feed — 6 hand-curated images (V1)
// Replace src paths with real image files and update hrefs with actual post URLs.

export interface InstagramPost {
  id: string;
  src: string;
  alt: string;
  href: string;
}

export const instagramPosts: InstagramPost[] = [
  {
    id: "ig-01",
    src: "/images/placeholder/instagram-01.jpg",
    alt: "Cross-Strap Croc Slide on teal background",
    href: "https://www.instagram.com/istyle_leathers/",
  },
  {
    id: "ig-02",
    src: "/images/placeholder/instagram-02.jpg",
    alt: "Black laptop briefcase with tan leather trim",
    href: "https://www.instagram.com/istyle_leathers/",
  },
  {
    id: "ig-03",
    src: "/images/placeholder/instagram-03.jpg",
    alt: "Thong sandal on sandy ground",
    href: "https://www.instagram.com/istyle_leathers/",
  },
  {
    id: "ig-04",
    src: "/images/placeholder/instagram-04.jpg",
    alt: "Leather watch roll open showing three watches",
    href: "https://www.instagram.com/istyle_leathers/",
  },
  {
    id: "ig-05",
    src: "/images/placeholder/instagram-05.jpg",
    alt: "Navy perforated backpack against a stone wall",
    href: "https://www.instagram.com/istyle_leathers/",
  },
  {
    id: "ig-06",
    src: "/images/placeholder/instagram-06.jpg",
    alt: "Leather tassel keychain in cognac and brown",
    href: "https://www.instagram.com/istyle_leathers/",
  },
];
