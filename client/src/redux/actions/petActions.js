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
} from "../types/petTypes";



export function getPet(id) {
  return async (dispatch) => {
    dispatch({ type: GET_PET_REQUEST });
    try {
      const {data} = await axios.get(`${URL_BACK}/mascota/${id}`);
      dispatch({ type: GET_PET_SUCCESS, payload: data.nuevaMascota});
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
};

export function PetAction(id, payload) {
  return async (dispatch) => {
    dispatch({ type: ACTION_PET_REQUEST });
    try {
      const {data} = await axios.post(`${URL_BACK}/mascota/${id}`, payload);
      console.log(data);
      dispatch({ type: ACTION_PET_SUCCESS, payload: data.nuevaMascota});
    } catch (error) {
      dispatch({ type: ACTION_PET_FAILURE, payload: error.message });
    }
  };
}

