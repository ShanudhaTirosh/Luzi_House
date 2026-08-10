import { SectionHeading } from "@/components/section-heading";

export default function AboutPage() {
  return (
    <div className="section-shell space-y-10">
      <SectionHeading eyebrow="About us" title="A luxury-first breeding home" description="We blend heritage Persian breeding standards with digitally modern operations and attentive customer care." />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="surface-card p-8">
          <h3 className="text-2xl font-semibold text-[color:var(--text)]">Crafted with intention</h3>
          <p className="mt-4 text-lg leading-8 text-[color:var(--muted)]">Every kitten is nurtured for calm temperaments, elegant presentation, and healthy development from the earliest stages.</p>
        </div>
        <div className="surface-card p-8">
          <h3 className="text-2xl font-semibold text-[color:var(--text)]">Designed for modern owners</h3>
          <p className="mt-4 text-lg leading-8 text-[color:var(--muted)]">Our operation combines veterinary care, premium nutrition guidance, and an intuitive client experience to create lasting confidence.</p>
        </div>
      </div>
    </div>
  );
}
