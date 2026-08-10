"use client";

import { useEffect, useState } from "react";
import {
  contactDetails as defaultContactDetails,
  kittens as defaultKittens,
  foodItems as defaultFoodItems,
  accessoryItems as defaultAccessoryItems,
} from "@/lib/site-content";
import type { ContactDetails, Kitten, Product } from "@/types";

function loadJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function useContacts() {
  const [contacts, setContacts] = useState<ContactDetails>(defaultContactDetails);

  useEffect(() => {
    setContacts(loadJson("luzi_contact_details", defaultContactDetails));
  }, []);

  return contacts;
}

export function useKittens() {
  const [kittens, setKittens] = useState<Kitten[]>(defaultKittens);

  useEffect(() => {
    setKittens(loadJson("luzi_kittens", defaultKittens));
  }, []);

  return kittens;
}

export function useFoodItems() {
  const [items, setItems] = useState<Product[]>(defaultFoodItems);

  useEffect(() => {
    setItems(loadJson("luzi_food_items", defaultFoodItems));
  }, []);

  return items;
}

export function useAccessoryItems() {
  const [items, setItems] = useState<Product[]>(defaultAccessoryItems);

  useEffect(() => {
    setItems(loadJson("luzi_accessory_items", defaultAccessoryItems));
  }, []);

  return items;
}
