import React from 'react';
import PropTypes from 'prop-types';
import useMarkdownStore from '@/features/markdown/store/markdownStore';

const EmbedButton = React.memo(({ label, embedContent }) => {
  const embedMarkdown = useMarkdownStore((state) => state.embedMarkdown);
  const handleClick = React.useCallback(
    () => embedMarkdown(embedContent),
    [embedMarkdown, embedContent]
  );
  return (
    <button style={{ marginRight: 8, marginBottom: 8 }} onClick={handleClick}>
      {label}
    </button>
  );
});

EmbedButton.displayName = 'EmbedButton';

EmbedButton.propTypes = {
  label: PropTypes.string.isRequired,
  embedContent: PropTypes.string.isRequired,
};

export default EmbedButton;
