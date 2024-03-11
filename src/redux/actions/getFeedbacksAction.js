import {
  FETCH_USER_FEEDBACKS_FAILURE,
  FETCH_USER_FEEDBACKS_REQUEST,
  FETCH_USER_FEEDBACKS_SUCCESS,
} from '../ActionTypes';
import { supabase } from '../supabaseClient';

export const fetchUserFeedbackAction = () => async dispatch => {
  dispatch({
    type: FETCH_USER_FEEDBACKS_REQUEST,
  });
  try {
    let {data: Feedback, error} = await supabase.from('Feedback').select('*');
    if (error) throw error;
    dispatch({
      type: FETCH_USER_FEEDBACKS_SUCCESS,
      payload: Feedback,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_USER_FEEDBACKS_FAILURE,
      error: error.message,
    });
  }
};
