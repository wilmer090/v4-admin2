import React from 'react';

const AsyncEditPrint = React.lazy(() => import('./EditPrintContainer'));

export const EditPrintPage = () => {
  return <AsyncEditPrint />;
};
