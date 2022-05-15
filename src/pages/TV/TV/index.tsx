import React from 'react';

const AsyncTvView = React.lazy(() => import('./TvView'));

export const TvPage = () => {
  return <AsyncTvView />;
};
