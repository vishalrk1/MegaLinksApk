import {
  FETCH_SCENE_PACKS_FAILURE,
  FETCH_SCENE_PACKS_REQUEST,
  FETCH_SCENE_PACKS_SUCCESS,
} from '../ActionTypes';

const initialState = {
  scenePacks: [],
  fetching: false,
  error: null,
  uploading: false,
};

export const scenePackReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCENE_PACKS_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case FETCH_SCENE_PACKS_SUCCESS:
      return {
        ...state,
        scenePacks: action.payload,
        fetching: false,
        error: null,
      };
    case FETCH_SCENE_PACKS_FAILURE:
      return {
        ...state,
        fetching: true,
        error: action.error,
      };
    default:
      return state
  }
};
