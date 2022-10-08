import { Button, Grid } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Layout } from '../RegisterView/Layout';
import Crossword from '@jaredreisinger/react-crossword';

export const CrossWordView = () => {
  const data = {
    across: {
      1: {
        clue: 'one plus one',
        answer: 'TWO',
        row: 0,
        col: 0,
      },
      3: {
        clue: 'three minus two',
        answer: 'NINE',
        row: 1,
        col: 2,
      },
    },
    down: {
      2: {
        clue: 'three minus two',
        answer: 'ONE',
        row: 0,
        col: 2,
      },
    },
  };
  const [respuestasCorrectas, setrespuestasCorrectas] = useState([]);
  const [respuestasJugador, setrespuestasJugador] = useState([]);
  useEffect(() => {
    const horizontales = Object.values(data.across); //obtien todas las respuestas horizontales
    horizontales.forEach((resp) => {
      respuestasCorrectas.push(resp.answer);
    });
    const verticales = Object.values(data.down);
    verticales.forEach((resp) => {
      respuestasCorrectas.push(resp.answer);
    });
    setrespuestasCorrectas(respuestasCorrectas);
    const respSinRepetir = respuestasCorrectas.filter(
      (item, index) => respuestasCorrectas.indexOf(item) === index
    );
    setrespuestasCorrectas(respSinRepetir.sort());

    // console.log(respSinRepetir);
  }, []);

  const onCorrect = useCallback((direction, number, answer) => {
    console.log(answer);
    respuestasJugador.push(answer);
    setrespuestasJugador(respuestasJugador);
    console.log(respuestasJugador);
  }, []);

  const onInCorrect = useCallback((direction, number, answer) => {
    console.log(answer);
    const index = respuestasJugador.findIndex((dato) => dato === answer);
    if (index >= 0) {
      delete respuestasJugador.splice(index, 1);
    }
    // console.log(index);
    setrespuestasJugador(respuestasJugador);
    console.log(respuestasJugador);
  }, []);

  const saveData = () => {
    const respSinRepetir = respuestasJugador.filter(
      (item, index) => respuestasCorrectas.indexOf(item) === index
    );
    setrespuestasJugador(respSinRepetir.sort());
    console.log('respuetas correctas=> ', respuestasJugador.length);
    console.log(respuestasJugador);
  };

  return (
    <Layout title='Resuelve el Crucigrama'>
      <Grid
        sx={{ marginTop: 8 }}
        container
        justifyContent='center'
      >
        <Grid
          item
          xs={8}
          sx={{ mt: 2 }}
          spacing={3}
        >
          <div style={{ width: '100%', display: 'flex' }}>
            <Crossword
              data={data}
              onCorrect={onCorrect}
              onAnswerIncorrect={onInCorrect}
            />
          </div>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{ mt: 2 }}
          spacing={3}
        >
          <Button
            // disabled={isAuthenticate}
            onClick={saveData}
            color='secondary'
            variant='contained'
            fullWidth
          >
            Guardar
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};
