import React from 'react';

const AsyncProgramSetupList = React.lazy(() => import('./ListContainer'));

export const ProgramSetupList = () => {
  return <AsyncProgramSetupList />;
};
