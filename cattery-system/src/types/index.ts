export type KittenStatus = "Available" | "Reserved" | "Sold";

export interface Kitten {
  id: string;
  name: string;
  breed: string;
  gender: "Female" | "Male";
  age: string;
  color: string;
  vaccinationStatus: string;
  price: string;
  status: KittenStatus;
  image: string;
  accent: string;
  slug: string;
  description: string;
  location: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  tag: string;
  description: string;
  quantity?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
  content: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  type: "Photo" | "Video";
  image: string;
}

export interface ContactDetails {
  email: string;
  phone: string;
  whatsapp: string;
}
