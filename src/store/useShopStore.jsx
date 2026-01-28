import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { STORAGE_KEYS, THEME_OPTIONS } from '@config/index';
import { logger } from '@utils/index';

/**
 * Initial state for the shop store
 */
const initialState = {
  iconSearchTerm: '',
  themeMode: THEME_OPTIONS.DEFAULT,
  loading: false,
  error: null,
  selectedBadges: [],
};

/**
 * Main application store using Zustand
 * Implements persistence and devtools for debugging
 */
export const useShopStore = create(
  persist(
    (set, get) => ({
      ...initialState,

      // Search operations
      setIconSearchTerm: (iconSearchTerm) => {
        if (typeof iconSearchTerm !== 'string') {
          logger.warn('iconSearchTerm must be a string');
          return;
        }
        set({ iconSearchTerm: iconSearchTerm.trim() });
      },

      clearIconSearchTerm: () => set({ iconSearchTerm: '' }),

      // Theme operations
      setThemeMode: (themeMode) => {
        const validModes = Object.values(THEME_OPTIONS);
        if (!validModes.includes(themeMode)) {
          logger.warn(`Invalid theme mode: ${themeMode}`);
          return;
        }
        set({ themeMode });
        logger.info('Theme changed to:', themeMode);
      },

      toggleTheme: () => {
        const { themeMode } = get();
        const newTheme =
          themeMode === THEME_OPTIONS.LIGHT
            ? THEME_OPTIONS.DARK
            : THEME_OPTIONS.LIGHT;
        set({ themeMode: newTheme });
        logger.info('Theme toggled to:', newTheme);
      },

      // Badge operations
      addBadge: (badge) => {
        const { selectedBadges } = get();
        if (!selectedBadges.find((b) => b.id === badge.id)) {
          set({ selectedBadges: [...selectedBadges, badge] });
        }
      },

      removeBadge: (badgeId) => {
        const { selectedBadges } = get();
        set({
          selectedBadges: selectedBadges.filter((b) => b.id !== badgeId),
        });
      },

      clearBadges: () => set({ selectedBadges: [] }),

      // Loading state
      setLoading: (loading) => {
        if (typeof loading !== 'boolean') {
          logger.warn('loading must be a boolean');
          return;
        }
        set({ loading });
      },

      // Error handling
      setError: (error) => {
        set({ error: error ? String(error) : null });
        if (error) {
          logger.error('Store error:', error);
        }
      },

      clearError: () => set({ error: null }),

      // Reset store
      resetStore: () => {
        set(initialState);
        logger.info('Store reset to initial state');
      },

      // Get current state (useful for debugging)
      getState: () => get(),
    }),
    {
      name: STORAGE_KEYS.STORE,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        themeMode: state.themeMode,
        selectedBadges: state.selectedBadges,
      }),
      version: 1,
      migrate: (persistedState, version) => {
        if (version === 0) {
          // Migration logic for future versions
          logger.info('Migrating store from version 0 to 1');
        }
        return persistedState;
      },
    }
  )
);

// Selectors for optimized re-renders
export const selectThemeMode = (state) => state.themeMode;
export const selectLoading = (state) => state.loading;
export const selectError = (state) => state.error;
export const selectIconSearchTerm = (state) => state.iconSearchTerm;
export const selectSelectedBadges = (state) => state.selectedBadges;
