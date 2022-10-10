import { Button, CardMedia, Grid, Card, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { Layout } from '../GeneralLayout/Layout';
import logo from '../../images/cedhulogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reinitRegistro } from '../../redux/slices/registro';
import { reinitCrucigrama } from '../../redux/slices/crucigrama';
import {
  agregarNuevoEstudiante,
  renitDatosEstudiantes,
} from '../../redux/slices/datosEstudiantes';

export const FinalView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nombre, apellido, edad, grado } = useSelector(
    (state) => state.registro
  );
  const { numeroRespCorrectas, respuestasCorrectas } = useSelector(
    (state) => state.crucigrama
  );
  const { datosCSV } = useSelector((state) => state.datosEstudiante);
  const headers = [
    { label: 'id', key: 'id' },
    { label: 'Nombre', key: 'nombre' },
    { label: 'Apellido', key: 'apellido' },
    { label: 'Edad', key: 'edad' },
    { label: 'Grado', key: 'grado' },
    { label: 'Crucigrama Respuestas', key: 'crucigramaResp' },
    { label: 'Crucigrama No Respuestas', key: 'crucigramaNumResp' },
  ];

  const csvReport = {
    data: datosCSV,
    headers: headers,
    filename: 'Results.csv',
  };

  useEffect(() => {
    const exist = datosCSV.find(
      (item) => item.nombre === nombre && item.apellido === apellido
    );

    if (!exist) {
      const datosEstudiante = {
        id: `${nombre}-${apellido}`,
        nombre,
        apellido,
        edad,
        grado,
        crucigramaResp: respuestasCorrectas,
        crucigramaNumResp: numeroRespCorrectas,
      };
      dispatch(agregarNuevoEstudiante({ ...datosEstudiante }));
    }
  }, []);

  const handleEvaluarOtroAlumno = (e) => {
    dispatch(reinitRegistro());
    dispatch(reinitCrucigrama());
    navigate('/register');
  };

  const handleReinit = (e) => {
    setTimeout(() => {
      dispatch(reinitRegistro());
      dispatch(reinitCrucigrama());
      dispatch(renitDatosEstudiantes());
      navigate('/');
    }, 8000);
  };
  return (
    <Layout title='Gracias Por Participar '>
      <Grid
        sx={{ marginTop: 8 }}
        container
        justifyContent='center'
      >
        <Grid
          item
          xs={8}
          sx={{ mt: 2 }}
        >
          <Button
            // disabled={isAuthenticate}
            onClick={handleEvaluarOtroAlumno}
            color='secondary'
            variant='contained'
            fullWidth
          >
            Evaluar Otro Alumno
          </Button>
          <br />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{ mt: 2 }}
        >
          <CSVLink
            onClick={handleReinit}
            {...csvReport}
          >
            Terminar y Guardar Datos
          </CSVLink>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{ mt: 2 }}
        >
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component='img'
              height='150'
              image={logo}
              alt='green iguana'
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{ mt: 2, textJustify: 'center' }}
        >
          <Card
            sx={{
              maxWidth: 500,
              // display: 'flex',
              textJustify: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant='h6'
              sx={{ textJustify: 'center' }}
            >
              Estudiante: Juan Perez
            </Typography>

            <Typography variant='h6'>Estudiante: Andres Perez</Typography>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};
