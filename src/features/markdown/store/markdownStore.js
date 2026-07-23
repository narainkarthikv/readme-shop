import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { STORAGE_KEYS, THEME_OPTIONS } from '@config/index';

const initialState = {
  markdown: '',
  userName: '',
  theme: THEME_OPTIONS.DEFAULT,
  iconNames: [],
};

const useMarkdownStore = create(
  persist(
    (set) => ({
      ...initialState,
      setMarkdown: (markdown) => set({ markdown }),
      setUserName: (userName) => set({ userName }),
      setTheme: (theme) => set({ theme }),
      insertSection: (content) =>
        set((state) => ({
          markdown: state.markdown
            ? `${state.markdown}\n\n${content}`
            : content,
        })),
      embedMarkdown: (content) =>
        set((state) => ({
          markdown: state.markdown ? `${state.markdown}\n${content}` : content,
        })),

      embedIcon: (iconName) =>
        set((state) => {
          const newIconNames = [...state.iconNames, iconName];
          const skilliconsUrl = `https://skillicons.dev/icons?i=${newIconNames.join(',')}`;
          const iconMarkdown = `\n<!-- ICONS -->\n<img src="${skilliconsUrl}" />\n<!-- END ICONS -->\n`;
          return {
            iconNames: newIconNames,
            markdown:
              state.markdown.replace(
                /<!-- ICONS -->\n.*\n<!-- END ICONS -->/s,
                ''
              ) + iconMarkdown,
          };
        }),
      removeIcon: (iconName) =>
        set((state) => {
          const newIconNames = state.iconNames.filter(
            (name) => name !== iconName
          );
          const skilliconsUrl =
            newIconNames.length > 0
              ? `https://skillicons.dev/icons?i=${newIconNames.join(',')}`
              : '';
          const iconMarkdown = skilliconsUrl
            ? `\n<!-- ICONS -->\n<img src="${skilliconsUrl}" />\n<!-- END ICONS -->\n`
            : '';
          return {
            iconNames: newIconNames,
            markdown:
              state.markdown.replace(
                /<!-- ICONS -->\n.*\n<!-- END ICONS -->/s,
                ''
              ) + iconMarkdown,
          };
        }),
      resetMarkdown: () => set({ markdown: '' }),
      resetDraft: () => set(initialState),
    }),
    {
      name: STORAGE_KEYS.MARKDOWN_DRAFT,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        markdown: state.markdown,
        userName: state.userName,
        theme: state.theme,
        iconNames: state.iconNames,
      }),
      version: 1,
    }
  )
);

export default useMarkdownStore;
