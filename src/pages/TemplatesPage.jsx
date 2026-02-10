import React from 'react';
import TemplatesLayout from '@/features/templates/TemplatesLayout';

/**
 * TemplatesPage - Modern templates showcase
 * Uses the new TemplatesLayout with improved UX patterns
 */
const TemplatesPage = React.memo(() => <TemplatesLayout />);

TemplatesPage.displayName = 'TemplatesPage';

export default TemplatesPage;
