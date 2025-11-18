import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useMarkdownStore from '@/features/markdown/store/markdownStore';
import useTemplatesStore from '@/features/templates/store/templatesStore';
import useClipboard from './useClipboard';

export const useTemplates = () => {
  const navigate = useNavigate();
  const { copyToClipboard } = useClipboard();
  const { setMarkdown } = useMarkdownStore();
  const {
    templates,
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    selectedIdx,
    setSelectedIdx,
    copiedIdx,
    setCopiedIdx,
    getFilteredTemplates,
    getCategories,
  } = useTemplatesStore();

  const handleCopy = useCallback(
    async (content, idx) => {
      try {
        await copyToClipboard(content);
        setCopiedIdx(idx);
        setTimeout(() => setCopiedIdx(null), 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    },
    [copyToClipboard, setCopiedIdx]
  );

  const handleUseTemplate = useCallback(
    (content, idx) => {
      setMarkdown(content);
      navigate('/shop');
      setSelectedIdx(idx);
      setTimeout(() => setSelectedIdx(null), 2000);
    },
    [navigate, setMarkdown, setSelectedIdx]
  );

  return {
    templates: getFilteredTemplates(),
    categories: getCategories(),
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    selectedIdx,
    copiedIdx,
    handleCopy,
    handleUseTemplate,
  };
};
