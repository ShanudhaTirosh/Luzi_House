import Image from "next/image";
import Link from "next/link";
import { featuredKittens, foodItems, galleryItems, stats, testimonials } from "@/lib/site-content";
import { KittenCard } from "@/components/kitten-card";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="section-shell relative hero-blob pb-24 pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/80 px-4 py-3 shadow-sm">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[color:var(--accent)]/20 bg-white">
                <Image src="/logo.svg" alt="LUZI House logo" fill className="object-cover" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--accent)]">LUZI House</p>
                <p className="text-sm font-semibold text-[color:var(--text)]">Luxury Persian pet concierge</p>
              </div>
            </div>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-[color:var(--text)] sm:text-6xl">
                Beautiful Persian kittens, premium care, and refined pet experiences.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                Discover a premium cattery management platform for breeding excellence, curated products, customer reservations, and elegant digital storytelling.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/available-kittens" className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                View available kittens
              </Link>
              <Link href="/blog" className="rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-semibold text-[color:var(--text)] transition hover:bg-[color:var(--accent)]/10">
                Read our journal
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface)]/70 p-4">
                  <p className="text-2xl font-semibold text-[color:var(--text)]">{stat.value}</p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="surface-card overflow-hidden p-6">
            <img src={featuredKittens[0].image} alt={featuredKittens[0].name} className="h-[420px] w-full rounded-[1.5rem] object-cover" />
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">Featured companion</p>
                <h2 className="text-2xl font-semibold text-[color:var(--text)]">{featuredKittens[0].name}</h2>
              </div>
              <div className="text-right">
                <p className="text-sm text-[color:var(--muted)]">Starting at</p>
                <p className="text-xl font-semibold text-[color:var(--text)]">{featuredKittens[0].price}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Curated selection" title="Luxury kittens ready for their next chapter" description="Each feline in our collection is carefully health-checked and raised with thoughtful socialization." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredKittens.map((kitten) => (
            <KittenCard key={kitten.id} kitten={kitten} />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Storefront" title="Premium foods and accessories" description="Support your Persian companion with products curated for beauty, comfort, and wellness." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {foodItems.map((item) => (
            <ProductCard key={item.id} product={item} href="/foods" />
          ))}
          {galleryItems.slice(0, 1).map((item) => (
            <div key={item.id} className="surface-card overflow-hidden p-4">
              <img src={item.image} alt={item.title} className="h-60 w-full rounded-[1.5rem] object-cover" />
              <div className="p-3">
                <h3 className="text-xl font-semibold text-[color:var(--text)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">Gentle grooming and stylish accessories for everyday luxury.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-card p-8">
            <SectionHeading eyebrow="Why clients return" title="Our promise is calm, luxury, and trust" description="From first inquiry to delivery day, every step is beautifully guided." />
            <ul className="mt-8 space-y-4 text-sm leading-7 text-[color:var(--muted)]">
              <li>• Concierge support for reservations and follow-up.</li>
              <li>• Transparent health records, vaccine history, and pedigree guidance.</li>
              <li>• Elegant logistics and safe transport planning.</li>
            </ul>
          </div>
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="surface-card p-8">
                <p className="text-lg leading-8 text-[color:var(--text)]">“{testimonial.quote}”</p>
                <p className="mt-4 font-semibold text-[color:var(--accent)]">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
