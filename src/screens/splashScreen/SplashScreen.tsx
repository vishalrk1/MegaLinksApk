import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TypingAnimation} from 'react-native-typing-animation';

const SplashScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        gap: 8,
      }}>
      <Image
        source={require('../../assets/logo/M3.jpg')}
        style={{height: 120, width: 120, objectFit: 'cover', borderRadius: 10}}
      />
      <View
        style={{
          marginTop: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
        }}>
        <ActivityIndicator size="large" color="coral" />
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          MegaLinks
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
