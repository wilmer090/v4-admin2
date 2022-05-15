import React from 'react';

const AsyncURLLIST = React.lazy(() => import('./UrlListContainer'));
export const UrlListPage = () => {
  return <AsyncURLLIST />;
};
