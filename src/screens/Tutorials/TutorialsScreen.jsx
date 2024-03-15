import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {AppColors} from '../../utils/Constants';
import CatPageHeader from '../../components/CatPageHeader';
import {fetchTutorials} from '../../redux/actions/getTutorialsAction';
import TutorialkCard from '../../components/Cards/TutorialsCard';
import {fetchEditingTools} from '../../redux/actions/getEditinToolAction';
import TutorialFilters from '../../components/TutorialFilters';

const TutorialsScreen = ({route, navigation}) => {
  const {
    id: catId,
    name: catName,
    imageUrl: catImageUrl,
    description: catDescription,
  } = route.params;
  const {tutorials, fetching, error} = useSelector(state => state.getTutorials);
  const {editingTools, fetching: toolsFetching} = useSelector(
    state => state.getEditingTools,
  );
  const [selectedToolId, setSelectedToolId] = useState(
    'd4fc4557-38b4-4978-b8e5-04e8a0bb52fc',
  );
  const [filteredTuts, setFilteredTuts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tutorials.length === 0 && editingTools.length === 0) {
      dispatch(fetchTutorials(catId));
      dispatch(fetchEditingTools());
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setFilteredTuts(filterTutorials(selectedToolId, tutorials));
    setIsLoading(false);
  }, [tutorials, selectedToolId]);

  const filterTutorials = (toolId, tutList) => {
    const newList = tutList.filter(item => item.editingToolId === toolId);
    return newList;
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.pageSectionStyle}>
        <View style={{padding: 20, paddingBottom: 12}}>
          <CatPageHeader
            catName={catName}
            catImageUrl={catImageUrl}
            catDescription={catDescription}
          />
        </View>
        <TutorialFilters
          editingTools={editingTools}
          selectedToolId={selectedToolId}
          setSelectedToolId={setSelectedToolId}
        />
        {fetching && isLoading ? (
          <View
            style={{
              height: '100%',
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
            data={filteredTuts}
            renderItem={({item}) => <TutorialkCard item={item} />}
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
  filtetBtnStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 4,
    backgroundColor: 'black',
  },
});

export default TutorialsScreen;
