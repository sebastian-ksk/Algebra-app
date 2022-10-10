import { Button, Grid } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Layout } from '../GeneralLayout/Layout';
import Crossword from '@jaredreisinger/react-crossword';
import { useDispatch } from 'react-redux';
import { registrarRespuestas } from '../../redux/slices/crucigrama';
import { useNavigate } from 'react-router-dom';

export const CrossWordView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = {
    across: {
      1: {
        clue: 'Operación que consiste en hallar el producto de sumar un mismo número, tantas veces como indica otro número',
        answer: 'MULTIPLICACION',
        row: 1,
        col: 0,
      },
      3: {
        clue: 'Polinomio que consta exactamente de dos términos.',
        answer: 'BINOMIO',
        row: 2,
        col: 1,
      },
      5: {
        clue: ' Un tipo de matemáticas avanzadas en la que las letras del alfabeto representan números desconocidos. ',
        answer: 'ALGEBRA',
        row: 3,
        col: 7,
      },
      6: {
        clue: 'Es una operación matemática, la operación inversa de la multiplicación. ',
        answer: 'DIVISION',
        row: 4,
        col: 3,
      },
      7: {
        clue: 'Cada uno de los símbolos que se usan para escribir números en el sistema de base 10',
        answer: 'DIGITO',
        row: 7,
        col: 5,
      },
      8: {
        clue: 'Operación matemática en la que se unen dos o más cantidades. ',
        answer: 'ADICION',
        row: 9,
        col: 0,
      },
    },
    down: {
      2: {
        clue: 'Es un prisma rectangular en el que todas sus caras son cuadrados congruentes',
        answer: 'CUBO',
        row: 0,
        col: 1,
      },
      4: {
        clue: 'Descripción paso a paso de una solución de un problema',
        answer: 'ALGORITMO',
        row: 1,
        col: 9,
      },
      9: {
        clue: 'es el producto y/o división de una o más variables (factor literal) y un coeficiente o factor numérico a',
        answer: 'TERMINO',
        row: 5,
        col: 2,
      },
      10: {
        clue: 'igualdad algebraica en la cual aparecen letras (incógnitas) con valor desconocido',
        answer: 'ECUACION',
        row: 8,
        col: 3,
      },
    },
  };

  const [respuestasJugador, setrespuestasJugador] = useState([]);

  const onCorrect = useCallback(
    (direction, number, answer) => {
      console.log(answer);
      respuestasJugador.push(answer);
      setrespuestasJugador(respuestasJugador);
      console.log(respuestasJugador);
    },
    [respuestasJugador]
  );

  const onInCorrect = useCallback(
    (direction, number, answer) => {
      console.log(answer);
      const index = respuestasJugador.findIndex((dato) => dato === answer);
      if (index >= 0) {
        delete respuestasJugador.splice(index, 1);
      }
      // console.log(index);
      setrespuestasJugador(respuestasJugador);
      console.log(respuestasJugador);
    },
    [respuestasJugador]
  );

  const saveData = () => {
    const respSinRepetir = respuestasJugador.filter(
      (item, index) => respuestasJugador.indexOf(item) === index
    );
    setrespuestasJugador(respSinRepetir.sort());
    console.log('respuetas correctas=> ', respuestasJugador.length);
    console.log(respuestasJugador);

    dispatch(
      registrarRespuestas({
        numero: respuestasJugador.length,
        respuestas: [...respuestasJugador],
      })
    );

    navigate('/final');
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
          xs={12}
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
