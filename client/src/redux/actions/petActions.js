import { URL_BACK } from "../../config";
import { POST_PET_DATA_PENDING, POST_PET_DATA_REJECTED, POST_PET_DATA_SUCCESS } from "../types/petTypes";

const getPetData = {};

const postPetData = (payload, id) => {
  return async function (dispatch) {
    dispatch({ type: POST_PET_DATA_PENDING });
    try {
      const { data } = axios.post(`${URL_BACK}/${id}/nosabemostodavia`, payload);
      return dispatch({ type: POST_PET_DATA_SUCCESS, payload: data });
    } catch (error) {
      return dispatch({ type: POST_PET_DATA_REJECTED, payload: error });
    }
  };
};
