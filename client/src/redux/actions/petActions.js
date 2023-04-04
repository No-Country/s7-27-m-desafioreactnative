import { URL_BACK } from "../../config";
import { POST_PET_DATA_PENDING, POST_PET_DATA_REJECTED, POST_PET_DATA_SUCCESS } from "../types/petTypes";

const getPetData = {};

const postPetData = (payload, id) => {
  return async function (dispatch) {
    dispatch({ type: POST_PET_DATA_PENDING });
    try {
      const { data } = axios.post(`${URL_BACK}/mascota`, payload);
      return dispatch({ type: POST_PET_DATA_SUCCESS, payload: {data} });
    } catch (error) {
      return dispatch({ type: POST_PET_DATA_REJECTED, payload: error });
    }
  };
};
// data:
// {
//     "nuevaMascota": {
//       "nombre": "Nombre mascota",
//       "tipoMascota": "a1",
//       "caracteristicas": {
//         "edad": 0,
//         "sueno": 100,
//         "energia": 100,
//         "salud": 100,
//         "felicidad": 100,
//         "higiene": 100
//       },
//       "accesoriosEnUso": [],
//       "accesoriosGanados": [],
//       "_id": "642b29043fd10d97610e396a"
//     }
//   }