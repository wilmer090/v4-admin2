import React from 'react';

const AsyncEditClient = React.lazy(() => import('./EditClientContainer'));
export const EditClientPage = () => {
  return <AsyncEditClient />;
};
