import { SectionHeading } from "@/components/section-heading";

export default function DashboardPage() {
  return (
    <div className="section-shell space-y-10">
      <SectionHeading eyebrow="Admin dashboard" title="Operational control center" description="A polished dashboard shell for breeding, inventory, reservations, and analytics." />
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { label: "Active reservations", value: "12" },
          { label: "Inventory items", value: "43" },
          { label: "Pending reviews", value: "7" },
        ].map((item) => (
          <div key={item.label} className="surface-card p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold text-[color:var(--text)]">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="surface-card p-8">
        <h3 className="text-2xl font-semibold text-[color:var(--text)]">Management modules</h3>
        <ul className="mt-6 grid gap-3 text-lg text-[color:var(--muted)] md:grid-cols-2">
          <li>• Kittens management</li>
          <li>• Product inventory</li>
          <li>• Orders and reservations</li>
          <li>• Blog and gallery publishing</li>
          <li>• Analytics and reports</li>
          <li>• User roles and permissions</li>
        </ul>
      </div>
    </div>
  );
}
