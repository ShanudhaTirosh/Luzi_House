export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  businessHours: string;
}

export interface AdminSettings {
  contacts: ContactInfo;
  socialLinks: SocialLink[];
  businessName: string;
  logo: string;
}

export const defaultContacts: ContactInfo = {
  email: "hello@luzihouse.com",
  phone: "+971 50 123 4567",
  whatsapp: "+971 50 123 4567",
  address: "Dubai, UAE",
  businessHours: "9 AM - 6 PM, 7 days a week",
};

export const defaultSocialLinks: SocialLink[] = [
  { name: "Facebook", url: "https://facebook.com/luzihouse", icon: "facebook" },
  { name: "Instagram", url: "https://instagram.com/luzihouse", icon: "instagram" },
  { name: "TikTok", url: "https://tiktok.com/@luzihouse", icon: "tiktok" },
  { name: "WhatsApp", url: "https://wa.me/971501234567", icon: "whatsapp" },
  { name: "Messenger", url: "https://m.me/luzihouse", icon: "messenger" },
];
