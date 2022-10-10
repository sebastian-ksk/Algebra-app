import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Logo from '../../../../../images/cedhulogo.png';
export const NavBar = ({ title = 'titulo' }) => {
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
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='h4'> {title}</Typography>

          <Box
            sx={{
              height: 50,
            }}
            component='img'
            alt='ITPeople'
            src={Logo}
          />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
