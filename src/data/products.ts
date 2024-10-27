// Tshirts
import img1 from "../imgs/IMG-20241026-WA0009.jpg";
import img2 from "../imgs/IMG-20241026-WA0010.jpg";
import img3 from "../imgs/IMG-20241026-WA0011.jpg";
import img4 from "../imgs/IMG-20241026-WA0012.jpg";
import img5 from "../imgs/IMG-20241026-WA0013.jpg";
import img6 from "../imgs/IMG-20241026-WA0014.jpg";
import img7 from "../imgs/IMG-20241026-WA0015.jpg";
import img8 from "../imgs/IMG-20241026-WA0016.jpg";
import img9 from "../imgs/IMG-20241026-WA0017.jpg";
import img10 from "../imgs/IMG-20241026-WA0018.jpg";
// Shorts y pants
import img85 from "../imgs/IMG-20241026-WA0085.jpg";
import img86 from "../imgs/IMG-20241026-WA0086.jpg";
import img87 from "../imgs/IMG-20241026-WA0087.jpg";
import img91 from "../imgs/IMG-20241026-WA0091.jpg";
import img92 from "../imgs/IMG-20241026-WA0092.jpg";
import img93 from "../imgs/IMG-20241026-WA0093.jpg";

export const products = {
  tshirts: [
    {
      id: 1,
      name: "Classic Oversized Tee",
      brand: "Joker Brand CR",
      image: img1,
      description: "A comfortable oversized tee perfect for casual wear.",
      gallery: [
        { image: img1, name: "Front View", description: "Front view of the tee", price: 12900 },
        { image: img2, name: "Back View", description: "Back view of the tee", price: 12900 },
        { image: img3, name: "Side View", description: "Side view of the tee", price: 12900 },
      ],
    },
    {
      id: 2,
      name: "Urban Chaos Tee",
      brand: "Joker Brand CR",
      image: img4,
      description: "Bold style and oversized fit.",
      gallery: [
        { image: img4, name: "Front View", description: "Front view of the tee", price: 13900 },
        { image: img5, name: "Back View", description: "Back view of the tee", price: 13900 },
        { image: img6, name: "Detail View", description: "Detailed view of the tee", price: 13900 },
      ],
    },
    {
      id: 3,
      name: "Streetwear Classic",
      brand: "UrbanRebel",
      image: img7,
      description: "For those who love the urban street look.",
      gallery: [
        { image: img7, name: "Front View", description: "Front view of the classic", price: 14900 },
        { image: img8, name: "Back View", description: "Back view of the classic", price: 14900 },
        { image: img9, name: "Side View", description: "Side view of the classic", price: 14900 },
      ],
    },
    {
      id: 4,
      name: "Nightlife Tee",
      brand: "StreetKings",
      image: img9,
      description: "Perfect for a night out in the city.",
      gallery: [
        { image: img9, name: "Front View", description: "Front view of the tee", price: 15900 },
        { image: img10, name: "Back View", description: "Back view of the tee", price: 15900 },
        { image: img1, name: "Detail View", description: "Detailed view of the tee", price: 15900 },
      ],
    },
  ],
  pants: [
    {
      id: 5,
      name: "Cargo Pants",
      brand: "UrbanStyle",
      image: img85,
      description: "Stylish and comfortable cargo pants.",
      gallery: [
        { image: img85, name: "Front View", description: "Front view of the pants", price: 17900 },
        { image: img86, name: "Side View", description: "Side view of the pants", price: 17900 },
        { image: img87, name: "Detail View", description: "Detailed view of the pants", price: 17900 },
      ],
    },
    {
      id: 6,
      name: "Street Style Pants",
      brand: "UrbanRebel",
      image: img87,
      description: "Perfect for an urban and functional style.",
      gallery: [
        { image: img87, name: "Front View", description: "Front view of the pants", price: 18900 },
        { image: img9, name: "Back View", description: "Back view of the pants", price: 18900 },
        { image: img1, name: "Detail View", description: "Detailed view of the pants", price: 18900 },
      ],
    },
    {
      id: 7,
      name: "Slim Fit Jeans",
      brand: "CityGear",
      image: img3,
      description: "Comfortable jeans for everyday wear.",
      gallery: [
        { image: img3, name: "Front View", description: "Front view of the jeans", price: 19900 },
        { image: img5, name: "Side View", description: "Side view of the jeans", price: 19900 },
        { image: img6, name: "Detail View", description: "Detailed view of the jeans", price: 19900 },
      ],
    },
    {
      id: 8,
      name: "Chino Pants",
      brand: "UrbanStyle",
      image: img4,
      description: "Smart casual pants for a modern look.",
      gallery: [
        { image: img4, name: "Front View", description: "Front view of the chinos", price: 18900 },
        { image: img2, name: "Side View", description: "Side view of the chinos", price: 18900 },
        { image: img8, name: "Detail View", description: "Detailed view of the chinos", price: 18900 },
      ],
    },
  ],
  shorts: [
    {
      id: 9,
      name: "Summer Shorts",
      brand: "BeachWear",
      image: img91,
      description: "Perfect shorts for the summer.",
      gallery: [
        { image: img91, name: "Front View", description: "Front view of the shorts", price: 9900 },
        { image: img92, name: "Back View", description: "Back view of the shorts", price: 9900 },
        { image: img93, name: "Side View", description: "Side view of the shorts", price: 9900 },
      ],
    },
    {
      id: 10,
      name: "Urban Shorts",
      brand: "BeachWear",
      image: img93,
      description: "Stylish shorts for a casual day.",
      gallery: [
        { image: img93, name: "Side View", description: "Side view of the shorts", price: 9900 },
        { image: img1, name: "Front View", description: "Front view of the shorts", price: 9900 },
        { image: img2, name: "Back View", description: "Back view of the shorts", price: 9900 },
      ],
    },
    {
      id: 11,
      name: "Athletic Shorts",
      brand: "FitFlex",
      image: img5,
      description: "Lightweight shorts for active wear.",
      gallery: [
        { image: img5, name: "Front View", description: "Front view of the shorts", price: 10900 },
        { image: img6, name: "Back View", description: "Back view of the shorts", price: 10900 },
        { image: img4, name: "Detail View", description: "Detailed view of the shorts", price: 10900 },
      ],
    },
    {
      id: 12,
      name: "Denim Shorts",
      brand: "Joker Brand CR",
      image: img7,
      description: "Trendy denim shorts for a relaxed look.",
      gallery: [
        { image: img7, name: "Front View", description: "Front view of the shorts", price: 12900 },
        { image: img8, name: "Side View", description: "Side view of the shorts", price: 12900 },
        { image: img9, name: "Detail View", description: "Detailed view of the shorts", price: 12900 },
      ],
    },
  ],
  socks: [
    {
      id: 13,
      name: "Cozy Socks",
      brand: "Joker Brand CR",
      image: img2,
      description: "Warm and cozy socks for winter.",
      gallery: [
        { image: img2, name: "Front View", description: "Front view of the socks", price: 5900 },
        { image: img3, name: "Side View", description: "Side view of the socks", price: 5900 },
        { image: img4, name: "Detail View", description: "Detailed view of the socks", price: 5900 },
      ],
    },
    {
      id: 14,
      name: "Athletic Socks",
      brand: "UrbanStyle",
      image: img4,
      description: "Breathable and perfect for sports.",
      gallery: [
        { image: img4, name: "Front View", description: "Front view of the socks", price: 6900 },
        { image: img5, name: "Back View", description: "Back view of the socks", price: 6900 },
        { image: img6, name: "Detail View", description: "Detailed view of the socks", price: 6900 },
      ],
    },
    {
      id: 15,
      name: "Patterned Socks",
      brand: "TrendyWear",
      image: img6,
      description: "Fun patterns to brighten your day.",
      gallery: [
        { image: img6, name: "Front View", description: "Front view of the socks", price: 6500 },
        { image: img7, name: "Side View", description: "Side view of the socks", price: 6500 },
        { image: img1, name: "Detail View", description: "Detailed view of the socks", price: 6500 },
      ],
    },
    {
      id: 16,
      name: "Striped Socks",
      brand: "Joker Brand CR",
      image: img8,
      description: "Classic stripes for a unique style.",
      gallery: [
        { image: img8, name: "Front View", description: "Front view of the socks", price: 7000 },
        { image: img1, name: "Side View", description: "Side view of the socks", price: 7000 },
        { image: img2, name: "Detail View", description: "Detailed view of the socks", price: 7000 },
      ],
    },
  ],
};