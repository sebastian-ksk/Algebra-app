import { Alert, Button, Grid, MenuItem, Stack, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RegistrarEstudiante } from '../../redux/slices/registro/funciones';
import { Layout } from '../GeneralLayout/Layout';

export const RegisterView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nombre, apellido, edad, grado } = useSelector(
    (state) => state.registro
  );

  const edades = ['12', '13', '14', '15', '16', '17', '18'];
  const grados = ['Octavo', 'Noveno', 'Decimo', 'Once'];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: nombre || '',
      apellido: apellido || '',
      edad: edad || '',
      grado: grado || '',
    },
  });

  const handleRegister = (e) => {
    const { nombre, apellido, edad, grado } = e;
    dispatch(RegistrarEstudiante(nombre, apellido, edad, grado));
    navigate('/crucigrama');
  };

  return (
    <Layout title='Registro de Estudiante'>
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
        >
          <form onSubmit={handleSubmit(handleRegister)}>
            <TextField
              {...register('nombre', {
                required: 'Ingrese un nombre Valido',
              })}
              id='standard-basic'
              variant='standard'
              label='Nombre'
              type='text'
              placeholder='Tu nombre'
              defaultValue={nombre}
              fullWidth
            />
            <br />
            <br />
            <TextField
              {...register('apellido', {
                required: 'Ingrese un nombre Valido',
              })}
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
              {...register('edad', {
                required: 'Elija una edad',
              })}
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
              {...register('grado', {
                required: 'Elija El Grado que esta cursando',
              })}
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
            <Stack direction='column'>
              {errors.nombre && (
                <Alert severity='error'>{errors.nombre.message}</Alert>
              )}
              {errors.apellido && (
                <Alert severity='error'>{errors.apellido.message}</Alert>
              )}
              {errors.edad && (
                <Alert severity='error'>{errors.edad.message}</Alert>
              )}
              {errors.grado && (
                <Alert severity='error'>{errors.grado.message}</Alert>
              )}
            </Stack>
            <br />
            <br />
            <Button
              // disabled={isAuthenticate}
              onClick={handleSubmit(handleRegister)}
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
