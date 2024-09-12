import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { FavoritesProvider } from './context/FavoritesContext';
import './utils/i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <FavoritesProvider>
      <SnackbarProvider />
      <App />
    </FavoritesProvider>
  </BrowserRouter>

);