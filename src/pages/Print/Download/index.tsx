import React from 'react';

const AsyncDownload = React.lazy(() => import('./PrintDownloadContainer'));
export const PrintDownloadPage = () => {
  return <AsyncDownload />;
};
