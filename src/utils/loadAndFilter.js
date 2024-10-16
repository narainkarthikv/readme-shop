/**
 * Filters the provided data based on the given search term.
 * @param {Array} data - The list of items (icons or badges) to filter.
 * @param {string} searchTerm - The term to search and filter the data by.
 * @returns {Array} - The filtered list of items.
 */

export const loadAndFilter = (data, searchTerm) => {
    if (!data) {
        return [];
    }

    if (!searchTerm) {
        return data;
    }

    return data.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};
