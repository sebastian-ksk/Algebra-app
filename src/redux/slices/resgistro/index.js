import { createSlice } from '@reduxjs/toolkit';

// const initialState =

export const registroSlice = createSlice({
  name: 'registro',
  initialState: {
    nombre: '',
    apellido: '',
    edad: '',
    grado: '',
  },
  reducers: {
    reinit: (state /* action */) => {
      state = { nombre: '', apellido: '', edad: '', grado: '' };
    },
    hacerRegistro: (state, action) => {
      // console.log('payload=>', action.payload);
      const { nombre, apellido, edad, grado } = action.payload;

      state.nombre = nombre;
      state.apellido = apellido;
      state.edad = edad;
      state.grado = grado;
    },
  },
});
// Action creators are generated for each case reducer function
export const { reinit, hacerRegistro } = registroSlice.actions;
