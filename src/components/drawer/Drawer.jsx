import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import DrawerHeader from './drawer-header';
import {AppColors} from '../../utils/Constants';

const CurstomDrawer = props => {
  console.log('props', props.state.index);
  // const {user, isLoggedIn} = useContext(AuthContext);
  return (
    <View style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <DrawerHeader />
      <View style={{flex: 2, marginTop: 10}}>
        <DrawerContentScrollView {...props}>
          {props.state.routes.map((item, index) => {
            console.log('item', item);
            return (
              <TouchableOpacity
                key={index}
                onPress={() => props.navigation.navigate(item.name)}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 16,
                    marginHorizontal: 10,
                    borderBottomWidth: 1,
                    borderRadius: 10,
                    borderBottomColor: '#ccc',
                    backgroundColor:
                      props.state.index === index
                        ? AppColors.purpleBg
                        : 'transparent',
                  }}>
                  <Text
                    style={{
                      color: props.state.index === index ? 'white' : 'black',
                      fontWeight: 'bold',
                      fontSize: 18,
                      marginLeft: 10,
                    }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </DrawerContentScrollView>
      </View>
      {/* <DrawerFooter isLoggedIn={isLoggedIn} /> */}
    </View>
  );
};

export default CurstomDrawer;
