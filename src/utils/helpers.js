/**
 * Sanitizes HTML content using DOMPurify with specific configuration
 * @param {string} content - The HTML content to sanitize
 * @returns {string} - Sanitized HTML content
 */
export const sanitizeHTML = (content) => {
  return DOMPurify.sanitize(content, {
    ADD_TAGS: ['img'],
    ADD_ATTR: ['src', 'alt', 'width', 'height', 'style'],
  });
};

/**
 * Filters an array based on a search term
 * @param {Array} items - Array of items to filter
 * @param {string} searchTerm - Term to filter by
 * @param {string} [property='name'] - Property to filter on
 * @returns {Array} - Filtered array of items
 */
export const filterItems = (items, searchTerm, property = 'name') => {
  if (!searchTerm) return items;
  const lowercasedTerm = searchTerm.toLowerCase();
  return items.filter(item => 
    item[property]?.toLowerCase().includes(lowercasedTerm)
  );
};

/**
 * Creates a copyToClipboard function that handles the clipboard API
 * @param {string} text - Text to copy
 * @returns {Promise} - Resolves when copy is complete
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy:', error);
    return false;
  }
};

/**
 * Formats a GitHub URL with the provided parameters
 * @param {string} username - GitHub username
 * @param {Object} params - URL parameters
 * @returns {string} - Formatted GitHub URL
 */
export const formatGitHubUrl = (username, params = {}) => {
  const baseUrl = 'https://github-readme-stats.vercel.app/api';
  const queryParams = new URLSearchParams({
    username,
    ...params,
  });
  return `${baseUrl}?${queryParams}`;
};
