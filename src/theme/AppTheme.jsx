import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { principalTheme } from './';

export const AppTheme = ({ children }) => {
  return <ThemeProvider theme={principalTheme}>{children}</ThemeProvider>;
};
