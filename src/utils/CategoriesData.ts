import {Category, FormTile, InstaDetails} from '../redux/types';

export const CATEGORIES_DATA = [
  {
    id: '2',
    name: 'Scene Packs',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/editing-app-de1f1.appspot.com/o/CATEGORIES-IMAGES%2FCat3.jpg?alt=media&token=3a0f9869-a34e-4cc2-b1ef-99ba487197d5',
    description: 'movies, web series characters scene packs',
    screenName: 'ScenePackScreen',
  },
  {
    id: '1',
    name: 'Anime Raws',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/editing-app-de1f1.appspot.com/o/CATEGORIES-IMAGES%2FCat2.jpg?alt=media&token=0187bf02-2898-43a2-bdf9-a7258814f7ef',
    description: 'Get high quality anime raws here',
    screenName: 'AnimeRawsScreen',
  },
  {
    id: '3',
    name: 'Editing Tutorials',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/editing-app-de1f1.appspot.com/o/CATEGORIES-IMAGES%2Fblackpinks-jennie.jpg?alt=media&token=d5e2a33f-dea4-47b5-9ceb-0e15438edff7',
    description: 'Editing tutorials for beginners',
    screenName: 'EditingTutorialsScreen',
  },
  {
    id: '4',
    name: 'Project Files',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/editing-app-de1f1.appspot.com/o/CATEGORIES-IMAGES%2FCat1.jpg?alt=media&token=1ddf79a5-0b72-4e2c-aa1b-df41657a7fd1',
    description: 'Free Project files for AE, AM and SVP',
    screenName: 'ProjectFilesScreen',
  },
] as Category[];

export const FORMS_TILE_DATA = [
  {
    id: '1',
    title: 'Submit Scene Packs',
    description: 'Character name, pack link are required',
    screenName: 'ScenePackFormScreen',
  },
  {
    id: '2',
    title: 'Submit Anime Raw links',
    description: 'Anime name, raws link are required',
    screenName: 'AnimeRawsFormScreen',
  },
  {
    id: '3',
    title: 'Submit Editing Tutorials',
    description: 'Tutorial name, tutorial link are required',
    screenName: 'EditingTutorialsFormScreen',
  },
  // {
  //   id: '4',
  //   title: 'Submit Project Files',
  //   description: 'Project name, file link are required',
  //   screenName: 'ProjectFilesFormScreen',
  // },
] as FormTile[];

export const FEEDBACK_FORMS_TILE_DATA = [
  {
    id: '1',
    title: 'Read All Feedbacks',
    description: 'Checkout what people are saying about us',
    screenName: 'UserFeedbackScreen',
  },
  {
    id: '2',
    title: 'Submit you feedback',
    description: 'Tell us what you think about us',
    screenName: 'UserFeedbackFormScreen',
  },
] as FormTile[];

export const SOCIALS_DATA = [
  {
    title: 'Official Instagram Page',
    igLink: 'https://www.instagram.com/megalinks.official/',
    username: 'megalinks_official',
  },
  {
    title: 'Developer',
    igLink: 'https://www.instagram.com/editor_dragon/',
    username: 'editor_dragon',
  },
  {
    title: 'Developer',
    igLink: 'https://www.instagram.com/am_aep/',
    username: 'Am_aep',
  },
] as InstaDetails[];
