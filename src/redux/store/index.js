import { configureStore } from '@reduxjs/toolkit';
import { crucigramaSlice } from '../slices/crucigrama';
import { datosEstudiantesSlice } from '../slices/datosEstudiantes';
import { registroSlice } from '../slices/registro';
import { uiSlice } from '../slices/ui';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    registro: registroSlice.reducer,
    crucigrama: crucigramaSlice.reducer,
    datosEstudiante: datosEstudiantesSlice.reducer,
  },
});
