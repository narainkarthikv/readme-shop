import { create } from 'zustand';
import { THEME_OPTIONS } from '@/utils/config/constants';

const useMarkdownStore = create((set) => ({
  markdown: '',
  userName: '',
  theme: THEME_OPTIONS.DEFAULT,
  badgeLine: '',
  iconNames: [],
  setMarkdown: (markdown) => set({ markdown }),
  setUserName: (userName) => set({ userName }),
  setTheme: (theme) => set({ theme }),
  embedMarkdown: (content) => set((state) => ({
    markdown: state.markdown ? `${state.markdown}\n${content}` : content
  })),
  embedBadge: (content) => set((state) => ({
    badgeLine: content,
    markdown: state.markdown.replace(/<!-- BADGES -->\n.*\n<!-- END BADGES -->/s, '') + 
      `\n<!-- BADGES -->\n${content}\n<!-- END BADGES -->\n`
  })),
  embedIcon: (iconName) => set((state) => {
    const newIconNames = [...state.iconNames, iconName];
    const skilliconsUrl = `https://skillicons.dev/icons?i=${newIconNames.join(',')}`;
    const iconMarkdown = `\n<!-- ICONS -->\n<img src="${skilliconsUrl}" />\n<!-- END ICONS -->\n`;
    return {
      iconNames: newIconNames,
      markdown: state.markdown.replace(/<!-- ICONS -->\n.*\n<!-- END ICONS -->/s, '') + iconMarkdown
    };
  }),
  removeIcon: (iconName) => set((state) => {
    const newIconNames = state.iconNames.filter(name => name !== iconName);
    const skilliconsUrl = newIconNames.length > 0 ? 
      `https://skillicons.dev/icons?i=${newIconNames.join(',')}` : '';
    const iconMarkdown = skilliconsUrl ? 
      `\n<!-- ICONS -->\n<img src="${skilliconsUrl}" />\n<!-- END ICONS -->\n` : '';
    return {
      iconNames: newIconNames,
      markdown: state.markdown.replace(/<!-- ICONS -->\n.*\n<!-- END ICONS -->/s, '') + iconMarkdown
    };
  }),
  resetMarkdown: () => set({ markdown: '' })
}));

export default useMarkdownStore;
