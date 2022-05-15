import React from 'react';

const AsyncAuthors = React.lazy(() => import('./AuthorContainer'));
export const AuthorsPage = () => {
  return <AsyncAuthors />;
};
