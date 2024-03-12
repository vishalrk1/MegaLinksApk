import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Home/HomeScreen';
import SceenpackScreen from './Scenepack/SceenpackScreen';
import {AppColors} from '../utils/Constants';
import AnimeRawsScreen from './Animeraws/AnimeRawsScreen';
import TutorialsScreen from './Tutorials/TutorialsScreen';
import ProjectfilesScreen from './Projectfiles/ProjectfilesScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CurstomDrawer from '../components/drawer/Drawer';
import AboutScreen from './AboutScreen/AboutScreen';
import SubmitDataScreen from './Submitdata/SubmitDataScreen';
import FeedbackScreen from './Feedbacks/FeedBackScreen';
import EditingToolDropdown from '../components/Dropdown/Dropdown';
import UserFeedbackScreen from './Feedbacks/sectionScreens/UserFeedbacksScreen';
import UserFeedbackFormScreen from './Feedbacks/sectionScreens/UserFeedbackFormScreen';
import ScenePackFormScreen from './Scenepack/FormScreen/ScenePackFormScreen';
import AnimeRawsFormScreen from './Animeraws/FormsScreen/AnimeRawsFormScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CurstomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: AppColors.purpleBg,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          headerTitle: '',
        }}
      />
      <Drawer.Screen
        name="Submit Your Data"
        component={SubmitDataScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: '#fff',
        }}
      />
      <Drawer.Screen
        name="User Feedbacks"
        component={FeedbackScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: '#fff',
        }}
      />
      <Drawer.Screen
        name="About Us"
        component={AboutScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: '#fff',
        }}
      />
    </Drawer.Navigator>
  );
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: AppColors.blueBg,
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
            width: 0,
          },
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '500',
        },
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="HomeDrawer"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ScenePackScreen"
        component={SceenpackScreen}
        options={{headerTitle: 'Scene Pack'}}
      />
      <Stack.Screen
        name="AnimeRawsScreen"
        component={AnimeRawsScreen}
        options={{headerTitle: 'Anime Raws'}}
      />
      <Stack.Screen
        name="EditingTutorialsScreen"
        component={TutorialsScreen}
        options={{
          headerTitle: 'Editing Tutorials',
        }}
      />
      <Stack.Screen
        name="ProjectFilesScreen"
        component={ProjectfilesScreen}
        options={{headerTitle: 'Project Files'}}
      />
      <Stack.Screen
        name="UserFeedbackScreen"
        component={UserFeedbackScreen}
        options={{headerTitle: 'User Feedbacks'}}
      />
      <Stack.Screen
        name="UserFeedbackFormScreen"
        component={UserFeedbackFormScreen}
        options={{headerTitle: 'Add your feedback'}}
      />
      <Stack.Screen
        name="ScenePackFormScreen"
        component={ScenePackFormScreen}
        options={{headerTitle: 'Add your Scene Pack'}}
      />
      <Stack.Screen
        name="AnimeRawsFormScreen"
        component={AnimeRawsFormScreen}
        options={{headerTitle: 'Add your Anime Pack'}}
      />
    </Stack.Navigator>
  );
};
