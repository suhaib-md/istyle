import type { Product, CategoryMeta } from "@/types/product";

// Placeholder image paths — replace with real paths once photography is provided
const PH_PORTRAIT = "/images/placeholder/product-portrait.jpg";
const PH_SIDE = "/images/placeholder/product-side.jpg";
const PH_DETAIL = "/images/placeholder/product-detail.jpg";
const PH_LIFESTYLE = "/images/placeholder/product-lifestyle.jpg";
const PH_FLATLAY = "/images/placeholder/product-flatlay.jpg";

export const products: Product[] = [
  // FOOTWEAR
  {
    slug: "cross-strap-croc-slide",
    name: "Cross-Strap Croc Slide",
    category: "footwear",
    subcategory: "slides",
    shortDescription:
      "Cut from full-grain leather with a croc-emboss pattern that catches the light differently every time you wear it.",
    longDescription:
      "The Cross-Strap Croc Slide is cut from full-grain leather with a croc-emboss pattern that catches the light differently every time you wear it. The double cross-strap silhouette is a signature I Style design - wide enough to hold the foot firmly, slim enough to stay elegant. The cushioned black sole is built for Indian summers: firm enough to walk all day, soft enough to forget you have them on. Available in deep brown and midnight black, each pair is finished by hand with edge coating that prevents cracking over years of wear. This is a slide you buy once and wear for a decade.",
    materialsAndCare:
      "Upper: Full-grain croc-embossed leather. Sole: Moulded rubber with cushioned insole. Hardware: Antique brass buckle. Care: Wipe clean with a damp cloth. Apply leather conditioner monthly. Avoid prolonged exposure to water. Store away from direct sunlight.",
    dimensions:
      "Available in UK sizes 6-11. Half sizes not available. Refer to the size guide for foot length measurements.",
    price: 4800,
    leatherType: "Croc Embossed Full Grain",
    colors: [
      { name: "Deep Brown", hex: "#5c3317" },
      { name: "Midnight Black", hex: "#1a1a1a" },
    ],
    sizes: [6, 7, 8, 9, 10, 11],
    images: [PH_PORTRAIT, PH_SIDE, PH_DETAIL, PH_LIFESTYLE, PH_FLATLAY],
    status: "available-on-order",
    tags: ["new", "featured"],
    featured: true,
  },
  {
    slug: "double-buckle-slide",
    name: "Double-Buckle Slide",
    category: "footwear",
    subcategory: "slides",
    shortDescription:
      "Two adjustable buckles let you dial in the perfect fit. Smooth calf leather with a polished finish for formal and casual wear alike.",
    longDescription:
      "The Double-Buckle Slide brings a classic double-monk silhouette to open-toe footwear. Two adjustable buckle straps sit across the forefoot and ankle, giving you a precise, secure fit that single-strap slides can never match. The upper is cut from smooth calf leather - the kind that develops a rich patina the more you wear it. The low-profile sole keeps the silhouette clean. It pairs as easily with a kurta as it does with formal trousers. Each pair is hand-finished at our workshop in Melvisharam.",
    materialsAndCare:
      "Upper: Smooth calf leather. Sole: Leather-wrapped moulded rubber. Hardware: Polished silver-tone buckle. Care: Polish with matching leather cream. Condition every 2-3 weeks with regular wear. Avoid puddles.",
    dimensions: "UK sizes 6-11. Refer to size guide.",
    price: 5200,
    leatherType: "Smooth Calf",
    colors: [{ name: "Midnight Black", hex: "#1a1a1a" }],
    sizes: [6, 7, 8, 9, 10, 11],
    images: [PH_PORTRAIT, PH_SIDE, PH_DETAIL, PH_LIFESTYLE, PH_FLATLAY],
    status: "available-on-order",
    tags: ["featured"],
    featured: true,
  },
  {
    slug: "single-strap-embossed-slip-on",
    name: "Single-Strap Embossed Slip-On",
    category: "footwear",
    subcategory: "slippers",
    shortDescription:
      "One broad strap, zero fuss. Embossed leather with a rubber sole - your go-to for home and beyond.",
    longDescription:
      "When you need something you can slip on in seconds and wear all day, the Single-Strap Embossed Slip-On is that product. The broad leather strap sits flat across the foot, distributing pressure evenly so there is no pinching after hours of wear. The leather is lightly embossed - subtle enough to look polished, textured enough to have character. The rubber sole gives you enough grip for both the house and a quick trip to the market. Simple. Reliable. Handmade.",
    materialsAndCare:
      "Upper: Embossed leather. Sole: Non-slip rubber. Care: Wipe with damp cloth. Condition occasionally to maintain suppleness.",
    dimensions: "UK sizes 6-11.",
    price: 3200,
    leatherType: "Embossed Leather",
    colors: [{ name: "Midnight Black", hex: "#1a1a1a" }],
    sizes: [6, 7, 8, 9, 10, 11],
    images: [PH_PORTRAIT, PH_SIDE, PH_DETAIL, PH_LIFESTYLE, PH_FLATLAY],
    status: "available-on-order",
    tags: ["new"],
    featured: false,
  },
  {
    slug: "thong-sandal-buckle-cognac",
    name: "Thong Sandal with Buckle",
    category: "footwear",
    subcategory: "sandals",
    shortDescription:
      "Cognac croc leather meets a black sole in a thong sandal built to turn heads without trying.",
    longDescription:
      "The Thong Sandal is our answer to the question: can a sandal be both traditional and thoroughly contemporary? The toe-post construction is as old as footwear itself, but the croc-embossed cognac leather and the contrast black sole make it unmistakably modern. The ankle buckle adds a touch of formality that elevates it above a typical beachside sandal. Wear it to a wedding, a rooftop dinner, or a Sunday afternoon walk - it belongs in all three. The leather is full-grain throughout, meaning it will only get better looking as it ages.",
    materialsAndCare:
      "Upper: Full-grain croc-embossed leather (cognac). Sole: Black moulded rubber. Hardware: Antique brass ankle buckle. Care: Condition regularly. Clean with a soft cloth.",
    dimensions: "UK sizes 6-11. Refer to size guide.",
    price: 4200,
    leatherType: "Croc Embossed Full Grain",
    colors: [
      { name: "Cognac", hex: "#9b5523" },
      { name: "Midnight Black", hex: "#1a1a1a" },
    ],
    sizes: [6, 7, 8, 9, 10, 11],
    images: [PH_PORTRAIT, PH_SIDE, PH_DETAIL, PH_LIFESTYLE, PH_FLATLAY],
    status: "available-on-order",
    tags: ["featured"],
    featured: true,
  },
  {
    slug: "thong-sandal-two-tone",
    name: "Two-Tone Thong Sandal",
    category: "footwear",
    subcategory: "sandals",
    shortDescription:
      "Black upper, white sole - a clean contrast that works with everything from linen trousers to denim.",
    longDescription:
      "The Two-Tone Thong Sandal strips the sandal down to its essentials and then plays with contrast. The black leather upper runs clean and smooth across the foot. The white sole grounds it with a fresh, casual energy. Together they create a sandal that feels intentional, not incidental. No hardware, no fuss - just well-cut leather and a sole that keeps its white through cleaning after cleaning. Made for the person who wants their outfit to do the talking.",
    materialsAndCare:
      "Upper: Smooth leather (black). Sole: White rubber. Care: Clean sole with mild soap and water. Condition upper regularly.",
    dimensions: "UK sizes 6-11.",
    price: 3800,
    leatherType: "Smooth Leather",
    colors: [{ name: "Black / White", hex: "#1a1a1a" }],
    sizes: [6, 7, 8, 9, 10, 11],
    images: [PH_PORTRAIT, PH_SIDE, PH_DETAIL, PH_LIFESTYLE, PH_FLATLAY],
    status: "available-on-order",
    tags: ["new"],
    featured: false,
  },
  {
    slug: "toe-ring-multi-strap-sandal",
    name: "Toe-Ring Multi-Strap Sandal",
    category: "footwear",
    subcategory: "sandals",
    shortDescription:
      "Five leather straps, one toe ring - a sandal with the visual complexity of traditional Indian footwear and the comfort of modern construction.",
    longDescription:
      "The Toe-Ring Multi-Strap Sandal is the most intricate piece in our footwear collection. Five narrow leather straps fan out from the toe ring across the top of the foot, each one hand-stitched to the leather insole. The construction takes longer than any other sandal we make, but the result is a piece genuinely unlike anything you will find on a market shelf. It pairs beautifully with ethnic wear for formal occasions and looks equally at home with casual summer clothes. The leather is smooth and supple, breaking in within the first few wears.",
    materialsAndCare:
      "Upper: Full-grain smooth leather (black). Sole: Cushioned leather-wrapped rubber. Care: Condition regularly. Clean straps individually with a soft cloth.",
    dimensions: "UK sizes 6-11. Refer to size guide.",
    price: 5500,
    leatherType: "Full Grain Smooth",
    colors: [{ name: "Midnight Black", hex: "#1a1a1a" }],
    sizes: [6, 7, 8, 9, 10, 11],
    images: [PH_PORTRAIT, PH_SIDE, PH_DETAIL, PH_LIFESTYLE, PH_FLATLAY],
    status: "available-on-order",
    tags: ["limited"],
    featured: false,
  },

  // BAGS
  {
    slug: "laptop-briefcase-black-tan",
    name: "Laptop Briefcase - Black and Tan",
    category: "bags",
    subcategory: "briefcases",
    shortDescription:
      "Textured black leather body, tan leather trim, and a frame that holds its shape even when empty. A briefcase built to outlast every job you will ever have.",
    longDescription:
      "The Laptop Briefcase in Black and Tan is the bag that earns attention before you have said a word. The body is cut from black textured leather - substantial and structured. The tan leather trim at the handles, corners, and zip pull adds warmth and contrast you will not find in any factory bag. Inside, a padded laptop sleeve sits alongside two full-depth compartments that swallow a day of work. The top handle is hand-stitched and reinforced at the attachment points - the part of most bags that fails first. This one is built to carry your laptop, your files, and your ambitions, every single working day.",
    materialsAndCare:
      "Body: Black textured leather. Trim: Cognac tan full-grain leather. Lining: Cotton canvas. Hardware: Antique brass zips and D-rings. Fits laptops up to 15.6 inches. Care: Wipe with damp cloth. Condition every month. Store with a dust bag.",
    dimensions:
      "38cm x 29cm x 8cm (W x H x D). Laptop compartment: fits up to 15.6 inches. Weight: approx. 900g.",
    price: 8500,
    leatherType: "Textured and Full Grain Trim",
    colors: [{ name: "Black and Tan", hex: "#1a1a1a" }],
    images: [PH_PORTRAIT, PH_SIDE, PH_DETAIL, PH_LIFESTYLE, PH_FLATLAY],
    status: "available-on-order",
    tags: ["new", "featured"],
    featured: true,
  },
  {
    slug: "laptop-briefcase-navy-tan",
    name: "Laptop Briefcase - Navy and Tan",
    category: "bags",
    subcategory: "briefcases",
    shortDescription:
      "Navy leather body with tan trim - a less conventional choice that makes a confident, understated statement.",
    longDescription:
      "The same silhouette as our Black and Tan Briefcase, but in a colour combination that demands a second look. Navy blue full-grain leather is rare in the Indian market - most briefcases go black or brown. This one does not. The tan leather trim sits against the navy in a way that feels simultaneously classic and fresh. If you have been looking for a bag that reflects the same taste level as your clothes, this is the briefcase. All construction details are identical to the Black and Tan: padded laptop sleeve, two compartments, hand-stitched handles.",
    materialsAndCare:
      "Body: Navy full-grain leather. Trim: Cognac tan full-grain leather. Lining: Cotton canvas. Hardware: Antique brass. Fits laptops up to 15.6 inches.",
    dimensions:
      "38cm x 29cm x 8cm (W x H x D). Laptop compartment: fits up to 15.6 inches. Weight: approx. 900g.",
    price: 8500,
    leatherType: "Full Grain",
    colors: [{ name: "Navy and Tan", hex: "#1b3a5c" }],
    images: [PH_PORTRAIT, PH_SIDE, PH_DETAIL, PH_LIFESTYLE, PH_FLATLAY],
    status: "available-on-order",
    tags: ["featured"],
    featured: false,
  },
  {
    slug: "backpack-navy-perforated",
    name: "Perforated Leather Backpack",
    category: "bags",
    subcategory: "backpacks",
    shortDescription:
      "Navy and brown perforated leather with a silhouette that goes from office to weekend without skipping a beat.",
    longDescription:
      "The Perforated Leather Backpack is the most versatile piece in our bag collection. The perforated panel running down the front pocket adds visual texture and a breath of lightness that stops the backpack from feeling heavy before you have even loaded it. The navy and brown combination is unusual and intentional - two colours that should not work together but somehow do. Two main compartments handle your laptop and daily essentials. The padded shoulder straps are wide enough to wear comfortably over a formal shirt without leaving marks. Made for the professional who refuses to carry a boring bag.",
    materialsAndCare:
      "Body: Full-grain perforated leather (navy and brown). Lining: Cotton canvas. Hardware: Antique brass zips. Padded laptop sleeve (fits up to 15 inches). Padded shoulder straps. Care: Wipe with damp cloth. Condition regularly.",
    dimensions:
      "32cm x 42cm x 14cm (W x H x D). Laptop compartment: fits up to 15 inches. Weight: approx. 1.1kg.",
    price: 9200,
    leatherType: "Perforated Full Grain",
    colors: [{ name: "Navy and Brown", hex: "#1b3a5c" }],
    images: [PH_PORTRAIT, PH_SIDE, PH_DETAIL, PH_LIFESTYLE, PH_FLATLAY],
    status: "available-on-order",
    tags: ["new"],
    featured: false,
  },
  {
    slug: "weekender-dark-espresso",
    name: "Weekender Duffel - Dark Espresso",
    category: "bags",
    subcategory: "weekenders",
    shortDescription:
      "Dark espresso leather with brass hardware. Pack for two nights without compromising on how you arrive.",
    longDescription:
      "The Weekender Duffel in Dark Espresso is the bag you pack the night before and feel good about the next morning. The dark espresso leather has the depth of colour that comes only from full-grain hides dyed all the way through - no surface coatings that crack at the fold points. The wide-mouth opening lets you pack and find everything without rooting around in the dark. Two exterior pockets hold the things you need fast. The antique brass hardware keeps its finish through years of travel. Carry it by the top handles or across the body on the adjustable strap. Either way, you arrive looking like you meant it.",
    materialsAndCare:
      "Body: Full-grain leather (dark espresso). Lining: Waxed cotton canvas. Hardware: Antique brass. Detachable and adjustable shoulder strap. Care: Condition monthly. Wipe exterior with damp cloth. Stuff with tissue when storing to maintain shape.",
    dimensions:
      "52cm x 30cm x 25cm (W x H x D). Capacity: approx. 40L. Weight: approx. 1.4kg.",
    price: 14500,
    leatherType: "Full Grain",
    colors: [{ name: "Dark Espresso", hex: "#2c1810" }],
    images: [PH_PORTRAIT, PH_SIDE, PH_DETAIL, PH_LIFESTYLE, PH_FLATLAY],
    status: "available-on-order",
    tags: ["limited"],
    featured: true,
  },

  // ACCESSORIES
  {
    slug: "leather-watch-roll",
    name: "Leather Watch Roll",
    category: "accessories",
    subcategory: "watch-rolls",
    shortDescription:
      "Three-watch capacity, full-grain leather exterior, suede-lined slots. Your watches deserve better than a drawer.",
    longDescription:
      "The Leather Watch Roll is for the person who cares about their watches enough to protect them properly. Three individual suede-lined slots hold each watch separately, preventing scratches between crowns and bezels. The roll closes with a leather tie - no metal clasps, no zips that catch. The exterior is full-grain leather that gets better looking with every trip. Lay it flat in your luggage or stand it upright on your dresser; it works either way. This is the kind of accessory you notice when it is missing.",
    materialsAndCare:
      "Exterior: Full-grain leather. Interior: Suede lining. Closure: Leather tie. Holds 3 watches. Care: Condition exterior occasionally. Keep interior dry.",
    dimensions: "Rolled: 12cm diameter x 18cm length. Unrolled: 35cm x 20cm.",
    price: 3500,
    leatherType: "Full Grain with Suede Lining",
    colors: [
      { name: "Deep Brown", hex: "#5c3317" },
      { name: "Midnight Black", hex: "#1a1a1a" },
    ],
    images: [PH_PORTRAIT, PH_SIDE, PH_DETAIL, PH_LIFESTYLE, PH_FLATLAY],
    status: "available-on-order",
    tags: ["new", "featured"],
    featured: true,
  },
  {
    slug: "leather-keychain-tassle",
    name: "Leather Tassel Keychain",
    category: "accessories",
    subcategory: "keychains",
    shortDescription:
      "Genuine leather tassel on a brass key ring. The small detail that makes your keys feel like they belong to someone who cares.",
    longDescription:
      "A keychain should not be an afterthought. The Leather Tassel Keychain is a small, deliberate piece - a hand-cut leather tassel attached to a solid brass key ring. The leather is the same quality as our bags and footwear; we did not use offcuts. The tassel softens over time, the brass ring develops a warm patina. It is the kind of thing you hand to someone to hold and they pause for a second before handing it back. Available in multiple colours to match your bag or contrast with it.",
    materialsAndCare:
      "Leather: Full-grain. Hardware: Solid brass key ring. Care: No special care required. Leather will naturally soften and darken with handling.",
    dimensions: "Overall length: approx. 12cm. Tassel length: 8cm.",
    price: 650,
    leatherType: "Full Grain",
    colors: [
      { name: "Deep Brown", hex: "#5c3317" },
      { name: "Cognac", hex: "#9b5523" },
      { name: "Midnight Black", hex: "#1a1a1a" },
    ],
    images: [PH_PORTRAIT, PH_SIDE, PH_DETAIL, PH_LIFESTYLE, PH_FLATLAY],
    status: "in-stock",
    tags: ["new"],
    featured: false,
  },
];

