import { create } from "zustand";

interface UIState {
  sidebarOpen: boolean;
  activeOutletId: string | null;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setActiveOutletId: (outletId: string | null) => void;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  activeOutletId: null,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setActiveOutletId: (outletId) => set({ activeOutletId: outletId }),
}));
