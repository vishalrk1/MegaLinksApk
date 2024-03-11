import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const FormCardWrapper = ({children, headerTitle, onPressSubmit}) => {
  return (
    <View style={styles.card}>
      <View style={{width: '100%'}}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>{headerTitle}</Text>
        </View>
        {children}
        <View style={styles.footerContainer}>
          <TouchableHighlight style={styles.btnStyle}>
            <Text style={styles.btnText} onPress={onPressSubmit}>
              Submit
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
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
  btnStyle: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: 'coral',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 10,
    // borderTopWidth: 1,
    // borderTopColor: 'lightgrey',
    paddingTop: 10,
  },
});

export default FormCardWrapper;
