import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AppColors} from '../../utils/Constants';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import CatPageHeader from '../../components/CatPageHeader';
import {fetchScenePacks} from '../../redux/actions/scenepackAction';
import ScenepackCard from '../../components/Cards/ScenepackCard';

const SceenpackScreen = ({route, navigation}) => {
  const {catId, catName, catImageUrl, catDescription} = route.params;
  const dispatch = useDispatch();
  const {scenePacks, fetching} = useSelector(state => state.getScenepack);
  ``;
  useEffect(() => {
    dispatch(fetchScenePacks());
  }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
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
            showsVerticalScrollIndicator= {false}
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
