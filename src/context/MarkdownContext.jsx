import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';

const MarkdownContext = createContext();

export const useMarkdown = () => useContext(MarkdownContext);

export const MarkdownProvider = ({ children }) => {
  const [badgeLine, setBadgeLine] = useState('');
  const [iconNames, setIconNames] = useState([]);
  const [markdown, setMarkdown] = useState('');
  const [userName, setUserName] = useState('');
  const [theme, setTheme] = useState('default');

  // Set badge line directly (replace, not append)
  const embedBadge = useCallback((badge) => {
    setBadgeLine(badge);
  }, []);

  // Add icon name to iconNames array (row 2)
  const embedIcon = useCallback((iconName) => {
    setIconNames((prev) => prev.includes(iconName) ? prev : [...prev, iconName]);
  }, []);

  // Remove icon name from iconNames array (optional utility)
  const removeIcon = useCallback((iconName) => {
    setIconNames((prev) => prev.filter((name) => name !== iconName));
  }, []);

  // Compose the icons line as a beautified Markdown image block
  const getIconsLine = useCallback(() => {
    if (!iconNames.length) return '';
    return `<p align="center">` +
      iconNames.map((name) => `<img src="https://skillicons.dev/icons?i=${name}" alt="${name}" height="32" style="margin:4px;" />`).join(' ') +
      `</p>`;
  }, [iconNames]);

  // Compose the badges line as a beautified centered block
  const getBadgesLine = useCallback(() => {
    if (!badgeLine) return '';
    return `<p align="center">${badgeLine}</p>`;
  }, [badgeLine]);

  // Update markdown whenever badgeLine or iconNames changes
  useEffect(() => {
    setMarkdown((prev) => {
      let lines = prev.split('\n').filter(Boolean);
      // Remove previous badge/icon lines
      lines = lines.filter(
        (line) =>
          !line.includes('skillicons.dev/icons?i=') &&
          !line.includes('img.shields.io') &&
          !line.includes('<p align="center">')
      );
      const newLines = [];
      if (getBadgesLine()) newLines.push(getBadgesLine());
      if (getIconsLine()) newLines.push(getIconsLine());
      return [...newLines, ...lines].join('\n');
    });
  }, [badgeLine, iconNames, getBadgesLine, getIconsLine]);

  // Always append, even if markdown is empty
  const embedMarkdown = useCallback((embedContent) => {
    setMarkdown((prev) => prev ? prev + '\n' + embedContent : embedContent);
  }, []);

  // Appends content inline to the last line (side by side)
  const embedInlineMarkdown = useCallback((embedContent) => {
    setMarkdown((prev) => {
      const lines = prev.split('\n');
      if (lines.length === 0) return embedContent;
      lines[lines.length - 1] += ' ' + embedContent;
      return lines.join('\n');
    });
  }, []);

  const value = useMemo(() => ({
    badgeLine,
    setBadgeLine,
    iconNames,
    setIconNames,
    markdown,
    setMarkdown,
    userName,
    setUserName,
    theme,
    setTheme,
    embedBadge,
    embedIcon,
    removeIcon,
    getIconsLine,
    getBadgesLine,
    embedMarkdown,
    embedInlineMarkdown,
  }), [badgeLine, iconNames, markdown, userName, theme, embedBadge, embedIcon, removeIcon, getIconsLine, getBadgesLine, embedMarkdown, embedInlineMarkdown]);

  return (
    <MarkdownContext.Provider value={value}>
      {children}
    </MarkdownContext.Provider>
  );
};
