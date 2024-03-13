import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CategoriesCard from '../../../components/Cards/CategoriesCard';
import {CATEGORIES_DATA} from '../../../utils/CategoriesData';

const CategoriesSection = () => {
  return (
    <ScrollView style={styles.categoriesSectionStyle}>
      {CATEGORIES_DATA.map((item, index) => {
        return <CategoriesCard key={index} catItem={item} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoriesSectionStyle: {
    height: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 10,
    paddingTop: 50,
  },
});

export default CategoriesSection;
