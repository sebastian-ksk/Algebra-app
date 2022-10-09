import { hacerRegistro } from '.';

export const RegistrarEstudiante = (nombre, apellido, edad, grado) => {
  return (dispatch) => {
    dispatch(
      hacerRegistro({
        nombre,
        apellido,
        edad,
        grado,
      })
    );
  };
};
