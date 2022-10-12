import { createSlice } from '@reduxjs/toolkit';

export const sopaLetrasSlice = createSlice({
  name: 'sopaLetras',
  initialState: {
    numPalabrasEncontradas: 0,
    palabrasEncontradas: [],
  },
  reducers: {
    reiniciarSopa: (state /* action */) => {
      state.numPalabrasEncontradas = 0;
      state.palabrasEncontradas = [];
    },
    guardarPalabrasEncontradas: (state, action) => {
      const { num, palabras } = action.payload;
      state.numPalabrasEncontradas = num;
      state.palabrasEncontradas = [...palabras];
    },
  },
});
// Action creators are generated for each case reducer function
export const { reiniciarSopa, guardarPalabrasEncontradas } =
  sopaLetrasSlice.actions;
