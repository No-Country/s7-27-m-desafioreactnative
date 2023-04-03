import {
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_PENDING,
  REGISTER_USER_REJECTED,
  REGISTER_USER_SUCCESS,
} from "../types/authTypes";

const initialState = {
  isLoading: false,
  userData: null,
  id: null,
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
        id: null,
      };
    case LOGIN_USER_REJECTED:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: payload,
        id: null,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        id: payload.id,
        error: null,
      };
    case REGISTER_USER_PENDING:
      return {
        ...state,
        isLoading: true,
        user: null,
        error: null,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        error: null,
      };
    case REGISTER_USER_REJECTED:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: payload,
      };
    default:
      return { ...state };
  }
};
