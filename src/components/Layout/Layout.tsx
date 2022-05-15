import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';
import React, { Suspense } from 'react';

import { FallbackSpinner, LayoutWrapper, Main, MainWrapper } from './Layout.styled';

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <MainWrapper>
        <Suspense fallback={<FallbackSpinner />}>
          <Header />
          <Main>{children}</Main>
        </Suspense>
      </MainWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
