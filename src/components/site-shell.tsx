"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/lib/site-content";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/providers/auth-provider";
import { useContacts } from "@/hooks/use-site-data";

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  const { user, logout, isAdmin } = useAuth();
  const [open, setOpen] = useState(false);
  const contacts = useContacts();

  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--text)]">
      <header className="sticky top-0 z-40 border-b border-[color:var(--border)]/70 bg-[color:var(--background)]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]">
                <Image src="/logo.svg" alt="LUZI House logo" fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--accent)]">LUZI House</p>
                <p className="text-lg font-semibold text-[color:var(--text)]">Pet Shop</p>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[color:var(--accent)]">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[color:var(--muted)] hover:text-[color:var(--accent)]">📷</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[color:var(--muted)] hover:text-[color:var(--accent)]">📘</a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-[color:var(--muted)] hover:text-[color:var(--accent)]">🎵</a>
            </div>
            <ThemeToggle />
            {!user ? (
              <Link href="/login" className="hidden md:inline-flex rounded-full border border-[color:var(--border)] px-3 py-2 text-sm font-semibold transition hover:bg-[color:var(--accent)]/10">
                Login
              </Link>
            ) : (
              <button onClick={logout} className="hidden md:inline-flex rounded-full border border-[color:var(--border)] px-3 py-2 text-sm font-semibold transition hover:bg-[color:var(--accent)]/10">
                Logout
              </button>
            )}
            {isAdmin && (
              <Link href="/admin" className="hidden md:inline-flex rounded-full bg-[color:var(--accent)] px-3 py-2 text-sm font-semibold text-white transition hover:opacity-90">
                Admin
              </Link>
            )}

            <button
              className="md:hidden rounded-md p-2"
              aria-label="Open menu"
              onClick={() => setOpen((s) => !s)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-[color:var(--border)] bg-[color:var(--surface)]/95">
            <div className="flex flex-col gap-2 px-4 py-3">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="py-2 text-[color:var(--text)]" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[color:var(--muted)]">Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[color:var(--muted)]">Facebook</a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-[color:var(--muted)]">TikTok</a>
                {isAdmin && (
                  <Link href="/admin" className="text-[color:var(--accent)]">Admin panel</Link>
                )}
                {!user ? (
                  <Link href="/login" className="text-[color:var(--accent)]">Login</Link>
                ) : (
                  <button onClick={logout} className="text-[color:var(--accent)] text-left">Logout</button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)]/80">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--accent)]">LUZI House</p>
            <h3 className="mt-3 text-2xl font-semibold text-[color:var(--text)]">Premium Persian breeding, luxury care, and concierge service.</h3>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[color:var(--text)]">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
              {navigation.map((item) => (
                <li key={item.href}><Link href={item.href} className="transition hover:text-[color:var(--accent)]">{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[color:var(--text)]">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
              <li>Email: {contacts.email}</li>
              <li>Phone: {contacts.phone}</li>
              <li>WhatsApp: {contacts.whatsapp}</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[color:var(--muted)] hover:text-[color:var(--accent)]">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-[color:var(--muted)] hover:text-[color:var(--accent)]">Facebook</a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-[color:var(--muted)] hover:text-[color:var(--accent)]">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SiteShell;
