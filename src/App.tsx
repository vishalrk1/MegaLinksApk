/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CategoriesCard from './components/Cards/CategoriesCard';
import {CATEGORIES_DATA} from './utils/CategoriesData';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.headingSectionStyle}>
        <Text style={styles.headingTextStyle}>MEGA LINKS</Text>
      </View>
      <View style={styles.categoriesSectionStyle}>
        {CATEGORIES_DATA.map((item, index) => {
          return <CategoriesCard key={index} catItem={item} />;
        })}
      </View>
    </SafeAreaView>
  );
}

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
  },
});
export default App;
