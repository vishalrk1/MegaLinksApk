import {
  FETCH_PROJECT_FIEL_FAILURE,
  FETCH_PROJECT_FIEL_REQUEST,
  FETCH_PROJECT_FIEL_SUCESS,
} from '../ActionTypes';

export const getProjectFileAction = () => async dispatch => {
  dispatch({
    type: FETCH_PROJECT_FIEL_REQUEST,
  });
  try {
    let {data: Projectfile, error} = await supabase
      .from('Projectfile')
      .select('*');
    if (error) throw error;
    dispatch({
      type: FETCH_PROJECT_FIEL_SUCESS,
      payload: Projectfile,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PROJECT_FIEL_FAILURE,
      error: error?.message,
    });
  }
};
