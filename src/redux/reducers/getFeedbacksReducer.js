import {
  FETCH_USER_FEEDBACKS_FAILURE,
  FETCH_USER_FEEDBACKS_REQUEST,
  FETCH_USER_FEEDBACKS_SUCCESS,
} from '../ActionTypes';

const initialState = {
  feedbacks: [],
  fetching: true,
  error: null,
  uploading: false,
};

export const getFeedbacksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_FEEDBACKS_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_USER_FEEDBACKS_SUCCESS:
      return {
        ...state,
        fetching: false,
        feedbacks: action.payload,
      };
    case FETCH_USER_FEEDBACKS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
