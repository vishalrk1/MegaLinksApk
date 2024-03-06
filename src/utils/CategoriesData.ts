import {Category} from '../redux/types';

export const CATEGORIES_DATA = [
  {
    id: '1',
    name: 'Anime Raws',
    imageUrl: '../../assets/categoryImages/Cat1.jpg',
    description: 'Get high quality anime raws here',
  },
  {
    id: '2',
    name: 'Scene Packs',
    imageUrl: '../../assets/categoryImages/Cat3.jpg',
    description: 'movies, web series characters scene packs',
  },
  {
    id: '3',
    name: 'Editing Tutorials',
    imageUrl: '../../assets/categoryImages/Cat2.jpg',
    description: 'Editing tutorials for beginners',
  },
  {
    id: '4',
    name: 'Project Files',
    imageUrl: '../../assets/categoryImages/Cat4.jpg',
    description: 'Free Project files for AE, AM and SVP',
  },
] as Category[];

export const IMAGE_PATHS = {
  '1': '../../assets/categoryImages/Cat1.jpg',
  '2': '../../assets/categoryImages/Cat3.jpg',
  '3': '../../assets/categoryImages/Cat2.jpg',
  '4': '../../assets/categoryImages/Cat4.jpg',
};
