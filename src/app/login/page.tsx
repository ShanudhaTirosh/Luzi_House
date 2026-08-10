"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { SectionHeading } from "@/components/section-heading";
import { useAuth } from "@/providers/auth-provider";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"admin" | "customer">("customer");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please provide email and password.");
      return;
    }
    login(email, role);
    if (role === "admin") {
      router.push("/admin");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="section-shell flex items-center justify-center">
      <div className="surface-card w-full max-w-md p-8">
        <SectionHeading eyebrow="Member access" title="Welcome back" description="Sign in to access reservations, wishlist, and admin." />
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm font-semibold text-[color:var(--text)]">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@domain.com"
              className="mt-2 w-full rounded-lg border border-[color:var(--border)] px-3 py-2 bg-transparent"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-[color:var(--text)]">Password</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-lg border border-[color:var(--border)] px-3 py-2 bg-transparent"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-[color:var(--text)]">Role</span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as "admin" | "customer")}
              className="mt-2 w-full rounded-lg border border-[color:var(--border)] px-3 py-2 bg-transparent"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" className="inline-flex w-full justify-center rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white">Sign in</button>
        </form>
      </div>
    </div>
  );
}
