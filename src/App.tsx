import { ScrollToTop } from 'components';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import { CONFIG } from 'shared/config/config';
import { BreadcrumbProvider } from 'shared/context/Breadcrumb';
import { Routes } from 'shared/navigation';
import { GlobalStyle, theme } from 'shared/theme';
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={theme}>
          <BreadcrumbProvider>
            <Router basename={CONFIG.BASENAME}>
              <GlobalStyle />
              <ScrollToTop />
              <Routes />
            </Router>
          </BreadcrumbProvider>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
