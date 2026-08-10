import Link from "next/link";
import type { Kitten } from "@/types";

interface KittenCardProps {
  kitten: Kitten;
}

export function KittenCard({ kitten }: KittenCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="relative h-60 w-full overflow-hidden">
        <img src={kitten.image} alt={kitten.name} className="h-full w-full object-cover" />
        <span className="absolute left-4 top-4 rounded-full bg-[color:var(--surface)]/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--text)]">
          {kitten.status}
        </span>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-[color:var(--text)]">{kitten.name}</h3>
            <p className="text-sm text-[color:var(--muted)]">{kitten.breed}</p>
          </div>
          <span className="rounded-full bg-[color:var(--accent)]/12 px-3 py-1 text-sm font-semibold text-[color:var(--accent)]">
            {kitten.price}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-[color:var(--muted)]">
          <div><span className="font-semibold text-[color:var(--text)]">Gender:</span> {kitten.gender}</div>
          <div><span className="font-semibold text-[color:var(--text)]">Age:</span> {kitten.age}</div>
          <div><span className="font-semibold text-[color:var(--text)]">Color:</span> {kitten.color}</div>
          <div><span className="font-semibold text-[color:var(--text)]">Health:</span> {kitten.vaccinationStatus}</div>
        </div>
        <p className="text-sm leading-6 text-[color:var(--muted)]">{kitten.description}</p>
        <div className="flex items-center justify-between">
          <Link href={`/kitten/${kitten.slug}`} className="rounded-full bg-[color:var(--text)] px-4 py-2 text-sm font-semibold text-[color:var(--background)] transition hover:opacity-90">
            Reserve now
          </Link>
          <span className="text-sm text-[color:var(--muted)]">{kitten.location}</span>
        </div>
      </div>
    </article>
  );
}
