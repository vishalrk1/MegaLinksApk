import {
  FETCH_PROJECT_FIEL_FAILURE,
  FETCH_PROJECT_FIEL_REQUEST,
  FETCH_PROJECT_FIEL_SUCESS,
} from '../ActionTypes';

const initialState = {
  projectFiles: [],
  fetching: false,
  error: null,
  uploading: false,
};

export const getProjectFileReducer = (state = initialState, ation) => {
  switch (ation.type) {
    case FETCH_PROJECT_FIEL_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_PROJECT_FIEL_SUCESS:
      return {
        ...state,
        projectFiles: ation.payload,
        fetching: false,
      };
    case FETCH_PROJECT_FIEL_FAILURE:
      return {
        ...state,
        fetching: false,
        error: ation.error,
      };
    default:
      return state;
  }
};
