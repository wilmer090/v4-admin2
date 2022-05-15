import React from 'react';

const AsyncPrintAds = React.lazy(() => import('./PrintAdsContainer'));
export const PrintAdsPage = () => {
  return <AsyncPrintAds />;
};
