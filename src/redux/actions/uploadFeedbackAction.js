import {
  UPLOAD_FEEDBACK_FAILURE,
  UPLOAD_FEEDBACK_REQUEST,
  UPLOAD_FEEDBACK_SUCCESS,
} from '../ActionTypes';
import {supabase} from '../supabaseClient';

export const uploadFeedbackAction = feedback => async dispatch => {
  dispatch({
    type: UPLOAD_FEEDBACK_REQUEST,
  });
  try {
    const {data, error} = await supabase
      .from('Feedback')
      .insert([feedback])
      .select();
    if (error) throw new Error((meddage = 'Error uploading feedback'));
    dispatch({
      type: UPLOAD_FEEDBACK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPLOAD_FEEDBACK_FAILURE,
      error: error.message,
    });
  }
};
