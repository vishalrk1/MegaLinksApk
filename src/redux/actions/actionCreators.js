import { FETCH_SCENE_PACKS_FAILURE, FETCH_SCENE_PACKS_REQUEST, FETCH_SCENE_PACKS_SUCCESS, UPLOAD_SCENE_PACK_FAILURE, UPLOAD_SCENE_PACK_REQUEST, UPLOAD_SCENE_PACK_SUCCESS } from "../ActionTypes";

// Action Creators
export const fetchScenePacksRequest = () => ({
  type: FETCH_SCENE_PACKS_REQUEST,
});

export const fetchScenePacksSuccess = scenePacks => ({
  type: FETCH_SCENE_PACKS_SUCCESS,
  payload: scenePacks,
});

export const fetchScenePacksFailure = error => ({
  type: FETCH_SCENE_PACKS_FAILURE,
  payload: error,
});

export const uploadScenePackRequest = () => ({
  type: UPLOAD_SCENE_PACK_REQUEST,
});

export const uploadScenePackSuccess = () => ({
  type: UPLOAD_SCENE_PACK_SUCCESS,
});

export const uploadScenePackFailure = error => ({
  type: UPLOAD_SCENE_PACK_FAILURE,
  payload: error,
});
