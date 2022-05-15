import { Layout } from 'components/Layout';
import React from 'react';
import { Heading } from 'shared/theme/elements';
import { Card } from './NotFoundView.styled';

const NotFoundView = () => {
  return (
    <Layout>
      <Card $fullHeight>
        <Heading $variant="primary">Page Not Found</Heading>
      </Card>
    </Layout>
  );
};

export default NotFoundView;
