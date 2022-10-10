import { Button, Card, CardMedia, Grid } from '@mui/material';
import React from 'react';
import { Layout } from '../GeneralLayout/Layout';
import logo from '../../images/LogoCompleto.png';
import { useNavigate } from 'react-router-dom';
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
        justifyContent='center'
      >
        <Grid
          item
          xs={10}
          sx={{ mt: 2 }}
        >
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              component='img'
              height={270}
              image={logo}
              alt='green iguana'
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{ mt: 2 }}
        >
          <Button
            // disabled={isAuthenticate}
            onClick={handleComenzar}
            color='secondary'
            variant='contained'
            fullWidth
          >
            Comenzar Evaluación
          </Button>
        </Grid>{' '}
      </Grid>
    </Layout>
  );
};
