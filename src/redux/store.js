import {configureStore} from '@reduxjs/toolkit';

import {scenePackReducer} from './reducers/getScenepackReducer';
import {tutorialsReducer} from './reducers/getTutorialsReducer';
import {editingToolsReducer} from './reducers/getEditingToolReducer';
import {getFeedbacksReducer} from './reducers/getFeedbacksReducer';
import {getProjectFileReducer} from './reducers/getProjectFileReducer';
import {getAnimeRawsReducer} from './reducers/getAnimeRawsReducer';

export const store = configureStore({
  reducer: {
    getScenepack: scenePackReducer,
    getTutorials: tutorialsReducer,
    getEditingTools: editingToolsReducer,
    getProjectFiles: getProjectFileReducer,
    getFeedbacks: getFeedbacksReducer,
    getAnimeRaws: getAnimeRawsReducer,
  },
});
