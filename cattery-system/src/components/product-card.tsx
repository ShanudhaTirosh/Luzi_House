import Link from "next/link";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  href: string;
}

export function ProductCard({ product, href }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="relative h-48 w-full overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        <span className="absolute left-4 top-4 rounded-full bg-[color:var(--surface)]/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--text)]">
          {product.tag}
        </span>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">{product.category}</p>
            <h3 className="text-xl font-semibold text-[color:var(--text)]">{product.name}</h3>
          </div>
          <span className="text-lg font-semibold text-[color:var(--text)]">{product.price}</span>
        </div>
        <p className="text-sm leading-6 text-[color:var(--muted)]">{product.description}</p>
        <Link href={href} className="inline-flex rounded-full border border-[color:var(--border)] px-4 py-2 text-sm font-semibold text-[color:var(--text)] transition hover:bg-[color:var(--accent)]/10">
          Shop now
        </Link>
      </div>
    </article>
  );
}
