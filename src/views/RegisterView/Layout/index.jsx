import { Box } from '@mui/material';
import React from 'react';
import { NavBar } from './components/NavBar';

export const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <NavBar />
      {children}
    </Box>
  );
};
