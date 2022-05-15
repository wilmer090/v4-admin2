import React from 'react';

const AsyncUnverifiedAds = React.lazy(() => import('./UnverifiedAdsContainer'));
export const UnverifiedAdsPage = () => {
  return <AsyncUnverifiedAds />;
};
