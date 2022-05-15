import React from 'react';

const AsyncTvAdsContainer = React.lazy(() => import('./TvAdsContainer'));

export const TvAdsPage = () => {
  return <AsyncTvAdsContainer />;
};
