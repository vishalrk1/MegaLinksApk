import {
  FETCH_PROJECT_FILE_FAILURE,
  FETCH_PROJECT_FILE_REQUESTB,
  FETCH_PROJECT_FILE_SUCCESS,
} from '../ActionTypes';
import {supabase} from '../supabaseClient';

export const fetchProjectFileAction = () => async dispatch => {
  dispatch({
    type: FETCH_PROJECT_FILE_REQUESTB,
  });
  try {
    let {data: Projectfile, error} = await supabase
      .from('Projectfile')
      .select('*');
    console.log(Projectfile);
    if (error) throw error;
    dispatch({
      type: FETCH_PROJECT_FILE_SUCCESS,
      payload: Projectfile,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_PROJECT_FILE_FAILURE,
      error: error?.message,
    });
  }
};
