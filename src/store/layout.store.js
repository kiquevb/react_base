import { create } from "zustand";

export const useLayoutStore = create((set) => ({
  isNavbarOpen: false,

  toggle: () => set((state) => ({ isNavbarOpen: !state.isNavbarOpen })),
  close: () => set(() => ({ isNavbarOpen: false })),
}));
