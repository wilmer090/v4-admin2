import React from 'react';

const AsyncEditRadio = React.lazy(() => import('./EditRadioContainer'));
export const EditRadioPage = () => {
  return <AsyncEditRadio />;
};
