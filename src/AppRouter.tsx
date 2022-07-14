import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { BottomNav } from './components';

function AppRouter() {
  return (
    <BrowserRouter>
      <BottomNav />
      <App />
    </BrowserRouter>
  );
}

export default AppRouter;
