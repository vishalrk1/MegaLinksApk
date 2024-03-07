import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.backgroundStyle}>
      <View
        style={{
          height: 220,
        }}>
        <Image
          source={require('../../assets/Banners/AboutHeader.jpg')}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: '100%',
    flex: 1,
  },
});

export default AboutScreen;
