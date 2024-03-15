import {
  UPLOAD_ANIME_RAW_FAILURE,
  UPLOAD_ANIME_RAW_REQUEST,
  UPLOAD_ANIME_RAW_SUCESS,
} from '../ActionTypes';

const initialState = {
  rawData: [],
  uploading: false,
  error: null,
};

export const uploadAnimeRawReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_ANIME_RAW_REQUEST:
      return {
        ...state,
        uploading: true,
      };
    case UPLOAD_ANIME_RAW_SUCESS:
      return {
        ...state,
        uploading: false,
        rawData: action.payload,
      };
    case UPLOAD_ANIME_RAW_FAILURE:
      return {
        ...state,
        uploading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
