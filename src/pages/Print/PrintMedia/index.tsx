import React from 'react';

const AsyncPrintMedia = React.lazy(() => import('./PrintMediaContainer'));
export const PrintMediaPage = () => {
  return <AsyncPrintMedia />;
};
