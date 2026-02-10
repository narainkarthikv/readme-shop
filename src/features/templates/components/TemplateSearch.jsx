import React from 'react';
import SearchField from '@/components/ui/SearchField';
import PropTypes from 'prop-types';

const TemplateSearch = ({ search, onSearchChange }) => (
  <SearchField
    value={search}
    onChange={(e) => onSearchChange(e.target.value)}
    placeholder='Search templates...'
    sx={{ mb: 3 }}
  />
);

TemplateSearch.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default React.memo(TemplateSearch);
