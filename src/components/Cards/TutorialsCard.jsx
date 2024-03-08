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
import {Play} from 'lucide-react-native';

const TutorialkCard = ({item}) => {
  const openUrlInBrowser = url => {
    Linking.openURL(url)
      .then(supported => {
        if (!supported) {
          Alert.alert(`Can't handle url: ${url}`);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => Alert.alert('Something went wrong please try again later'));
  };

  const youtube_parser = url => {
    if (!url) {
      return '';
    }
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    const youtube_id = match && match[7].length == 11 ? match[7] : false;
    return `https://img.youtube.com/vi/${youtube_id}/mqdefault.jpg`;
  };

  return (
    <View style={styles.cardStyle}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: youtube_parser(item.ytUrl),
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
        <View
          style={{
            width: '100%',
            paddingHorizontal: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}>
          <Text style={styles.textStyle} numberOfLines={2}>
            {item.label}
          </Text>
          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={() => openUrlInBrowser(item.ytUrl)}>
            <View style={styles.buttonContentStyle}>
              <Play color={'white'} size={20} />
              <Text style={styles.buttonTextStyle}>Watch Now</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
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
    height: 150,
    borderRadius: 10,
  },
  textStyle: {
    color: 'black',
    fontSize: 17,
    fontWeight: '500',
  },
  descriptionStyle: {
    textAlign: 'left',
    color: 'gray',
    fontSize: 15,
    fontWeight: '500',
  },
  buttonStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: AppColors.orangeBg,
    borderRadius: 10,
    marginBottom: 6,
  },
  buttonContentStyle: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TutorialkCard;
