import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

const FeedbackScreen = () => {
  return (
    <ScrollView style={styles.backgroundStyle}>
      <View
        style={{
          height: 250,
        }}>
        <Image
          source={require('../../assets/Banners/FeedbackHeader.jpg')}
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

export default FeedbackScreen;
