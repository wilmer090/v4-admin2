import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'shared/navigation';

const App = () => {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
};

export default App;
