import {
  UPLOAD_TUTORIAL_FAILURE,
  UPLOAD_TUTORIAL_REQUEST,
  UPLOAD_TUTORIAL_SUCCESS,
} from '../ActionTypes';

const initialState = {
  tutData: [],
  uploading: false,
  error: null,
};

export const uploadTutorialReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_TUTORIAL_REQUEST:
      return {
        ...state,
        uploading: true,
      };
    case UPLOAD_TUTORIAL_SUCCESS:
      return {
        ...state,
        uploading: false,
        tutData: action.payload,
      };
    case UPLOAD_TUTORIAL_FAILURE:
      return {
        ...state,
        uploading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
