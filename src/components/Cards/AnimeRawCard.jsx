import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ChevronRight} from 'lucide-react-native';

const AnimeRawCard = ({item}) => {
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
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
      onPress={() => openUrlInBrowser(item.packUrl)}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
        <Text
          numberOfLines={2}
          style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
          {item.label}
        </Text>
        <Text
          numberOfLines={3}
          style={{fontSize: 14, fontWeight: '500', color: 'gray'}}>
          {item.description}
        </Text>
      </View>
      <ChevronRight size={36} color={'gray'} style={{flex: 2}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 18,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
});

export default AnimeRawCard;
