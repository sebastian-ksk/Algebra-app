import { Button, Card, CardMedia, Grid } from '@mui/material';
import React from 'react';
import { Layout } from '../GeneralLayout/Layout';
import logo from '../../images/LogoCompleto.png';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
export const PageWelcome = () => {
  const navigate = useNavigate();
  const handleComenzar = (e) => {
    navigate('/register');
  };
  return (
    <Layout title='Bienvenido '>
      <Grid
        sx={{ marginTop: 8 }}
        spacing={3}
        container
        display='flex'
        justifyContent='center'
      >
        <Grid
          item
          xs={12}
          sx={{ mt: 2 }}
          // justifyContent='center'
        >
          <Box
            sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Card sx={{ maxWidth: 600 }}>
              <CardMedia
                component='img'
                height={270}
                image={logo}
                alt='green iguana'
              />
            </Card>
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{ mt: 2 }}
          display='flex'
          alignContent='center'
          justifyContent='center'
        >
          <Box
            sx={{
              width: '70%',
              display: 'flex',
            }}
          >
            <Button
              // disabled={isAuthenticate}
              onClick={handleComenzar}
              color='success'
              variant='contained'
              fullWidth
            >
              Comenzar Evaluación
            </Button>
          </Box>
        </Grid>{' '}
      </Grid>
    </Layout>
  );
};
