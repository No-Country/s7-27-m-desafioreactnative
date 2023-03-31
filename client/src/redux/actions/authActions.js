import { URL_BACK } from "../../config";
import {
  LOGIN_USER_REJECTED,
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_PENDING,
  REGISTER_USER_REJECTED,
} from "../types/authTypes";

export const loginUser = (payload) => {
  return async function (dispatch) {
    dispatch({ type: LOGIN_USER_PENDING });
    try {
    //  ---- Descomentar una vez listo el form del login ----
      // const { data } = await axios.post(`${URL_BACK}/auth/iniciarsesion`, payload);
      return dispatch({ type: LOGIN_USER_SUCCESS /*, payload: data.usuario*/ });
    } catch (error) {
      return dispatch({ type: LOGIN_USER_REJECTED, payload: error });
    }
  };
};

const registerUser = (payload) => {
  return async function (dispatch) {
    dispatch({ type: REGISTER_USER_PENDING });
    try {
    //  ---- Descomentar una vez listo el form del registro ----
      // const { data } = await axios.post(`${URL_BACK}/auth/registro`, payload);
      return dispatch({ type: LOGIN_USER_SUCCESS /*, payload: data.usuario*/ });
    } catch (error) {
      return dispatch({ type: REGISTER_USER_REJECTED, payload: error });
    }
  };
};