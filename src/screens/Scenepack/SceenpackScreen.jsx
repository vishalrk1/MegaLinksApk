import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {AppColors} from '../../utils/Constants';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import CatPageHeader from '../../components/CatPageHeader';
import {fetchScenePacks} from '../../redux/actions/scenepackAction';
import ScenepackCard from '../../components/Cards/ScenepackCard';
import {Appbar} from 'react-native-paper';
import {Search} from 'lucide-react-native';

const SceenpackScreen = ({route, navigation}) => {
  const {catId, catName, catImageUrl, catDescription} = route.params;
  const dispatch = useDispatch();
  const [isSearching, setIsSearching] = useState(false);
  const {scenePacks, fetching} = useSelector(state => state.getScenepack);
  const [filteredPacks, setFilteredPacks] = useState(scenePacks);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // dispatch(fetchScenePacks());
  }, []);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Search
          color="white"
          size={20}
          style={{marginHorizontal: 12, marginRight: 16}}
          onPress={() => setIsSearching(!isSearching)}
        />
      ),
    });
  }, [navigation, isSearching]);

  const filterData = query => {
    console.log(query);
    const filteredData = scenePacks.filter(item => {
      const itemData = item.label ? item.label.toUpperCase() : ''.toUpperCase();
      const textData = query;
      return itemData.includes(textData);
    });
    setFilteredPacks(filterData);
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View>
        {isSearching && (
          <TextInput
            onChangeText={query => setQuery(query)}
            value={query}
            style={{
              padding: 10,
              paddingHorizontal: 12,
              backgroundColor: 'white',
              marginHorizontal: 12,
              borderRadius: 10,
            }}
            placeholder="Search"
          />
        )}
      </View>
      <View style={styles.scenepacksSectionStyle}>
        <View style={{padding: 20}}>
          <CatPageHeader
            catId={catId}
            catName={catName}
            catImageUrl={catImageUrl}
            catDescription={catDescription}
          />
        </View>
        {fetching ? (
          <View
            style={{
              height: '50%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator
              size={50}
              color={AppColors.orangeBg}
              style={{height: 100, width: 100}}
            />
          </View>
        ) : (
          <FlatList
            style={{width: '100%', paddingVertical: 10}}
            showsVerticalScrollIndicator={false}
            data={scenePacks}
            renderItem={({item}) => <ScenepackCard item={item} />}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: AppColors.blueBg,
    height: '100%',
    flex: 1,
  },
  scenepacksSectionStyle: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 20,
    // padding: 20,
  },
});

export default SceenpackScreen;
