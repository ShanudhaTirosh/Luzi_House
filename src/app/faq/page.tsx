import { faqItems } from "@/lib/site-content";
import { SectionHeading } from "@/components/section-heading";

export default function FaqPage() {
  return (
    <div className="section-shell">
      <SectionHeading eyebrow="FAQ" title="Frequently asked questions" description="Everything you need to know before placing a reservation." />
      <div className="mt-10 space-y-4">
        {faqItems.map((item) => (
          <div key={item.question} className="surface-card p-6">
            <h3 className="text-xl font-semibold text-[color:var(--text)]">{item.question}</h3>
            <p className="mt-3 text-lg leading-8 text-[color:var(--muted)]">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
