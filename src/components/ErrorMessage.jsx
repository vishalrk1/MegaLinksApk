import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ErrorMessage = ({message}) => {
  return (
    <View style={styles.warningContainer}>
      <Image
        source={require('../assets/trianglealert.png')}
        style={{height: 24, width: 24, objectFit: 'cover'}}
      />
      <Text style={{...styles.textStyle, fontWeight: '400', flex: 1}}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#ffcdcc',
    borderRadius: 10,
    marginTop: 12,
    gap: 12
  },
  textStyle: {
    fontSize: 15,
    color: 'red',
    lineHeight: 20,
  },
});

export default ErrorMessage;
