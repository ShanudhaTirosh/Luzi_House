"use client";

import { KittenCard } from "@/components/kitten-card";
import { SectionHeading } from "@/components/section-heading";
import { useKittens } from "@/hooks/use-site-data";

export default function AvailableKittensPage() {
  const kittens = useKittens();

  return (
    <div className="section-shell">
      <SectionHeading eyebrow="Available kittens" title="Browse the collection" description="Filter by temperament, color, and readiness to match your lifestyle." />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {kittens.map((kitten) => (
          <KittenCard key={kitten.id} kitten={kitten} />
        ))}
      </div>
    </div>
  );
}
