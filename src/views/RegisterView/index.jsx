import { Button, Grid, MenuItem, Stack, TextField } from '@mui/material';
import React from 'react';
import { Layout } from './Layout';

export const RegisterView = () => {
  const edades = ['12', '13', '14', '15', '16', '17', '18'];
  const grados = ['Octavo', 'Noveno', 'Decimo', 'Once'];
  return (
    <Layout>
      <Grid
        sx={{ marginTop: 8 }}
        container
        spacing={1}
        justifyContent='center'
      >
        <Grid
          item
          xs={6}
          sx={{ mt: 2 }}
          spacing={3}
        >
          <form

          // onSubmit={handleSubmit(handleLogin)}
          >
            <TextField
              // {...register('email', {
              //   required: 'Email is required',
              //   pattern: {
              //     value:
              //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              //     message: 'Please enter a valid email',
              //   },
              // })}
              id='standard-basic'
              variant='standard'
              label='Nombre'
              type='text'
              placeholder='Tu nombre'
              fullWidth
            />
            <br />
            <br />
            <TextField
              id='standard-basic'
              variant='standard'
              label='Apellido'
              type='text'
              placeholder='Tu Apellido'
              fullWidth
            />
            <br />
            <br />
            <TextField
              fullWidth
              variant='standard'
              // value={direction.country}
              // {...register('country', {
              //   required: 'country is required',
              // })}
              select // tell TextField to render select
              label='Edad'
              // defaultValue={countrys[defaultIndexValue.country]}
            >
              {edades.map((count) => {
                return (
                  <MenuItem
                    key={count}
                    value={count}
                  >
                    {count}
                  </MenuItem>
                );
              })}
            </TextField>
            <br />
            <br />
            <TextField
              fullWidth
              variant='standard'
              // value={direction.country}
              // {...register('country', {
              //   required: 'country is required',
              // })}
              select // tell TextField to render select
              label='Grado'
              // defaultValue={countrys[defaultIndexValue.country]}
            >
              {grados.map((count) => {
                return (
                  <MenuItem
                    key={count}
                    value={count}
                  >
                    {count}
                  </MenuItem>
                );
              })}
            </TextField>

            <br />
            <br />
            {/* <Stack direction='column'>
              {errors.email && (
                <Alert severity='error'>{errors.email.message}</Alert>
              )}
              {errors.password && (
                <Alert severity='error'>{errors.password.message}</Alert>
              )}
            </Stack> */}
            <br />
            <br />
            <Button
              // disabled={isAuthenticate}
              // onClick={handleSubmit(handleLogin)}
              color='secondary'
              variant='contained'
              fullWidth
            >
              Siguiente
            </Button>
          </form>
        </Grid>
      </Grid>
    </Layout>
  );
};
