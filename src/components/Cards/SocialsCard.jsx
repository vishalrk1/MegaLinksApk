import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ChevronRight} from 'lucide-react-native';
import {openUrlInBrowser} from '../../utils/utils';

const SocialsCard = ({item}) => {
  return (
    <TouchableOpacity
      style={styles.igCard}
      activeOpacity={0.9}
      onPress={() => openUrlInBrowser(item.igLink)}>
      <Image
        source={require('../../assets/socials/instagram.png')}
        style={{width: 40, height: 40, marginRight: 16}}
      />
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={{fontWeight: '600', color: 'black', fontSize: 16}}>
          {item.title}
        </Text>
        <Text style={{color: 'gray', fontSize: 14}}>{item.username}</Text>
      </View>
      <ChevronRight size={36} color={'gray'} style={{flex: 2}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  igCard: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 6,
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

export default SocialsCard;
