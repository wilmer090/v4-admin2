import React from 'react';

const AsyncPublication = React.lazy(() => import('./PublicationContainer'));
export const Publication = () => {
  return <AsyncPublication />;
};
