import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { FavoritesProvider } from './context/FavoritesContext';
import './utils/i18n'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './store/CounterSlice'
import CartReducer from './store/CartSlice'
import OrderReducer from './store/OrderSlice'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient()

const store = configureStore({
  reducer: {
    counterReducer: CounterReducer,
    cartReducer: CartReducer,
    orderReducer: OrderReducer
  }
})

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <FavoritesProvider>
          <SnackbarProvider />
          <App />
        </FavoritesProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>



);