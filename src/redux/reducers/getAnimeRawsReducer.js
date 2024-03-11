import {
  FETCH_ANIME_RAWS_FAILURE,
  FETCH_ANIME_RAWS_REQUEST,
  FETCH_ANIME_RAWS_SUCCESS,
} from '../ActionTypes';

const initialState = {
  animeRaws: [],
  fetching: true,
  error: null,
  uploading: false,
};

export const getAnimeRawsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANIME_RAWS_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_ANIME_RAWS_SUCCESS:
      return {
        ...state,
        animeRaws: action.payload,
        fetching: false,
      };
    case FETCH_ANIME_RAWS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
