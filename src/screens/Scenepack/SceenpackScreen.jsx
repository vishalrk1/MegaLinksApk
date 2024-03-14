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
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const {scenePacks, fetching} = useSelector(state => state.getScenepack);
  const [filteredPacks, setFilteredPacks] = useState(scenePacks);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (scenePacks.length === 0) {
      console.log('getting packs.../');
      dispatch(fetchScenePacks());
    } else {
      setFilteredPacks(scenePacks);
    }
  }, [scenePacks]);

  useEffect(() => {
    setIsSearching(true);
    if (query !== '') {
      filterData(query);
    } else {
      setFilteredPacks(scenePacks);
      setIsSearching(false);
    }
  }, [query]);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Search
          color="white"
          size={20}
          style={{marginHorizontal: 12, marginRight: 16}}
          onPress={() => {
            if (showSearchBar) {
              setQuery('');
            }
            setShowSearchBar(!showSearchBar);
          }}
        />
      ),
    });
  }, [navigation, showSearchBar]);

  const filterData = query => {
    const filterData = scenePacks.filter(item => {
      return item.label.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredPacks(filterData);
    setIsSearching(false);
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View>
        {showSearchBar && (
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
        {fetching || isSearching ? (
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
            data={filteredPacks}
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
