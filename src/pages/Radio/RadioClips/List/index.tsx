import React from 'react';

const AsynRadioClip = React.lazy(() => import('./RadioClipContainer'));

export const RadioClipPage = () => {
  return <AsynRadioClip />;
};
