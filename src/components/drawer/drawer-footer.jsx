import React, {useContext} from 'react';
import {View} from 'react-native';
import {LogOut, Settings, Share2} from 'lucide-react-native';
import DrawerListItem from './DrawerListItem';
import {AppColors} from '../../utils/Constants';
// import {logoutUser} from '../../utils/authUtils';
// import {AuthContext} from '../../context/auth-context';

const DrawerFooter = () => {
  //   const {setUser, setIsLoggedIn} = useContext(AuthContext);

  //   const handelLogout = async () => {
  //     logoutUser();
  //     setUser(null);
  //     setIsLoggedIn(false);
  //   };

  return (
    <View
      style={{
        flex: 0.4,
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
        borderTopColor: 'gray',
        borderTopWidth: 1,
        paddingTop: 10,
      }}>
      <DrawerListItem
        bgColor={'white'}
        icon={<Settings size={20} color={'black'} />}
        nameTitle="Settings"
        titleColor="black"
        fontWeight='bold'
        onPress={() => {}}
      />
      <DrawerListItem
        bgColor={'white'}
        icon={<Share2 size={20} color={'black'} />}
        nameTitle="Share"
        titleColor="black"
        fontWeight='bold'
        onPress={() => {}}
      />
    </View>
  );
};

export default DrawerFooter;
