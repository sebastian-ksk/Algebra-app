import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';

export const NavBar = () => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `100%` },
      }}
    >
      <Toolbar>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Box
            sx={{
              height: 64,
            }}
          />
          <Typography variant='h4'> Algebra App</Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
