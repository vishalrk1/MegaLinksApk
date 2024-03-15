import {
  UPLOAD_ANIME_RAW_FAILURE,
  UPLOAD_ANIME_RAW_REQUEST,
  UPLOAD_ANIME_RAW_SUCESS,
} from '../ActionTypes';
import {supabase} from '../supabaseClient';

export const uploadAnimeRaw = animeRaw => async dispatch => {
  dispatch({
    type: UPLOAD_ANIME_RAW_REQUEST,
  });
  try {
    const {data, error} = await supabase
      .from('Animepack')
      .insert([animeRaw])
      .select();

    if (error) throw error;
    dispatch({
      type: UPLOAD_ANIME_RAW_SUCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPLOAD_ANIME_RAW_FAILURE,
      error: error?.message,
    });
  }
};
