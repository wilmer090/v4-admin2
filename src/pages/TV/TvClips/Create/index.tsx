import React from 'react';

const TvClipsForm = React.lazy(() => import('./CreateTvClipsContainer'));

export const TvClipsFormPage = () => {
  return <TvClipsForm />;
};
