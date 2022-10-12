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
import { reiniciarSopa } from '../../redux/slices/sopaDeLetras';
import { reiniciarDescripciones } from '../../redux/slices/imagenes';

export const FinalView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nombre, apellido, edad, grado } = useSelector(
    (state) => state.registro
  );
  const { numeroRespCorrectas, respuestasCorrectas } = useSelector(
    (state) => state.crucigrama
  );
  const { numPalabrasEncontradas, palabrasEncontradas } = useSelector(
    (state) => state.sopa
  );
  const { descripciones } = useSelector((state) => state.imagenes);

  const { datosCSV } = useSelector((state) => state.datosEstudiante);

  const headers = [
    { label: 'id', key: 'id' },
    { label: 'Nombre', key: 'nombre' },
    { label: 'Apellido', key: 'apellido' },
    { label: 'Edad', key: 'edad' },
    { label: 'Grado', key: 'grado' },
    { label: 'Crucigrama Respuestas', key: 'crucigramaResp' },
    { label: 'Crucigrama No Respuestas', key: 'crucigramaNumResp' },
    { label: 'Imagen 1', key: 'image1' },
    { label: 'Descripción 1', key: 'descripcion1' },
    { label: 'Imagen 2', key: 'image2' },
    { label: 'Descripción 2', key: 'descripcion2' },
    { label: 'Imagen 3', key: 'image3' },
    { label: 'Descripción 3', key: 'descripcion3' },
    { label: 'Imagen 4', key: 'image4' },
    { label: 'Descripción 4', key: 'descripcion4' },
    { label: 'Palabras encontradas Sopa', key: 'palabrasSopa' },
    { label: 'Num Palabras encontradas Sopa', key: 'NumPalabrasSopa' },
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
        crucigramaResp: respuestasCorrectas || 'No Completo',
        crucigramaNumResp: numeroRespCorrectas || 'No Completo',
        image1: descripciones[0]?.title || 'No Completo',
        descripcion1: descripciones[0]?.description || 'No Completo',
        image2: descripciones[1]?.title || 'No Completo',
        descripcion2: descripciones[1]?.description || 'No Completo',
        image3: descripciones[2]?.title || 'No Completo',
        descripcion3: descripciones[2]?.description || 'No Completo',
        image4: descripciones[3]?.title || 'No Completo',
        descripcion4: descripciones[3]?.description || 'No Completo',
        palabrasSopa: palabrasEncontradas || 'No Completo',
        NumPalabrasSopa: numPalabrasEncontradas || 'No Completo',
      };
      dispatch(agregarNuevoEstudiante({ ...datosEstudiante }));
    }
  }, []);

  const handleEvaluarOtroAlumno = (e) => {
    dispatch(reinitRegistro());
    dispatch(reinitCrucigrama());
    dispatch(reiniciarDescripciones());
    dispatch(reiniciarSopa());
    navigate('/register');
  };

  const handleReinit = (e) => {
    setTimeout(() => {
      dispatch(reinitRegistro());
      dispatch(reinitCrucigrama());
      dispatch(reiniciarDescripciones());
      dispatch(reiniciarSopa());
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
