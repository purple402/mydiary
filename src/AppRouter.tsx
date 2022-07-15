import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { BottomNav } from './components';

function AppRouter() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <BottomNav />
      <App />
    </BrowserRouter>
  );
}

export default AppRouter;
