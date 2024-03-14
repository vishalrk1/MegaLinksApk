import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SUBMIT_SCREEN_DESCRIPTION} from '../../utils/Constants';
import {FORMS_TILE_DATA} from '../../utils/CategoriesData';
import NewSectionTile from '../../components/Cards/NewSectionTile';

const SubmitDataScreen = () => {
  return (
    <ScrollView style={styles.backgroundStyle}>
      <View
        style={{
          height: 250,
        }}>
        <Image
          source={require('../../assets/Banners/SubmitDataHeader.jpg')}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </View>
      <SafeAreaView style={{paddingHorizontal: 10, paddingVertical: 10}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            marginBottom: 4,
            color: 'black',
          }}>
          Share Your Packs with us 😎!
        </Text>
        <Text style={{fontSize: 16, fontWeight: '500', color: 'gray'}}>
          {SUBMIT_SCREEN_DESCRIPTION}
        </Text>
        {FORMS_TILE_DATA.map((item, index) => (
          <NewSectionTile item={item} key={index} />
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
    height: '100%',
    flex: 1,
  },
});

export default SubmitDataScreen;
