import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { AppColors } from '../utils/Constants';

const CatPageHeader = ({catName, catImageUrl, catDescription}) => {
  return (
    <View style={styles.headerSection}>
      <View style={styles.image}>
        <Image
          source={{uri: catImageUrl}}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 50,
            objectFit: 'cover',
          }}
        />
      </View>
      <View style={{flexDirection: 'column', flex: 1}}>
        <Text style={styles.pageTitleText}>{catName}</Text>
        <Text style={styles.pageDescriptionText}>{catDescription}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    // borderBottomWidth: 1,
    // borderBottomColor: 'gray',
    // borderBottomStyle: 'dotted',
    // padding: 4,
    // paddingBottom: 10,
  },
  pageTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: AppColors.black,
    marginLeft: 10,
    marginTop: 4,
    color: ''
  },
  pageDescriptionText: {
    fontSize: 15,
    color: 'gray',
    marginLeft: 10,
    fontWeight: '400'
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

export default CatPageHeader;
