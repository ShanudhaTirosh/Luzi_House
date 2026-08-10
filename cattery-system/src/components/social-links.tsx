import Link from "next/link";
import type { SocialLink } from "@/types/admin";

const SOCIAL_ICONS: Record<string, string> = {
  facebook: "f",
  instagram: "📷",
  tiktok: "♪",
  whatsapp: "💬",
  messenger: "💬",
  twitter: "𝕏",
  linkedin: "in",
};

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export function SocialLinks({ links, className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          title={link.name}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--text)] transition hover:bg-[color:var(--accent)] hover:text-white"
        >
          <span className="text-xs font-semibold">{SOCIAL_ICONS[link.icon] || link.icon[0]}</span>
        </Link>
      ))}
    </div>
  );
}
