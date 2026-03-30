export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

export const products = [
  // -------- SOFAS --------
  {
    id: "p1",
    name: "Onyx Velvet Lounge",
    category: "Sofa",
    price: 85000,
    image: "/images/velvet_luxe_sofa_1774717044860.png",
    material: "Premium Velvet",
    description: "Experience unparalleled comfort with our signature Velvet Lounge, featuring plush cushions and an elegant silhouette in deep onyx.",
    tag: "Best Seller"
  },
  {
    id: "p2",
    name: "Milan Leather Sectional",
    category: "Sofa",
    price: 115000,
    image: "/images/sofa_leather_sectional_1774719835082.png",
    material: "Italian Leather",
    description: "A luxurious modern leather sectional designed for ultimate relaxation and sophisticated gatherings.",
    tag: "New"
  },
  {
    id: "p3",
    name: "Aalto Curved Modular",
    category: "Sofa",
    price: 92000,
    image: "/images/sofa_modular_velvet_1774719856046.png",
    material: "Cream Velvet",
    description: "Elevate your space with this curved modular masterpiece. Seamless, organic lines draped in soft cream velvet.",
    tag: null
  },
  {
    id: "p4",
    name: "Kyoto Linen Minimalist",
    category: "Sofa",
    price: 68000,
    image: "/images/sofa_linen_minimalist_1774719991679.png",
    material: "Natural Linen",
    description: "Japandi-inspired minimalism meets organic warmth. This sand-colored linen sofa anchors your room with quiet luxury.",
    tag: null
  },

  // -------- BEDS --------
  {
    id: "p5",
    name: "Nordic Ashwood Platform",
    category: "Beds",
    price: 72500,
    image: "/images/oakwood_king_bed_1774717066458.png",
    material: "Solid Ashwood",
    description: "A sanctuary of sleep. The Nordic Platform bed offers a beautifully crafted minimal headboard and sturdy construction.",
    tag: "Best Seller"
  },
  {
    id: "p6",
    name: "Lumina Floating Bed",
    category: "Beds",
    price: 85000,
    image: "/images/bed_floating_platform_1774719891368.png",
    material: "Walnut Wood",
    description: "Create an illusion of weightlessness with our floating walnut platform. Precision engineering meets modern design.",
    tag: "New"
  },
  {
    id: "p7",
    name: "Milan Walnut Canopy Bed",
    category: "Beds",
    price: 98000,
    image: "/images/bed_canopy_luxury_1774719936232.png",
    material: "Dark Oak",
    description: "A striking architectural statement. This modern four-poster canopy bed brings dramatic elegance to the master suite.",
    tag: null
  },
  {
    id: "p8",
    name: "Verona Upholstered King",
    category: "Beds",
    price: 65000,
    image: "/images/bed_upholstered_grey_1774720031965.png",
    material: "Textured Linen",
    description: "Fully upholstered in premium grey linen for a soft, inviting aesthetic that guarantees absolute nighttime serenity.",
    tag: null
  },

  // -------- CHAIRS --------
  {
    id: "p9",
    name: "Oslo Boucle Accent",
    category: "Chairs",
    price: 24000,
    image: "/images/nordic_lounge_chair_1774717083970.png",
    material: "Warm Boucle",
    description: "Sculptural perfection. The Oslo chair combines mid-century proportions with modern textural boucle.",
    tag: "Best Seller"
  },
  {
    id: "p10",
    name: "Aurelia Sculptural Lounge",
    category: "Chairs",
    price: 28500,
    image: "/images/chair_accent_boucle_1774719874492.png",
    material: "Premium Boucle",
    description: "A striking high-end accent chair featuring sweeping organic lines and unparalleled seating comfort.",
    tag: "New"
  },
  {
    id: "p11",
    name: "Cognac Dining Chair",
    category: "Chairs",
    price: 18000,
    image: "/images/chair_dining_leather_1774719954946.png",
    material: "Cognac Leather",
    description: "Sleek and sophisticated dining seating. Expertly tailored cognac leather resting on black steel legs.",
    tag: null
  },
  {
    id: "p12",
    name: "Eames-Inspired Leather Lounge",
    category: "Chairs",
    price: 29999,
    image: "/images/chair_lounge_leather_1774720053632.png",
    material: "Black Leather & Walnut",
    description: "A timeless mid-century aesthetic. This lounge chair and ottoman set provides unmatched ergonomic support.",
    tag: null
  },

  // -------- TABLES --------
  {
    id: "p13",
    name: "Aurelia Marble Coffee Table",
    category: "Tables",
    price: 24500,
    image: "/images/marble_top_coffee_table_1774717097993.png",
    material: "Genuine Marble",
    description: "A breathtaking centerpiece. The Aurelia features a pristine marble top resting on a subtle, elegant gold-accented frame.",
    tag: "Best Seller"
  },
  {
    id: "p14",
    name: "Natura Fluted Dining Table",
    category: "Tables",
    price: 48000,
    image: "/images/table_dining_marble_1774719908639.png",
    material: "Black Marble",
    description: "Host in ultimate luxury. A stunning grand black marble dining table supported by a distinct fluted pedestal base.",
    tag: "New"
  },
  {
    id: "p15",
    name: "Lumina Brass Nesting Tables",
    category: "Tables",
    price: 18500,
    image: "/images/table_coffee_brass_1774719972734.png",
    material: "Brushed Brass & Glass",
    description: "A sophisticated nesting set designed to inject a touch of cinematic luxe to any modern living arrangement.",
    tag: null
  },
  {
    id: "p16",
    name: "Verona Travertine Side Table",
    category: "Tables",
    price: 14000,
    image: "/images/table_side_sculptural_1774720007770.png",
    material: "Polished Travertine",
    description: "Carved from premium polished travertine stone, this sculptural side table doubles as functional art.",
    tag: null
  }
];
