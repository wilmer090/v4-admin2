import React from 'react';

const AsyncAddAuthor = React.lazy(() => import('./AddAuthorContainer'));
export const AddAuthorPage = () => {
  return <AsyncAddAuthor />;
};
