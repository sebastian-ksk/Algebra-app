import { createSlice } from '@reduxjs/toolkit';

export const crucigramaSlice = createSlice({
  name: 'crucigrama',
  initialState: {
    numeroRespCorrectas: 0,
    respuestasCorrectas: [],
  },
  reducers: {
    reinitCrucigrama: (state /* action */) => {
      state.numeroRespCorrectas = 0;
      state.respuestasCorrectas = [];
    },
    registrarRespuestas: (state, action) => {
      const { numero, respuestas } = action.payload;
      state.numeroRespCorrectas = numero;
      state.respuestasCorrectas = [...respuestas];
    },
  },
});
// Action creators are generated for each case reducer function
export const { reinitCrucigrama, registrarRespuestas } =
  crucigramaSlice.actions;
