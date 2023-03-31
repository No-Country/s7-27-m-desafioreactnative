import {
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,
  LOGIN_USER_SUCCESS,
} from "../types/authTypes";

const initialState = {
  isLoading: false,
  userData: null,
  token: null,
  error: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_PENDING:
      return {
        ...state,
        isLoading: true,
        user: null,
        error: null,
        token: null,
      };
    case LOGIN_USER_REJECTED:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: payload,
        token: null,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        token: true,
        // CAMBIAR AL CONECTAR EL BACK
        // token: payload.token,
        error: null,
      };
    default:
      return { ...state };
  }
};
