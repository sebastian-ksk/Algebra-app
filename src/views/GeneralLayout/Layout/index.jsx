import { Box } from '@mui/material';
import React from 'react';
import { NavBar } from './components/NavBar';

export const Layout = ({ children, title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <NavBar title={title} />
      {children}
    </Box>
  );
};
