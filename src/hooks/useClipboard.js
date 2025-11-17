import { useState, useCallback } from 'react';

export const useClipboard = (duration = 1500) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(
    async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), duration);
        return true;
      } catch (error) {
        console.error('Failed to copy:', error);
        return false;
      }
    },
    [duration]
  );

  return [copied, copyToClipboard];
};
