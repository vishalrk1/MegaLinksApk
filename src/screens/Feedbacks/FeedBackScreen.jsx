import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {FEDBACK_SCREEN_DESCRIPTION} from '../../utils/Constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FEEDBACK_FORMS_TILE_DATA} from '../../utils/CategoriesData';
import NewSectionTile from '../../components/Cards/NewSectionTile';

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
      <SafeAreaView style={{padding: 10}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'left',
            color: '#000',
          }}>
          User Feedbacks
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'left',
            marginTop: 4,
            lineHeight: 20,
          }}>
          {FEDBACK_SCREEN_DESCRIPTION}
        </Text>
        {FEEDBACK_FORMS_TILE_DATA.map((item, index) => {
          return <NewSectionTile item={item} key={index} />;
        })}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default FeedbackScreen;
