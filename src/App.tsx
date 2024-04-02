import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator, StackNavigator} from './screens/Navigator';
import {store} from './redux/store';
import BootSplash from "react-native-bootsplash";

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer onReady={() => {
        BootSplash.hide({ fade: true })
      }}>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
