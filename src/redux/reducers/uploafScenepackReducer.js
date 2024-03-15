import {
  UPLOAD_SCENE_PACK_FAILURE,
  UPLOAD_SCENE_PACK_REQUEST,
  UPLOAD_SCENE_PACK_SUCCESS,
} from '../ActionTypes';

const initialState = {
  packData: [],
  uploading: false,
  error: null,
};

export const uploadScenePackReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_SCENE_PACK_REQUEST:
      return {
        ...state,
        uploading: true,
        error: null,
      };
    case UPLOAD_SCENE_PACK_SUCCESS:
      return {
        ...state,
        packData: action?.payload,
        uploading: false,
        error: null,
      };
    case UPLOAD_SCENE_PACK_FAILURE:
      return {
        ...state,
        uploading: true,
        error: action?.error,
      };
    default:
      return state;
  }
};
