"use client";

import { faqItems } from "@/lib/site-content";
import { SectionHeading } from "@/components/section-heading";
import { useContacts } from "@/hooks/use-site-data";

export default function ContactPage() {
  const contacts = useContacts();

  return (
    <div className="section-shell space-y-10">
      <SectionHeading eyebrow="Contact" title="Reach our concierge team" description="We welcome questions about reservations, health records, and availability updates." />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-card p-8">
          <h3 className="text-2xl font-semibold text-[color:var(--text)]">Direct contact</h3>
          <ul className="mt-6 space-y-3 text-lg text-[color:var(--muted)]">
            <li>Email: {contacts.email}</li>
            <li>Phone: {contacts.phone}</li>
            <li>WhatsApp: {contacts.whatsapp}</li>
          </ul>
        </div>
        <div className="surface-card p-8">
          <h3 className="text-2xl font-semibold text-[color:var(--text)]">Frequently asked questions</h3>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-[1.5rem] border border-[color:var(--border)] p-4">
                <p className="font-semibold text-[color:var(--text)]">{item.question}</p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
