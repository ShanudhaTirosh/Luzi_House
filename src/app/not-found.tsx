import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-[60vh] items-center justify-center">
      <div className="surface-card max-w-xl p-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-[color:var(--text)]">Page not found</h1>
        <p className="mt-4 text-lg leading-8 text-[color:var(--muted)]">The page you were looking for may have moved or doesn’t exist.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white">
          Return home
        </Link>
      </div>
    </div>
  );
}
