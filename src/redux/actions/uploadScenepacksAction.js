import {
  UPLOAD_SCENE_PACK_FAILURE,
  UPLOAD_SCENE_PACK_REQUEST,
  UPLOAD_SCENE_PACK_SUCCESS,
} from '../ActionTypes';
import {supabase} from '../supabaseClient';

export const uploadScenepack = packData => async dispatch => {
  dispatch({
    type: UPLOAD_SCENE_PACK_REQUEST,
  });
  try {
    console.log([packData]);
    const {data, error} = await supabase
      .from('Scenepack')
      .insert([{...packData}])
      .select();

    if (error) throw error;
    dispatch({
      type: UPLOAD_SCENE_PACK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPLOAD_SCENE_PACK_FAILURE,
      error: error,
    });
  }
};
