import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CategoriesCard from '../../components/Cards/CategoriesCard';

import {CATEGORIES_DATA} from '../../utils/CategoriesData';
import CategoriesSection from './sections/CategoriesSection';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.headingSectionStyle}>
        <Text style={styles.headingTextStyle}>MEGA LINKS</Text>
      </View>
      <CategoriesSection />
      {/* <View style={styles.categoriesSectionStyle}>
        {CATEGORIES_DATA.map((item, index) => {
          return <CategoriesCard key={index} catItem={item} />;
        })}
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#f551f5',
    height: '100%',
    flex: 1,
  },
  headingSectionStyle: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
    height: '10%',
  },
  headingTextStyle: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  categoriesSectionStyle: {
    height: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    paddingTop: 50,
  },
});

export default HomeScreen;
