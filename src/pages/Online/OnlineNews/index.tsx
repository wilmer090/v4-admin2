import React from 'react';

const AsyncOnlineNews = React.lazy(() => import('./OnlineNewsContainer'));
export const OnlineNewsPage = () => {
  return <AsyncOnlineNews />;
};
