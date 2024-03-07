import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import DrawerHeader from './drawer-header';
import {Home, CircleUser} from 'lucide-react-native';
import DrawerFooter from './drawer-footer';
import DrawerListItem from './DrawerListItem';
import {AppColors} from '../../utils/Constants';

const CurstomDrawer = props => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}>
      <DrawerHeader />
      <View style={{flex: 2, marginTop: 10}}>
        <DrawerContentScrollView {...props}>
          {props.state.routes.map((item, index) => {
            let icon;
            if (item.name === 'Home') {
              icon = (
                <Home
                  size={20}
                  style={{
                    color: props.state.index === index ? 'white' : 'black',
                  }}
                />
              );
            } else if (item.name === 'About Us') {
              icon = (
                <CircleUser
                  size={22}
                  style={{
                    color: props.state.index === index ? 'white' : 'black',
                  }}
                />
              );
            }
            return (
              <DrawerListItem
                nameTitle={item.name}
                icon={icon}
                key={index}
                bgColor={
                  props.state.index === index
                    ? AppColors.purpleBg
                    : 'transparent'
                }
                titleColor={props.state.index === index ? 'white' : 'black'}
                fontWeight={props.state.index === index ? 'bold' : 'normal'}
                onPress={() => props.navigation.navigate(item.name)}
              />
            );
          })}
        </DrawerContentScrollView>
      </View>
      <DrawerFooter />
    </View>
  );
};

export default CurstomDrawer;
