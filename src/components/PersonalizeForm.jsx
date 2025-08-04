import React from 'react';
import { useMarkdown } from '../context/MarkdownContext';

const PersonalizeForm = React.memo(() => {
  const { userName, setUserName, theme, setTheme } = useMarkdown();

  return (
    <div style={{ marginBottom: 16 }}>
      <label htmlFor="userName">
        Name:{' '}
        <input
          id="userName"
          value={userName}
          onChange={e => setUserName(e.target.value)}
          placeholder="Your name"
        />
      </label>
      <label htmlFor="theme" style={{ marginLeft: 16 }}>
        Theme:{' '}
        <select id="theme" value={theme} onChange={e => setTheme(e.target.value)}>
          <option value="default">Default</option>
          <option value="tokyonight">Tokyo Night</option>
          <option value="luminance">Luminance</option>
        </select>
      </label>
    </div>
  );
});

export default PersonalizeForm;
