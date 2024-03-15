import {UPLOAD_TUTORIAL_FAILURE, UPLOAD_TUTORIAL_REQUEST, UPLOAD_TUTORIAL_SUCCESS} from '../ActionTypes';
import { supabase } from '../supabaseClient';

export const uploadTutorial = tutorial => async dispatch => {
  dispatch({
    type: UPLOAD_TUTORIAL_REQUEST,
  });
  try {
    const {data, error} = await supabase
      .from('Tutorial')
      .insert([tutorial])
      .select();

    if (error) throw error;
    dispatch({
      type: UPLOAD_TUTORIAL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPLOAD_TUTORIAL_FAILURE,
      error: error,
    });
  }
};
