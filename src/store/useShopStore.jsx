import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { STORAGE_KEYS } from '../config/constants';

const initialState = {
  iconSearchTerm: '',
  themeMode: 'light',
  loading: false,
  error: null,
};

export const useShopStore = create(
  persist(
    (set) => ({
      ...initialState,

      // Search terms
      setIconSearchTerm: (iconSearchTerm) => set({ iconSearchTerm }),

      // Theme
      setThemeMode: (themeMode) => set({ themeMode }),
      toggleTheme: () =>
        set((state) => ({
          themeMode: state.themeMode === 'light' ? 'dark' : 'light',
        })),

      // Reset
      resetStore: () => set(initialState),

      // Loading & Error states
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
    }),
    {
      name: STORAGE_KEYS.STORE,
      partialize: (state) => ({
        selectedBadges: state.selectedBadges,
        themeMode: state.themeMode,
      }),
    }
  )
);
