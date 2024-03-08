import React, {useCallback, useState} from 'react';
import {
  Alert,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {AppColors} from '../../utils/Constants';

const ScenepackCard = ({item}) => {
  const openUrlInBrowser = url => {
    Linking.openURL(url)
      .then(supported => {
        if (!supported) {
          Alert.alert(`Can't handle url: ${url}`);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error('An error occurred', err));
  };

  return (
    <View style={styles.cardStyle}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: item.imageUrl,
        }}
        resizeMode="cover"
      />
      <View
        style={{
          width: '100%',
          marginTop: 10,
          paddingHorizontal: 10,
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <Text style={styles.textStyle} numberOfLines={1}>
            {item.label}
          </Text>
          <Text style={styles.descriptionStyle}>{item.credit}</Text>
        </View>
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() => openUrlInBrowser(item.packUrl)}>
          <Text style={styles.buttonTextStyle}>Get Pack</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    height: 280,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  imageStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  textStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionStyle: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '500',
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: AppColors.orangeBg,
    borderRadius: 10,
    paddingHorizontal: 32,
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ScenepackCard;
