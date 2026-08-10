import Link from "next/link";
import { notFound } from "next/navigation";
import { kittens } from "@/lib/site-content";

interface KittenDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function KittenDetailPage({ params }: KittenDetailPageProps) {
  const { slug } = await params;
  const kitten = kittens.find((entry) => entry.slug === slug);

  if (!kitten) {
    notFound();
  }

  return (
    <div className="section-shell space-y-10">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="surface-card overflow-hidden p-5">
          <img src={kitten.image} alt={kitten.name} className="h-[420px] w-full rounded-[1.5rem] object-cover" />
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">{kitten.breed}</p>
            <h1 className="mt-3 text-4xl font-semibold text-[color:var(--text)]">{kitten.name}</h1>
            <p className="mt-4 text-lg leading-8 text-[color:var(--muted)]">{kitten.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface)]/70 p-4">
              <p className="text-sm text-[color:var(--muted)]">Gender</p>
              <p className="mt-1 font-semibold text-[color:var(--text)]">{kitten.gender}</p>
            </div>
            <div className="rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface)]/70 p-4">
              <p className="text-sm text-[color:var(--muted)]">Age</p>
              <p className="mt-1 font-semibold text-[color:var(--text)]">{kitten.age}</p>
            </div>
            <div className="rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface)]/70 p-4">
              <p className="text-sm text-[color:var(--muted)]">Color</p>
              <p className="mt-1 font-semibold text-[color:var(--text)]">{kitten.color}</p>
            </div>
            <div className="rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface)]/70 p-4">
              <p className="text-sm text-[color:var(--muted)]">Vaccination</p>
              <p className="mt-1 font-semibold text-[color:var(--text)]">{kitten.vaccinationStatus}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white">Reserve now</Link>
            <Link href="/available-kittens" className="rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-semibold text-[color:var(--text)]">Back to kittens</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
