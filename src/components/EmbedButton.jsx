import React from 'react';
import { useMarkdown } from '../context/MarkdownContext';

const EmbedButton = React.memo(({ label, embedContent }) => {
  const { embedMarkdown } = useMarkdown();
  const handleClick = React.useCallback(() => embedMarkdown(embedContent), [embedMarkdown, embedContent]);
  return (
    <button
      style={{ marginRight: 8, marginBottom: 8 }}
      onClick={handleClick}
    >
      {label}
    </button>
  );
});

export default EmbedButton;
