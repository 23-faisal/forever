import { create } from "zustand";

const useSearchStore = create((set) => ({
  search: "",
  showSearch: false,
  setSearch: (value) => set({ search: value }),
  toggleShowSearch: () => set((state) => ({ showSearch: !state.showSearch })),
}));

export default useSearchStore;
