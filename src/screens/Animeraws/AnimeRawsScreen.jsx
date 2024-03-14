import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppColors} from '../../utils/Constants';
import CatPageHeader from '../../components/CatPageHeader';
import {fetchAnimeRaw} from '../../redux/actions/getAnimeDataAction';
import AnimeRawCard from '../../components/Cards/AnimeRawCard';

const AnimeRawsScreen = ({route, navigation}) => {
  const {catId, catName, catImageUrl, catDescription} = route.params;
  const dispatch = useDispatch();
  const {animeRaws, fetching} = useSelector(state => state.getAnimeRaws);

  useEffect(() => {
    if (animeRaws.length === 0) {
      dispatch(fetchAnimeRaw());
    }
  }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.pageSectionStyle}>
        <View style={{padding: 20, paddingBottom: 10}}>
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
            style={{width: '100%'}}
            showsVerticalScrollIndicator={false}
            data={animeRaws}
            renderItem={({item}) => <AnimeRawCard item={item} />}
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
  pageSectionStyle: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 20,
  },
});

export default AnimeRawsScreen;
