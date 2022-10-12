import { configureStore } from '@reduxjs/toolkit';
import { crucigramaSlice } from '../slices/crucigrama';
import { datosEstudiantesSlice } from '../slices/datosEstudiantes';
import { imagenesSlice } from '../slices/imagenes';
import { registroSlice } from '../slices/registro';
import { sopaLetrasSlice } from '../slices/sopaDeLetras';
import { uiSlice } from '../slices/ui';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    registro: registroSlice.reducer,
    crucigrama: crucigramaSlice.reducer,
    imagenes: imagenesSlice.reducer,
    sopa: sopaLetrasSlice.reducer,
    datosEstudiante: datosEstudiantesSlice.reducer,
  },
});
