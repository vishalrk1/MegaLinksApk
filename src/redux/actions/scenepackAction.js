import {
  FETCH_SCENE_PACKS_FAILURE,
  FETCH_SCENE_PACKS_REQUEST,
  FETCH_SCENE_PACKS_SUCCESS,
} from '../ActionTypes';
import {supabase} from '../supabaseClient';

export const fetchScenePacks = () => async dispatch => {
  dispatch({
    type: FETCH_SCENE_PACKS_REQUEST,
  });
  try {
    let {data, error} = await supabase
      .from('Scenepack')
      .select('*')
      .order('isFeatured', {ascending: false});

    if (error) throw error;

    dispatch({
      type: FETCH_SCENE_PACKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_SCENE_PACKS_FAILURE,
      error: error,
    });
  }
};
