import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AppColors} from '../../utils/Constants';
import CatPageHeader from '../../components/CatPageHeader';
import {fetchProjectFileAction} from '../../redux/actions/getProjectFileAction';

const ProjectfilesScreen = ({route, navigation}) => {
  const {
    id: catId,
    name: catName,
    imageUrl: catImageUrl,
    description: catDescription,
  } = route.params;
  const {projectFiles, fetching, error} = useSelector(
    state => state.getProjectFiles,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectFileAction());
  }, []);
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.pageSectionStyle}>
        <CatPageHeader
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
        projectFiles.length === 0 && (
          <Text style={{color: AppColors.orangeBg, fontSize: 20}}>
            Project files will be added soon
          </Text>
        )
      )}
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
