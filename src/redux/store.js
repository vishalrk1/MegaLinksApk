import {configureStore} from '@reduxjs/toolkit';

import {scenePackReducer} from './reducers/getScenepackReducer';
import {tutorialsReducer} from './reducers/getTutorialsReducer';
import {editingToolsReducer} from './reducers/getEditingToolReducer';
import {getFeedbacksReducer} from './reducers/getFeedbacksReducer';
import {getProjectFileReducer} from './reducers/getProjectFileReducer';
import {getAnimeRawsReducer} from './reducers/getAnimeRawsReducer';
import {uploadScenePackReducer} from './reducers/uploafScenepackReducer';
import {uploadTutorialReducer} from './reducers/uploadTutorialReducer';
import {uploadAnimeRawReducer} from './reducers/uploadAnimeRawReducer';

export const store = configureStore({
  reducer: {
    getScenepack: scenePackReducer,
    getTutorials: tutorialsReducer,
    getEditingTools: editingToolsReducer,
    getProjectFiles: getProjectFileReducer,
    getFeedbacks: getFeedbacksReducer,
    getAnimeRaws: getAnimeRawsReducer,
    uploadScenepack: uploadScenePackReducer,
    uploadTutorial: uploadTutorialReducer,
    uploadAnimeRaw: uploadAnimeRawReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 128},
      serializableCheck: {warnAfter: 128},
    }),
});
