import { create } from 'zustand';
import templatesData from '@/assets/data/templates.json';

const useTemplatesStore = create((set, get) => ({
  templates: templatesData,
  search: '',
  selectedCategory: 'all',
  selectedIdx: null,
  copiedIdx: null,
  setSearch: (search) => set({ search }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedIdx: (idx) => set({ selectedIdx: idx }),
  setCopiedIdx: (idx) => set({ copiedIdx: idx }),
  getFilteredTemplates: () => {
    const { templates, search, selectedCategory } = get();
    return templates.filter((template) => {
      const matchesSearch =
        template.label.toLowerCase().includes(search.toLowerCase()) ||
        template.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === 'all' || template.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  },
  getCategories: () => {
    const { templates } = get();
    const categories = ['all', ...new Set(templates.map((t) => t.category))];
    return categories.map((category) => ({
      value: category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
    }));
  },
}));

export default useTemplatesStore;
