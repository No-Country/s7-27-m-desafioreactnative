import { URL_BACK } from "../../config";
import {
  POST_PET_DATA_PENDING,
  POST_PET_DATA_REJECTED,
  POST_PET_DATA_SUCCESS,
  GET_PET_REQUEST,
  GET_PET_SUCCESS,
  GET_PET_FAILURE,
  ACTION_PET_FAILURE,
  ACTION_PET_REQUEST,
  ACTION_PET_SUCCESS,
  PLAY_PET_REQUEST,
  PLAY_PET_SUCCESS,
  PLAY_PET_FAILURE,
} from "../types/petTypes";
import axios from "axios";

export function getPet(id) {
  return async (dispatch) => {
    dispatch({ type: GET_PET_REQUEST });
    try {
      const { data } = await axios.get(`${URL_BACK}/mascota/${id}`);
      dispatch({ type: GET_PET_SUCCESS, payload: data.mascota });
    } catch (error) {
      dispatch({ type: GET_PET_FAILURE, payload: error.message });
    }
  };
}
export function postPetData(payload) {
  return async function (dispatch) {
    dispatch({ type: POST_PET_DATA_PENDING });
    try {
      const { data } = await axios.post(`${URL_BACK}/mascota`, payload);
      return dispatch({ type: POST_PET_DATA_SUCCESS, payload: { data } });
    } catch (error) {
      return dispatch({ type: POST_PET_DATA_REJECTED, payload: error });
    }
  };
}

export function petPlay(id, payload) {
  return async (dispatch) => {
    dispatch({ type: PLAY_PET_REQUEST });
    try {
      const { data } = await axios.post(`${URL_BACK}/mascota/${id}`, payload);
      dispatch({ type: PLAY_PET_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PLAY_PET_FAILURE, payload: error.message });
    }
  };
}

// import { URL_BACK } from "../../config";
// import {
//   POST_PET_DATA_PENDING,
//   POST_PET_DATA_REJECTED,
//   POST_PET_DATA_SUCCESS,
//   GET_PET_REQUEST,
//   GET_PET_SUCCESS,
//   GET_PET_FAILURE,
//   FEED_PET_REQUEST,
//   FEED_PET_SUCCESS,
//   FEED_PET_FAILURE,
//   PLAY_PET_REQUEST,
//   PLAY_PET_SUCCESS,
//   PLAY_PET_FAILURE,
//   SLEEP_PET_REQUEST,
//   SLEEP_PET_SUCCESS,
//   SLEEP_PET_FAILURE,
//   CLEAN_PET_REQUEST,
//   CLEAN_PET_SUCCESS,
//   CLEAN_PET_FAILURE,
// } from "../types/petTypes";

// export function getPet(id) {
//   return async (dispatch) => {
//     dispatch({ type: GET_PET_REQUEST });
//     try {
//       const {data} = await axios.get(`${URL_BACK}/mascota/${id}`);
//       dispatch({ type: GET_PET_SUCCESS, payload: {data}});
//     } catch (error) {
//       dispatch({ type: GET_PET_FAILURE, payload: error.message });
//     }
//   };
// }
// export function postPetData(payload) {
//   return async function (dispatch) {
//     dispatch({ type: POST_PET_DATA_PENDING });
//     try {
//       const { data } = await axios.post(`${URL_BACK}/mascota`, payload);
//       return dispatch({ type: POST_PET_DATA_SUCCESS, payload: { data } });
//     } catch (error) {
//       return dispatch({ type: POST_PET_DATA_REJECTED, payload: error });
//     }
//   };
// };

// export function feedPetAction(id, payload) {
//   return async (dispatch) => {
//     dispatch({ type: FEED_PET_REQUEST });
//     try {
//       const {data} = await axios.post(`${URL_BACK}/mascota/${id}`, payload);
//       dispatch({ type: FEED_PET_SUCCESS, payload: data.mascota.caracteristicas.energia});
//     } catch (error) {
//       dispatch({ type: FEED_PET_FAILURE, payload: error.message });
//     }
//   };
// }

// export function playPetAction(id, payload) {
//   return async (dispatch) => {
//     dispatch({ type: PLAY_PET_REQUEST });
//     try {
//       const {data} = await axios.post(`${URL_BACK}/mascota/${id}`, payload);
//       dispatch({ type: PLAY_PET_SUCCESS, payload: data.mascota.caracteristicas.felicidad});
//     } catch (error) {
//       dispatch({ type: PLAY_PET_FAILURE, payload: error.message });
//     }
//   };
// }

// export function sleepPetAction(id, payload) {
//   return async (dispatch) => {
//     dispatch({ type: SLEEP_PET_REQUEST });
//     try {
//       const {data} = await axios.post(`${URL_BACK}/mascota/${id}`, payload);
//       dispatch({ type: SLEEP_PET_SUCCESS, payload: data.mascota.caracteristicas.sueno});
//     } catch (error) {
//       dispatch({ type: SLEEP_PET_FAILURE, payload: error.message });
//     }
//   };
// }

// export function cleanPetAction(id, payload) {
//   return async (dispatch) => {
//     dispatch({ type: CLEAN_PET_REQUEST });
//     try {
//       const {data} = await axios.post(`${URL_BACK}/mascota/${id}`, payload);
//       dispatch({ type: CLEAN_PET_SUCCESS, payload: data.mascota.caracteristicas.higiene});
//     } catch (error) {
//       dispatch({ type: CLEAN_PET_FAILURE, payload: error.message });
//     }
//   };
// }

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
