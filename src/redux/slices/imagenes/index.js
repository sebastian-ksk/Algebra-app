import { createSlice } from '@reduxjs/toolkit';

export const imagenesSlice = createSlice({
  name: 'imagenes',
  initialState: {
    descripciones: [],
  },
  reducers: {
    reiniciarDescripciones: (state /* action */) => {
      state.descripciones = [];
    },
    guardarDescripciones: (state, action) => {
      state.descripciones = [...action.payload];
    },
  },
});
// Action creators are generated for each case reducer function
export const { reiniciarDescripciones, guardarDescripciones } =
  imagenesSlice.actions;
