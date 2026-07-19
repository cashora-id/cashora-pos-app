import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserProfile {
  name: string;
  email: string;
  roles: string[];
}

interface UserState {
  user: UserProfile | null;
  activeTenantId: string | null;
  setUser: (user: UserProfile | null) => void;
  setActiveTenantId: (tenantId: string | null) => void;
  clearStore: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      activeTenantId: null,
      setUser: (user) => set({ user }),
      setActiveTenantId: (activeTenantId) => set({ activeTenantId }),
      clearStore: () => set({ user: null, activeTenantId: null }),
    }),
    {
      name: "cashora-user-store", // Persists state in localStorage
    }
  )
);
