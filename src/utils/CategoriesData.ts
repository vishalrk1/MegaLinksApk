import {Category} from '../redux/types';

export const CATEGORIES_DATA = [
  {
    id: '1',
    name: 'Anime Raws',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/editing-app-de1f1.appspot.com/o/CATEGORIES-IMAGES%2FCat1.jpg?alt=media&token=1ddf79a5-0b72-4e2c-aa1b-df41657a7fd1',
    description: 'Get high quality anime raws here',
    screenName: 'AnimeRawsScreen',
  },
  {
    id: '2',
    name: 'Scene Packs',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/editing-app-de1f1.appspot.com/o/CATEGORIES-IMAGES%2FCat3.jpg?alt=media&token=3a0f9869-a34e-4cc2-b1ef-99ba487197d5',
    description: 'movies, web series characters scene packs',
    screenName: 'ScenePackScreen',
  },
  {
    id: '3',
    name: 'Editing Tutorials',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/editing-app-de1f1.appspot.com/o/CATEGORIES-IMAGES%2FCat2.jpg?alt=media&token=0187bf02-2898-43a2-bdf9-a7258814f7ef',
    description: 'Editing tutorials for beginners',
    screenName: 'EditingTutorialsScreen',
  },
  {
    id: '4',
    name: 'Project Files',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/editing-app-de1f1.appspot.com/o/CATEGORIES-IMAGES%2FCat4.jpg?alt=media&token=f672ec17-cc0f-4403-8c2b-f800c7663d97',
    description: 'Free Project files for AE, AM and SVP',
    screenName: 'ProjectFilesScreen',
  },
] as Category[];
