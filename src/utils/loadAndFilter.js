/**
 * Filters a list of items by a search term (case-insensitive).
 * @param {Array} data - List of items to filter (must have 'name' property).
 * @param {string} searchTerm - Search term to filter by.
 * @returns {Array} Filtered items.
 */
export const loadAndFilter = (data, searchTerm) => {
  if (!Array.isArray(data)) return [];
  if (!searchTerm) return data;
  const term = searchTerm.toLowerCase();
  return data.filter((item) => item.name.toLowerCase().includes(term));
};
