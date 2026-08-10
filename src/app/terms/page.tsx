import { SectionHeading } from "@/components/section-heading";

export default function TermsPage() {
  return (
    <div className="section-shell">
      <SectionHeading eyebrow="Terms" title="Our service terms" description="Please review these terms before placing a reserved adoption request." />
      <div className="surface-card mt-10 p-8 text-lg leading-8 text-[color:var(--muted)]">
        <p>Reservations are subject to availability and confirmation by management. A deposit secures a placement request while final purchase terms are reviewed with the client and completed through our concierge team.</p>
      </div>
    </div>
  );
}
