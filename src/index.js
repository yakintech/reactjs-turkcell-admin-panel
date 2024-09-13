import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { FavoritesProvider } from './context/FavoritesContext';
import './utils/i18n'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <FavoritesProvider>
        <SnackbarProvider />
        <App />
      </FavoritesProvider>
    </BrowserRouter>
  </QueryClientProvider>


);