import {
  FETCH_ANIME_RAWS_FAILURE,
  FETCH_ANIME_RAWS_REQUEST,
  FETCH_ANIME_RAWS_SUCCESS,
} from '../ActionTypes';
import {supabase} from '../supabaseClient';

export const fetchAnimeRaw = () => async dispatch => {
  dispatch({
    type: FETCH_ANIME_RAWS_REQUEST,
  });
  try {
    let {data: Animepack, error} = await supabase.from('Animepack').select('*');
    if (error) throw error;
    dispatch({
      type: FETCH_ANIME_RAWS_SUCCESS,
      payload: Animepack,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_ANIME_RAWS_FAILURE,
      error: error?.message,
    });
  }
};
