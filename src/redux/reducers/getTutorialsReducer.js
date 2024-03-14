import {
  FETCH_TUTORIALS_FAILURE,
  FETCH_TUTORIALS_REQUEST,
  FETCH_TUTORIALS_SUCCESS,
} from '../ActionTypes';

const initialState = {
  tutorials: [],
  fetching: true,
  error: null,
  uploading: false,
};

export const tutorialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TUTORIALS_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case FETCH_TUTORIALS_SUCCESS:
      return {
        ...state,
        fetching: false,
        tutorials: action.payload,
      };
    case FETCH_TUTORIALS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
