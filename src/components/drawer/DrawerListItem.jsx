import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../../utils/Constants';

const DrawerListItem = ({
  nameTitle,
  icon,
  bgColor,
  onPress,
  titleColor = 'black',
  fontWeight = 'normal',
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: 12,
          marginHorizontal: 10,
          marginVertical: 2,
          borderRadius: 10,
          backgroundColor: bgColor,
        }}>
        {icon}
        <Text
          style={{
            color: titleColor,
            fontWeight: fontWeight,
            fontSize: 16,
            marginLeft: 10,
          }}>
          {nameTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DrawerListItem;
