import type { BlogPost, GalleryItem, Kitten, Product } from "@/types";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Kittens", href: "/available-kittens" },
  { label: "Foods", href: "/foods" },
  { label: "Accessories", href: "/accessories" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "14+", label: "Years of breeding excellence" },
  { value: "98%", label: "Health & vaccination compliance" },
  { value: "24/7", label: "Whisper-only concierge support" },
];

export const featuredKittens: Kitten[] = [
  {
    id: "luna",
    name: "Luna Velvet",
    breed: "Persian Chinchilla",
    gender: "Female",
    age: "4 months",
    color: "Silver Blue",
    vaccinationStatus: "Full vaccine series",
    price: "$3,800",
    status: "Available",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80",
    accent: "Rose Gold",
    slug: "luna-velvet",
    description: "Elegant and serene, Luna is the flagship kitten of our winter collection.",
    location: "Dubai, UAE",
  },
  {
    id: "milo",
    name: "Milo Aurelius",
    breed: "Persian Golden",
    gender: "Male",
    age: "6 months",
    color: "Cream Puff",
    vaccinationStatus: "Dewormed & microchipped",
    price: "$3,200",
    status: "Reserved",
    image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=900&q=80",
    accent: "Champagne",
    slug: "milo-aurelius",
    description: "A calm companion with a velvet coat and regal posture.",
    location: "Abu Dhabi, UAE",
  },
];

export const kittens: Kitten[] = [
  ...featuredKittens,
  {
    id: "princess",
    name: "Princess Elara",
    breed: "Persian Blue",
    gender: "Female",
    age: "5 months",
    color: "Blue Smoke",
    vaccinationStatus: "Health certified",
    price: "$4,100",
    status: "Available",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=900&q=80",
    accent: "Pearl",
    slug: "princess-elara",
    description: "A graceful kitten with a plush coat and excellent temper.",
    location: "Sharjah, UAE",
  },
  {
    id: "jade",
    name: "Jade Obsidian",
    breed: "Persian Black",
    gender: "Male",
    age: "7 months",
    color: "Jet Black",
    vaccinationStatus: "Vaccinated",
    price: "$2,900",
    status: "Sold",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=80",
    accent: "Midnight",
    slug: "jade-obsidian",
    description: "Striking black coat and an easygoing personality.",
    location: "Riyadh, KSA",
  },
];

export const foodItems: Product[] = [
  {
    id: "royal-canin",
    name: "Royal Canin Persian",
    category: "Dry Food",
    price: "$68",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
    tag: "Best Seller",
    description: "Tailored nutrition for dense coats and sensitive digestion.",
  },
  {
    id: "wet-pouch",
    name: "Silk Pate Pouches",
    category: "Wet Food",
    price: "$24",
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=800&q=80",
    tag: "New",
    description: "Tender protein selection with premium broth and herbs.",
  },
];

export const accessoryItems: Product[] = [
  {
    id: "velvet-bed",
    name: "Velvet Ottoman Bed",
    category: "Beds",
    price: "$145",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
    tag: "Luxury",
    description: "Plush comfort designed for Persian royalty.",
  },
  {
    id: "silver-brush",
    name: "Silver Brush Set",
    category: "Brushes",
    price: "$39",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    tag: "Editors' Pick",
    description: "Gentle tools for daily grooming rituals.",
  },
];

export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "Sunlit nursery", type: "Photo", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80" },
  { id: "g2", title: "Playtime reel", type: "Video", image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=900&q=80" },
  { id: "g3", title: "Grooming ritual", type: "Photo", image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=900&q=80" },
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "How to prepare a Persian kitten for their first home",
    excerpt: "A guide to comfort, routine, and gentle integration into your household.",
    category: "Adoption",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=900&q=80",
    slug: "prepare-persian-kitten-for-first-home",
    content: "From selecting the right room to establishing a calm first week, thoughtful preparation improves trust and comfort for your new kitten.",
  },
  {
    id: "b2",
    title: "The secret behind a glossy Persian coat",
    excerpt: "Nutrition, grooming, and climate control all play a role in feline elegance.",
    category: "Care",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=900&q=80",
    slug: "secret-behind-glossy-persian-coat",
    content: "A healthy coat relies on a consistent routine, quality protein, and regular brushing to prevent mats and dryness.",
  },
];

export const testimonials = [
  { quote: "The team made the process feel calm, elegant, and deeply informed.", author: "Nadia & Omar" },
  { quote: "Our kitten arrived healthy, beautifully prepared, and full of confidence.", author: "Leila M." },
];

export const faqItems = [
  { question: "Do you ship kittens internationally?", answer: "Yes. We coordinate climate-safe travel and veterinary paperwork for selected destinations." },
  { question: "Can I reserve a kitten before pickup?", answer: "Absolutely. We offer secure reservations with a refundable deposit and transparent timelines." },
];

export const contactDetails = {
  email: "hello@luzihouse.com",
  phone: "+971 50 123 4567",
  whatsapp: "+971 50 123 4567",
};
