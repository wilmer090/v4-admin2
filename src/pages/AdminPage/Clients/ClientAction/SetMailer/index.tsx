import React from 'react';

const AsyncMailer = React.lazy(() => import('./MailerContainer'));
export const MailerPage = () => {
  return <AsyncMailer />;
};
