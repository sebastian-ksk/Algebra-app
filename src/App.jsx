import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';
import { store } from './redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </Provider>
  );
};
