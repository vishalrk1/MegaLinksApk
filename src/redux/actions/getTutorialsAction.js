import {supabase} from '../supabaseClient';

const {
  FETCH_TUTORIALS_REQUEST,
  FETCH_TUTORIALS_SUCCESS,
  FETCH_TUTORIALS_FAILURE,
} = require('../ActionTypes');

export const fetchTutorials = () => async dispatch => {
  dispatch({
    type: FETCH_TUTORIALS_REQUEST,
  });
  try {
    let {data: Tutorial, error} = await supabase.from('Tutorial').select('*');
    if (error) throw error;
    dispatch({
      type: FETCH_TUTORIALS_SUCCESS,
      payload: Tutorial,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_TUTORIALS_FAILURE,
      error: error,
    });
  }
};
