import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'shared/navigation';
import { theme, GlobalStyle } from 'shared/theme';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

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
        <ThemeProvider theme={theme}>
          <Router>
            <GlobalStyle />
            <Routes />
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
