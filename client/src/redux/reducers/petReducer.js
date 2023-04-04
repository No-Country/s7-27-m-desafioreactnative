const initialState = {
  isLoading: false,
  error: false,
  pet: null,
};

const petReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_PET_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        error: false,
        pet: null,
      };
    case POST_PET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        pet: payload,
      };
    case POST_PET_DATA_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: payload,
        pet: null,
      };
    case GET_PET_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        error: payload,
        pet: null,
      };
    case GET_PET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        pet: payload,
      };
    case GET_PET_DATA_REJECTED:
      return {
        ...state,
        isLoading,
        error: payload,
        pet: null,
      };
    default:
      return { ...state };
  }
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