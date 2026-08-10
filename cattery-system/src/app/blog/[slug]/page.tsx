import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/site-content";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="section-shell">
      <div className="surface-card overflow-hidden">
        <img src={post.image} alt={post.title} className="h-72 w-full object-cover" />
        <div className="space-y-6 p-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">{post.category}</p>
            <h1 className="text-4xl font-semibold text-[color:var(--text)]">{post.title}</h1>
            <p className="text-sm text-[color:var(--muted)]">{post.readTime}</p>
          </div>
          <p className="text-lg leading-8 text-[color:var(--muted)]">{post.content}</p>
        </div>
      </div>
    </div>
  );
}
