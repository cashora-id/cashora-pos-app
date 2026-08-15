import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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

const defaultUser: UserProfile = {
  id: "owner-1",
  name: "Budi Santoso",
  email: "budi.santoso@cashoragroup.id",
  role: "OWNER",
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: defaultUser,
      isAuthenticated: true,
      token: "demo-access-token-jwt",
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
    }),
    {
      name: "cashora_auth_storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
