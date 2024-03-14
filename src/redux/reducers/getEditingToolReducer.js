import {
  FETCH_EDITIN_TOOL_FAILURE,
  FETCH_EDITIN_TOOL_REQUEST,
  FETCH_EDITIN_TOOL_SUCESS,
} from '../ActionTypes';

const initialState = {
  editingTools: [],
  fetching: true,
  error: null,
};

export const editingToolsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EDITIN_TOOL_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case FETCH_EDITIN_TOOL_SUCESS:
      return {
        ...state,
        editingTools: action.payload,
        fetching: false,
        error: null,
      };
    case FETCH_EDITIN_TOOL_FAILURE:
      return {
        ...state,
        fetching: true,
        error: action.error,
      };
    default:
      return state;
  }
};
