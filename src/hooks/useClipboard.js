import { useState, useCallback } from 'react';
import { copyToClipboard as copyUtil, logger } from '@utils/index';

/**
 * Custom hook for clipboard operations
 * Provides copy functionality with loading and success states
 * @param {number} duration - Duration to show copied state (ms)
 * @returns {Array} [copied, copyToClipboard]
 */
export const useClipboard = (duration = 2000) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(
    async (text) => {
      if (!text) {
        logger.warn('No text provided to copy');
        return false;
      }

      try {
        const success = await copyUtil(text);

        if (success) {
          setCopied(true);
          setTimeout(() => setCopied(false), duration);
          return true;
        } else {
          throw new Error('Failed to copy to clipboard');
        }
      } catch (error) {
        logger.error('Failed to copy:', error);
        return false;
      }
    },
    [duration]
  );

  return [copied, copyToClipboard];
};

export default useClipboard;
