import { createSlice } from '@reduxjs/toolkit';

export const datosEstudiantesSlice = createSlice({
  name: 'datosEstudiantes',
  initialState: {
    datosCSV: [],
  },
  reducers: {
    renitDatosEstudiantes: (state /* action */) => {
      state.datosCSV = [];
    },
    agregarNuevoEstudiante: (state, action) => {
      state.datosCSV = [
        ...state.datosCSV,
        {
          ...action.payload,
        },
      ];

      const dataSinduplicados = [
        ...new Map(state.datosCSV.map((item) => [item['id'], item])).values(),
      ];
      state.datosCSV = [...dataSinduplicados];
      console.log(dataSinduplicados);
    },
  },
});
// Action creators are generated for each case reducer function
export const { renitDatosEstudiantes, agregarNuevoEstudiante } =
  datosEstudiantesSlice.actions;
