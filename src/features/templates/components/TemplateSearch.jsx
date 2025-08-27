import React from 'react';
import SearchField from '@/components/ui/SearchField';

const TemplateSearch = ({ search, onSearchChange }) => (
  <SearchField
    value={search}
    onChange={(e) => onSearchChange(e.target.value)}
    placeholder="Search templates..."
    sx={{ mb: 3 }}
  />
);

export default React.memo(TemplateSearch);