// Category metadata
export const categories: CategoryMeta[] = [
  {
    slug: "footwear",
    label: "Footwear",
    description:
      "Handcrafted leather sandals, slides, and slippers designed for the Indian climate and built to last for years.",
    heroImage: "/images/placeholder/category-footwear.jpg",
    subcategories: [
      { slug: "slides", label: "Slides" },
      { slug: "sandals", label: "Sandals" },
      { slug: "slippers", label: "Slippers" },
    ],
  },
  {
    slug: "bags",
    label: "Bags",
    description:
      "Full-grain leather briefcases, backpacks, and weekenders. Bags that go the distance - on your commute and beyond.",
    heroImage: "/images/placeholder/category-bags.jpg",
    subcategories: [
      { slug: "briefcases", label: "Briefcases" },
      { slug: "backpacks", label: "Backpacks" },
      { slug: "weekenders", label: "Weekenders" },
    ],
  },
  {
    slug: "accessories",
    label: "Accessories",
    description:
      "Leather accessories that complete the picture - watch rolls, keychains, and more.",
    heroImage: "/images/placeholder/category-accessories.jpg",
    subcategories: [
      { slug: "watch-rolls", label: "Watch Rolls" },
      { slug: "keychains", label: "Keychains" },
    ],
  },
];

// Helpers

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(
  category: string,
  options?: {
    subcategory?: string;
    color?: string;
    sort?: "featured" | "price-asc" | "price-desc" | "new";
  }
): Product[] {
  let result = products.filter((p) => p.category === category);
  if (options?.subcategory) {
    result = result.filter((p) => p.subcategory === options.subcategory);
  }
  if (options?.color) {
    const colorLower = options.color.toLowerCase();
    result = result.filter((p) =>
      p.colors.some((c) => c.name.toLowerCase().includes(colorLower))
    );
  }
  switch (options?.sort) {
    case "price-asc":
      result = [...result].sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result = [...result].sort((a, b) => b.price - a.price);
      break;
    case "new":
      result = [...result].sort((a) => (a.tags.includes("new") ? -1 : 1));
      break;
    default:
      result = [...result].sort((a) => (a.featured ? -1 : 1));
  }
  return result;
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );
  const others = products.filter(
    (p) => p.category !== product.category && p.slug !== product.slug
  );
  return [...sameCategory, ...others].slice(0, count);
}

export function getFeaturedProducts(count = 4): Product[] {
  return products
    .filter((p) => p.featured || p.tags.includes("new"))
    .slice(0, count);
}

export function formatPrice(price: number): string {
  return "\u20B9" + price.toLocaleString("en-IN");
}
