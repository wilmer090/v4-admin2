import React from 'react';

const AsyncPublicationList = React.lazy(() => import('./ListContainer'));
export const PublicationList = () => {
  return <AsyncPublicationList />;
};
