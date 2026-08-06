import { create } from "zustand";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: "OWNER" | "MANAGER" | "CASHIER";
  businessId?: string;
  avatarUrl?: string;
}

interface AuthState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  token: string | null;
  setAuth: (user: UserProfile, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  token: null,
  setAuth: (user, token) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cashora_access_token", token);
    }
    set({ user, token, isAuthenticated: true });
  },
  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cashora_access_token");
      localStorage.removeItem("cashora_refresh_token");
    }
    set({ user: null, token: null, isAuthenticated: false });
  },
}));
