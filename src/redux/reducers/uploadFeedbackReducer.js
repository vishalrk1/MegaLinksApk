import {
  UPLOAD_FEEDBACK_FAILURE,
  UPLOAD_FEEDBACK_REQUEST,
  UPLOAD_FEEDBACK_SUCCESS,
} from '../ActionTypes';

const initialState = {
  feedback: {},
  uploading: false,
  error: null,
};

export const uploadFeedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_FEEDBACK_REQUEST:
      return {
        ...state,
        uploading: true,
      };
    case UPLOAD_FEEDBACK_SUCCESS:
      return {
        ...state,
        uploading: false,
        feedback: action.payload,
      };
    case UPLOAD_FEEDBACK_FAILURE:
      return {
        ...state,
        uploading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
