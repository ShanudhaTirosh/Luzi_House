"use client";

import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { useAccessoryItems } from "@/hooks/use-site-data";

export default function AccessoriesPage() {
  const accessoryItems = useAccessoryItems();

  return (
    <div className="section-shell">
      <SectionHeading eyebrow="Accessories" title="Luxury essentials for daily comfort" description="Beds, brushes, and tactile play pieces designed for serene routines." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {accessoryItems.map((item) => (
          <ProductCard key={item.id} product={item} href="/accessories" />
        ))}
      </div>
    </div>
  );
}
