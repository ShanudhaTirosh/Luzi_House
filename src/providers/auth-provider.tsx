"use client";

import { createContext, useContext, useEffect, useState } from "react";

type UserRole = "admin" | "customer";

interface User {
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  ready: boolean;
  login: (email: string, role: UserRole) => void;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = typeof window === "undefined" ? null : localStorage.getItem("luzi_user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        setUser(null);
      }
    }
    setReady(true);
  }, []);

  const login = (email: string, role: UserRole) => {
    const nextUser = { email, role };
    setUser(nextUser);
    localStorage.setItem("luzi_user", JSON.stringify(nextUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("luzi_user");
  };

  return (
    <AuthContext.Provider value={{ user, ready, login, logout, isAdmin: user?.role === "admin" }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
