"use client";

import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { useFoodItems } from "@/hooks/use-site-data";

export default function FoodsPage() {
  const foodItems = useFoodItems();

  return (
    <div className="section-shell">
      <SectionHeading eyebrow="Nutrition" title="Premium food for Persian wellness" description="Each item is chosen for coat shine, digestion comfort, and daily vitality." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {foodItems.map((item) => (
          <ProductCard key={item.id} product={item} href="/foods" />
        ))}
      </div>
    </div>
  );
}
