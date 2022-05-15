import React from 'react';

const AsyncProgramSetup = React.lazy(() => import('./ProgramSetupContainer'));

export const ProgramSetupPage = () => {
  return <AsyncProgramSetup />;
};
