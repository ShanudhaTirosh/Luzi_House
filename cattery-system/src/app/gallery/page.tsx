import { galleryItems } from "@/lib/site-content";
import { SectionHeading } from "@/components/section-heading";

export default function GalleryPage() {
  return (
    <div className="section-shell">
      <SectionHeading eyebrow="Gallery" title="Moments from the cattery" description="A curated look at our nursery, grooming rituals, and playful companions." />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {galleryItems.map((item) => (
          <div key={item.id} className="surface-card overflow-hidden">
            <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
            <div className="p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">{item.type}</p>
              <h3 className="mt-3 text-xl font-semibold text-[color:var(--text)]">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
