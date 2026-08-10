"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/providers/auth-provider";
import { contactDetails, kittens as defaultKittens, foodItems as defaultFoodItems, accessoryItems as defaultAccessoryItems } from "@/lib/site-content";
import type { Kitten, Product } from "@/types";

type Contact = { id: string; label: string; value: string };

type Tab = "contacts" | "kittens" | "inventory";

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export default function AdminPage() {
  const router = useRouter();
  const { user, isAdmin, ready } = useAuth();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [kittens, setKittens] = useState<Kitten[]>([]);
  const [items, setItems] = useState<Product[]>([]);
  const [tab, setTab] = useState<Tab>("contacts");

  if (!ready) {
    return <div className="section-shell">Loading admin...</div>;
  }

  useEffect(() => {
    if (!ready) return;
    if (!user) {
      router.push("/login");
      return;
    }
    if (!isAdmin) {
      router.push("/");
      return;
    }

    const storedContacts = localStorage.getItem("luzi_contacts");
    const storedKittens = localStorage.getItem("luzi_kittens");
    const storedItems = localStorage.getItem("luzi_items");

    setContacts(storedContacts ? JSON.parse(storedContacts) : [
      { id: uid(), label: "Email", value: contactDetails.email },
      { id: uid(), label: "Phone", value: contactDetails.phone },
      { id: uid(), label: "WhatsApp", value: contactDetails.whatsapp },
    ]);

    setKittens(storedKittens ? JSON.parse(storedKittens) : defaultKittens);
    setItems(storedItems ? JSON.parse(storedItems) : [...defaultFoodItems, ...defaultAccessoryItems]);
  }, [ready, user, isAdmin, router]);

  useEffect(() => {
    localStorage.setItem("luzi_contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    localStorage.setItem("luzi_kittens", JSON.stringify(kittens));
  }, [kittens]);

  useEffect(() => {
    localStorage.setItem("luzi_items", JSON.stringify(items));
  }, [items]);

  const addContact = () => setContacts((s) => [...s, { id: uid(), label: "Label", value: "Value" }]);
  const removeContact = (id: string) => setContacts((s) => s.filter((contact) => contact.id !== id));

  const addKitten = () =>
    setKittens((s) => [
      ...s,
      {
        id: uid(),
        name: "New Kitten",
        breed: "Persian",
        gender: "Female",
        age: "0 months",
        color: "Tortoiseshell",
        vaccinationStatus: "Pending",
        price: "$0",
        status: "Available",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80",
        accent: "Rose Gold",
        slug: `new-kitten-${Date.now()}`,
        description: "New kitten details can be updated here.",
        location: "Unknown",
      },
    ]);
  const removeKitten = (id: string) => setKittens((s) => s.filter((kitten) => kitten.id !== id));

  const addItem = () =>
    setItems((s) => [
      ...s,
      { id: uid(), name: "New Product", category: "Accessories", price: "$0", quantity: 0, image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80", tag: "New", description: "Edit this product description." },
    ]);
  const removeItem = (id: string) => setItems((s) => s.filter((item) => item.id !== id));

  return (
    <div className="section-shell">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--accent)]">Admin panel</p>
          <h1 className="mt-2 text-3xl font-semibold text-[color:var(--text)]">Inventory and contact management</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setTab("contacts")} className={`px-4 py-2 rounded-full ${tab === "contacts" ? "bg-[color:var(--accent)] text-white" : "border border-[color:var(--border)] text-[color:var(--text)]"}`}>
            Contacts
          </button>
          <button onClick={() => setTab("kittens")} className={`px-4 py-2 rounded-full ${tab === "kittens" ? "bg-[color:var(--accent)] text-white" : "border border-[color:var(--border)] text-[color:var(--text)]"}`}>
            Kittens
          </button>
          <button onClick={() => setTab("inventory")} className={`px-4 py-2 rounded-full ${tab === "inventory" ? "bg-[color:var(--accent)] text-white" : "border border-[color:var(--border)] text-[color:var(--text)]"}`}>
            Inventory
          </button>
        </div>
      </div>

      {tab === "contacts" && (
        <div className="mt-8 space-y-4">
          <div className="flex flex-wrap gap-3">
            <button onClick={addContact} className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-white">Add contact</button>
            <Link href="/contact" className="rounded-full border border-[color:var(--border)] px-4 py-2 text-[color:var(--text)]">View contact page</Link>
          </div>
          {contacts.length === 0 ? (
            <div className="surface-card p-4">No contacts configured yet.</div>
          ) : (
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div key={contact.id} className="surface-card p-4 grid gap-3 sm:grid-cols-[1fr_auto]">
                  <div className="grid gap-3">
                    <input value={contact.label} onChange={(e) => setContacts((s) => s.map((item) => (item.id === contact.id ? { ...item, label: e.target.value } : item)))} className="w-full rounded border border-[color:var(--border)] px-3 py-2 bg-[color:var(--surface)]" />
                    <input value={contact.value} onChange={(e) => setContacts((s) => s.map((item) => (item.id === contact.id ? { ...item, value: e.target.value } : item)))} className="w-full rounded border border-[color:var(--border)] px-3 py-2 bg-[color:var(--surface)]" />
                  </div>
                  <button onClick={() => removeContact(contact.id)} className="rounded-full border border-red-300 px-4 py-2 text-red-700">Delete</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === "kittens" && (
        <div className="mt-8 space-y-4">
          <div className="flex flex-wrap gap-3">
            <button onClick={addKitten} className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-white">Add kitten</button>
            <Link href="/available-kittens" className="rounded-full border border-[color:var(--border)] px-4 py-2 text-[color:var(--text)]">View kittens</Link>
          </div>
          <div className="space-y-4">
            {kittens.map((kitten) => (
              <div key={kitten.id} className="surface-card p-4 grid gap-3 sm:grid-cols-[1fr_auto]">
                <div className="grid gap-3 md:grid-cols-2">
                  <input value={kitten.name} onChange={(e) => setKittens((s) => s.map((item) => (item.id === kitten.id ? { ...item, name: e.target.value } : item)))} className="w-full rounded border border-[color:var(--border)] px-3 py-2 bg-[color:var(--surface)]" placeholder="Name" />
                  <input value={kitten.breed} onChange={(e) => setKittens((s) => s.map((item) => (item.id === kitten.id ? { ...item, breed: e.target.value } : item)))} className="w-full rounded border border-[color:var(--border)] px-3 py-2 bg-[color:var(--surface)]" placeholder="Breed" />
                  <input value={kitten.price} onChange={(e) => setKittens((s) => s.map((item) => (item.id === kitten.id ? { ...item, price: e.target.value } : item)))} className="w-full rounded border border-[color:var(--border)] px-3 py-2 bg-[color:var(--surface)]" placeholder="Price" />
                  <input value={kitten.status} onChange={(e) => setKittens((s) => s.map((item) => (item.id === kitten.id ? { ...item, status: e.target.value as any } : item)))} className="w-full rounded border border-[color:var(--border)] px-3 py-2 bg-[color:var(--surface)]" placeholder="Status" />
                </div>
                <button onClick={() => removeKitten(kitten.id)} className="rounded-full border border-red-300 px-4 py-2 text-red-700">Delete</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "inventory" && (
        <div className="mt-8 space-y-4">
          <div className="flex flex-wrap gap-3">
            <button onClick={addItem} className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-white">Add inventory item</button>
            <Link href="/foods" className="rounded-full border border-[color:var(--border)] px-4 py-2 text-[color:var(--text)]">View foods</Link>
            <Link href="/accessories" className="rounded-full border border-[color:var(--border)] px-4 py-2 text-[color:var(--text)]">View accessories</Link>
          </div>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="surface-card p-4 grid gap-3 sm:grid-cols-[1fr_auto]">
                <div className="grid gap-3 md:grid-cols-5">
                  <input value={item.name} onChange={(e) => setItems((s) => s.map((entry) => (entry.id === item.id ? { ...entry, name: e.target.value } : entry)))} className="w-full rounded border border-[color:var(--border)] px-3 py-2 bg-[color:var(--surface)]" placeholder="Name" />
                  <input value={item.category} onChange={(e) => setItems((s) => s.map((entry) => (entry.id === item.id ? { ...entry, category: e.target.value } : entry)))} className="w-full rounded border border-[color:var(--border)] px-3 py-2 bg-[color:var(--surface)]" placeholder="Category" />
                  <input value={item.price} onChange={(e) => setItems((s) => s.map((entry) => (entry.id === item.id ? { ...entry, price: e.target.value } : entry)))} className="w-full rounded border border-[color:var(--border)] px-3 py-2 bg-[color:var(--surface)]" placeholder="Price" />
                  <input type="number" value={item.quantity ?? 0} onChange={(e) => setItems((s) => s.map((entry) => (entry.id === item.id ? { ...entry, quantity: Number(e.target.value) } : entry)))} className="w-full rounded border border-[color:var(--border)] px-3 py-2 bg-[color:var(--surface)]" placeholder="Qty" />
                  <input value={item.tag} onChange={(e) => setItems((s) => s.map((entry) => (entry.id === item.id ? { ...entry, tag: e.target.value } : entry)))} className="w-full rounded border border-[color:var(--border)] px-3 py-2 bg-[color:var(--surface)]" placeholder="Tag" />
                </div>
                <button onClick={() => removeItem(item.id)} className="rounded-full border border-red-300 px-4 py-2 text-red-700">Delete</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
