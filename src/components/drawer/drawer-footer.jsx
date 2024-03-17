import React, {useContext} from 'react';
import {Alert, Share, View} from 'react-native';
import {LogOut, Settings, Share2} from 'lucide-react-native';
import DrawerListItem from './DrawerListItem';
import {AppColors} from '../../utils/Constants';
// import {logoutUser} from '../../utils/authUtils';
// import {AuthContext} from '../../context/auth-context';

const DrawerFooter = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Unlock your video editing potential with Megalinks!: https://play.google.com/store/apps/details?id=com.vk.MegaLinks',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          Alert.alert(
            'Thankyou for sharing Megalinks! We appreciate your support! 😎❤️',
          );
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  //   const {setUser, setIsLoggedIn} = useContext(AuthContext);

  //   const handelLogout = async () => {
  //     logoutUser();
  //     setUser(null);
  //     setIsLoggedIn(false);
  //   };

  return (
    <View
      style={{
        flex: 0.2,
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
        borderTopColor: 'gray',
        borderTopWidth: 1,
        paddingTop: 10,
      }}>
      <DrawerListItem
        bgColor={'white'}
        icon={<Share2 size={20} color={'black'} />}
        nameTitle="Share"
        titleColor="black"
        fontWeight="bold"
        onPress={onShare}
      />
    </View>
  );
};

export default DrawerFooter;
