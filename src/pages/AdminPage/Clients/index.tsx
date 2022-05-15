import React from 'react';

const AsyncClients = React.lazy(() => import('./ClientsContainer'));
export const ClientsPage = () => {
  return <AsyncClients />;
};
