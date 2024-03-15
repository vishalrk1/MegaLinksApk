import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppColors} from '../utils/Constants';

const TutorialFilters = ({
  editingTools,
  selectedToolId,
  setSelectedToolId,
  btnColor = AppColors.lightpurple,
  txtColor = 'black',
}) => {
  return (
    <ScrollView
      horizontal
      style={{height: 44, marginBottom: 12, paddingHorizontal: 8}}
      showsHorizontalScrollIndicator={false}>
      {editingTools.map((item, index) => {
        return (
          <TouchableOpacity
            disabled={item.id === selectedToolId}
            activeOpacity={0.9}
            onPress={() => setSelectedToolId(item.id)}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 4,
              marginHorizontal: 4,
              paddingHorizontal: 20,
              borderRadius: 10,
              backgroundColor:
                item.id === selectedToolId ? 'white' : btnColor,
              borderWidth: item.id === selectedToolId ? 1 : 0,
              borderColor: 'black',
            }}
            key={index}>
            <Text
              style={{
                color: item.id === selectedToolId ? 'black' : txtColor,
                fontWeight: '600',
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
      <View style={{width: 16}} />
    </ScrollView>
  );
};

styles = StyleSheet.create({});

export default TutorialFilters;
