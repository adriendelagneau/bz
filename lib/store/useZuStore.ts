import { create } from "zustand";

// Store for mesh readiness
interface MeshState {
  ready: boolean;
  isReady: () => void;
}

export const useMeshStore = create<MeshState>((set) => ({
  ready: false,
  isReady: () => set({ ready: true }),
}));

// Store for bubble animation control
interface BubbleState {
  isPlaying: boolean;
  togglePlay: () => void;
}

export const useBubbleStore = create<BubbleState>((set) => ({
  isPlaying: false, // Default to playing
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));



interface MenuState {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  isMenuOpen: false,
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));


interface HeaderState {
  introComplete: boolean;
  setIntroComplete: (v: boolean) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  introComplete: false,
  setIntroComplete: (v) => set({ introComplete: v }),
}));
