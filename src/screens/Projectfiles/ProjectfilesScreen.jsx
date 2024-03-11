import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {AppColors} from '../../utils/Constants';
import CatPageHeader from '../../components/CatPageHeader';
import { fetchProjectFileAction } from '../../redux/actions/getProjectFileAction';

const ProjectfilesScreen = ({route, navigation}) => {
  const {catId, catName, catImageUrl, catDescription} = route.params;
  const {projectFiles, fetching, error} = useSelector(state => state.getProjectFiles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectFileAction());
  }, []);

  console.log('projectFiles', projectFiles);
  console.log('fetching', fetching);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.pageSectionStyle}>
        <CatPageHeader
          catName={catName}
          catImageUrl={catImageUrl}
          catDescription={catDescription}
        />
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
    padding: 20,
  },
});

export default ProjectfilesScreen;
