import React, { Suspense } from 'react';
import { LayoutWrapper } from './Layout.styled';
import { Spin } from 'antd';

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Suspense fallback={<Spin />}>{children}</Suspense>
    </LayoutWrapper>
  );
};

export default Layout;
