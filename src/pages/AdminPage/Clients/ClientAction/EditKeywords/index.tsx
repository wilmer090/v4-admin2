import React from 'react';

const AsyncKeywords = React.lazy(() => import('./EditKeywordsContainer'));
export const EditKeywordsPage = () => {
  return <AsyncKeywords />;
};
