import React from 'react';

const AsyncRadioAds = React.lazy(() => import('./RadioAdsContainer'));

export const RadioAdsPage = () => {
  return <AsyncRadioAds />;
};
