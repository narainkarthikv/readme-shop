import { create } from 'zustand';

export const useShopStore = create((set) => ({
  badgeSearchTerm: '',
  setBadgeSearchTerm: (badgeSearchTerm) => set({ badgeSearchTerm }),
  selectedBadges: [],
  setSelectedBadges: (selectedBadges) => set({ selectedBadges }),
  iconSearchTerm: '',
  setIconSearchTerm: (iconSearchTerm) => set({ iconSearchTerm }),
  themeMode: 'light',
  setThemeMode: (themeMode) => set({ themeMode }),
}));
