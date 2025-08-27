import React from 'react';
import GithubSection from '@/features/github/GithubSection';
import ComponentsLayout from '@/components/Components/ComponentsLayout';

const Components = () => (
  <ComponentsLayout>
    <GithubSection />
  </ComponentsLayout>
);

export default React.memo(Components);
