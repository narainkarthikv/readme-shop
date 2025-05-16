import React, { createContext, useContext, useState } from 'react';

const MarkdownContext = createContext();

export const useMarkdown = () => useContext(MarkdownContext);

export const MarkdownProvider = ({ children }) => {
  const [badgeLine, setBadgeLine] = useState('');
  const [iconNames, setIconNames] = useState([]); // array of icon names
  const [markdown, setMarkdown] = useState('');
  const [userName, setUserName] = useState('');
  const [theme, setTheme] = useState('default');

  // Set badge line directly (replace, not append)
  const embedBadge = (badge) => {
    setBadgeLine((prev) => (prev ? prev + ' ' + badge : badge));
  };

  // Add icon name to iconNames array (row 2)
  const embedIcon = (iconName) => {
    setIconNames((prev) =>
      prev.includes(iconName) ? prev : [...prev, iconName]
    );
  };

  // Remove icon name from iconNames array (optional utility)
  const removeIcon = (iconName) => {
    setIconNames((prev) => prev.filter((name) => name !== iconName));
  };

  // Compose the icons line as a beautified Markdown image block
  const getIconsLine = () => {
    if (iconNames.length === 0) return '';
    const iconsParam = iconNames.join(',');
    return [
      '<h3 align="center">Tech Stack</h3>',
      `<p align="center">`,
      `  <img src="https://skillicons.dev/icons?i=${iconsParam}" alt="Tech Stack" />`,
      `</p>`
    ].join('\n');
  };

  // Compose the badges line as a beautified centered block
  const getBadgesLine = () => {
    if (!badgeLine) return '';
    return [
      '<h3 align="center">Badges</h3>',
      `<p align="center">${badgeLine}</p>`
    ].join('\n');
  };

  // Update markdown whenever badgeLine or iconNames changes
  React.useEffect(() => {
    let sections = [];
    const badges = getBadgesLine();
    const icons = getIconsLine();
    if (badges) sections.push(badges);
    if (icons) sections.push(icons);
    setMarkdown(sections.join('\n\n'));
  }, [badgeLine, iconNames]);

  // Always append, even if markdown is empty
  const embedMarkdown = (embedContent) => {
    setMarkdown((prev) => (prev ? prev + '\n' + embedContent : embedContent));
  };

  // Appends content inline to the last line (side by side)
  const embedInlineMarkdown = (embedContent) => {
    setMarkdown((prev) => {
      if (!prev) return embedContent;
      const lines = prev.split('\n');
      lines[lines.length - 1] = lines[lines.length - 1]
        ? lines[lines.length - 1] + ' ' + embedContent
        : embedContent;
      return lines.join('\n');
    });
  };

  return (
    <MarkdownContext.Provider
      value={{
        markdown,
        setMarkdown,
        embedMarkdown,
        embedInlineMarkdown,
        embedBadge,
        embedIcon,
        removeIcon,
        badgeLine,
        iconNames,
        userName,
        setUserName,
        theme,
        setTheme,
      }}
    >
      {children}
    </MarkdownContext.Provider>
  );
};
