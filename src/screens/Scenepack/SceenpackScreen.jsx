import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {AppColors} from '../../utils/Constants';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import CatPageHeader from '../../components/CatPageHeader';

const SceenpackScreen = ({route, navigation}) => {
  const {catId, catName, catImageUrl, catDescription} = route.params;
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.scenepacksSectionStyle}>
        <CatPageHeader
          catId={catId}
          catName={catName}
          catImageUrl={catImageUrl}
          catDescription={catDescription}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: AppColors.blueBg,
    height: '100%',
    flex: 1,
  },
  scenepacksSectionStyle: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 20,
    padding: 20,
  },
  pageTitleSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 30,
    width: '100%',
  },
  pageTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: AppColors.black,
    marginLeft: 10,
    marginTop: 10,
  },
  pageDescriptionText: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
  },
});

export default SceenpackScreen;
