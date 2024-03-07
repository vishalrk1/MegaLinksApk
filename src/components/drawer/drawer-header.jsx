import React from 'react';
import {Image, Text, View} from 'react-native';

const DrawerHeader = () => {
  return (
    <View
      style={{
        flex: 0.6,
        backgroundColor: 'black',
        justifyContent: 'center',
      }}>
      {/* {isLoggedIn ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 12,
          }}>
          <Image
            source={require('../../assets/user-pfp.jpg')}
            style={{
              width: 70,
              height: 70,
              borderRadius: 100,
              borderColor: 'gray',
              borderWidth: 1,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              marginLeft: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {user.name}
            </Text>
            <Text style={{fontSize: 13, color: 'gray', overflow: 'hidden'}}>
              {user.email}
            </Text>
          </View>
        </View>
      ) : ( */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{
            height: '60%',
            width: '60%',
            objectFit: 'contain',
          }}
          source={require('../../assets/logo/M3.jpg')}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 12,
          }}>
          MegaLinks
        </Text>
      </View>
      {/* )} */}
    </View>
  );
};

export default DrawerHeader;
