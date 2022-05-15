import React from 'react';

const AsyncManagePlan = React.lazy(() => import('./ManagePlanContainer'));

export const ManagePlanPage = () => {
  return <AsyncManagePlan />;
};
