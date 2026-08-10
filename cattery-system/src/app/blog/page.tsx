import Link from "next/link";
import { blogPosts } from "@/lib/site-content";
import { SectionHeading } from "@/components/section-heading";

export default function BlogPage() {
  return (
    <div className="section-shell">
      <SectionHeading eyebrow="Journal" title="Thoughtful articles for Persian families" description="From grooming insights to first-home preparation, our stories support every stage of care." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.id} className="surface-card overflow-hidden">
            <img src={post.image} alt={post.title} className="h-56 w-full object-cover" />
            <div className="space-y-4 p-6">
              <div className="flex items-center gap-3 text-sm text-[color:var(--muted)]">
                <span className="rounded-full bg-[color:var(--accent)]/10 px-3 py-1 font-semibold text-[color:var(--accent)]">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-2xl font-semibold text-[color:var(--text)]">{post.title}</h3>
              <p className="text-sm leading-7 text-[color:var(--muted)]">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="inline-flex rounded-full border border-[color:var(--border)] px-4 py-2 text-sm font-semibold text-[color:var(--text)] transition hover:bg-[color:var(--accent)]/10">
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
