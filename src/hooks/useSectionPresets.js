import { useEffect, useRef } from 'react';
import { useShopStore, selectSelectedSections } from '@/store/useShopStore';
import useMarkdownStore from '@/features/markdown/store/markdownStore';
import sectionPresets from '@/assets/data/sectionPresets.json';

/**
 * Hook to auto-populate markdown editor with selected template sections
 * Intelligently adds sections without duplicating existing content
 */
export const useSectionPresets = () => {
  const selectedSections = useShopStore(selectSelectedSections);
  const { markdown, setMarkdown } = useMarkdownStore();
  const prevSectionsRef = useRef([]);

  useEffect(() => {
    // Get sections that were added (not removed)
    const addedSections = selectedSections.filter(
      (id) => !prevSectionsRef.current.includes(id)
    );

    if (addedSections.length > 0) {
      const sectionMap = sectionPresets.sections.reduce((acc, section) => {
        acc[section.id] = section.content;
        return acc;
      }, {});

      const newContent = addedSections
        .map((sectionId) => sectionMap[sectionId])
        .filter(Boolean)
        .join('\n');

      if (newContent) {
        // Append new sections to existing content
        const updatedMarkdown = markdown
          ? `${markdown}\n\n${newContent}`
          : newContent;
        setMarkdown(updatedMarkdown);
      }
    }

    prevSectionsRef.current = selectedSections;
  }, [selectedSections, markdown, setMarkdown]);

  return { selectedSections };
};
