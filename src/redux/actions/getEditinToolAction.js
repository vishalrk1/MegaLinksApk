import {
  FETCH_EDITIN_TOOL_FAILURE,
  FETCH_EDITIN_TOOL_REQUEST,
  FETCH_EDITIN_TOOL_SUCESS,
} from '../ActionTypes';
import {supabase} from '../supabaseClient';

export const fetchEditingTools = () => async dispatch => {
  dispatch({
    type: FETCH_EDITIN_TOOL_REQUEST,
  });
  try {
    let {data: EditingTool, error} = await supabase
      .from('EditingTool')
      .select('*');

    if (error) throw error;
    dispatch({
      type: FETCH_EDITIN_TOOL_SUCESS,
      payload: EditingTool,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: FETCH_EDITIN_TOOL_FAILURE,
      error: error,
    });
  }
};
