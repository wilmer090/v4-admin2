import React from 'react';

const AsyncUrlChecker = React.lazy(() => import('./UrlCheckerContainer'));
export const UrlCheckerPage = () => {
  return <AsyncUrlChecker />;
};
