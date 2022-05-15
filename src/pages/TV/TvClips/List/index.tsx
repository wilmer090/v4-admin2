import React from 'react';

const AsyncTVContainer = React.lazy(() => import('./TvClipsContainer'));

export const TvClipsPage = () => {
  return <AsyncTVContainer />;
};
