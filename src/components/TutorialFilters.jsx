import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableHighlight} from 'react-native';

const TutorialFilters = ({editingTools, selectedToolId, setSelectedToolId}) => {
  return (
    <ScrollView
      horizontal
      style={{height: 60, marginBottom: 12, paddingHorizontal: 12}}
      showsHorizontalScrollIndicator={false}>
      {editingTools.map((item, index) => {
        return (
          <TouchableHighlight
            onPress={() => setSelectedToolId(item.id)}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 4,
              marginHorizontal: 8,
              paddingHorizontal: 20,
              borderRadius: 10,
              backgroundColor: item.id === selectedToolId ? 'white' : 'black',
              borderWidth: item.id === selectedToolId ? 1 : 0,
              borderColor: 'black',
            }}
            key={index}>
            <Text
              style={{color: item.id === selectedToolId ? 'black' : 'white'}}>
              {item.title}
            </Text>
          </TouchableHighlight>
        );
      })}
    </ScrollView>
  );
};

styles = StyleSheet.create({});

export default TutorialFilters;
