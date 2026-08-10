import { SectionHeading } from "@/components/section-heading";

export default function PrivacyPage() {
  return (
    <div className="section-shell">
      <SectionHeading eyebrow="Privacy policy" title="How we protect your information" description="We handle customer preferences with care and confidentiality." />
      <div className="surface-card mt-10 p-8 text-lg leading-8 text-[color:var(--muted)]">
        <p>We collect only the information necessary for reservations, order support, and follow-up communications. Data is stored securely and never shared with third parties except where required for logistics or veterinary coordination.</p>
      </div>
    </div>
  );
}
