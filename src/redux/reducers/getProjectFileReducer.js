import { FETCH_PROJECT_FILE_FAILURE, FETCH_PROJECT_FILE_REQUESTB, FETCH_PROJECT_FILE_SUCCESS } from "../ActionTypes";


const initialState = {
  projectFiles: [],
  fetching: true,
  error: null,
  uploading: false,
};

export const getProjectFileReducer = (state = initialState, ation) => {
  switch (ation.type) {
    case FETCH_PROJECT_FILE_REQUESTB:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_PROJECT_FILE_SUCCESS:
      return {
        ...state,
        projectFiles: ation.payload,
        fetching: false,
      };
    case FETCH_PROJECT_FILE_FAILURE:
      return {
        ...state,
        fetching: false,
        error: ation.error,
      };
    default:
      return state;
  }
};
