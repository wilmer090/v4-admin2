import React from 'react';

const AsyncCreateRadio = React.lazy(() => import('./CreateRadioContainer'));

export const CreateRadioPage = () => {
  return <AsyncCreateRadio />;
};
