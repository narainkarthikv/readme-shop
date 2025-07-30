import { useMarkdown } from '../context/MarkdownContext';

const EmbedButton = ({ label, embedContent }) => {
  const { embedMarkdown } = useMarkdown();

  return (
    <button
      style={{ marginRight: 8, marginBottom: 8 }}
      onClick={() => embedMarkdown(embedContent)}
    >
      {label}
    </button>
  );
};

export default EmbedButton;
