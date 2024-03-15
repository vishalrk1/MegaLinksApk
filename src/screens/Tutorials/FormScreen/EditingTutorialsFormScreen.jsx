import 'react-native-get-random-values';
import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {
  ActivityIndicator,
  ProgressBarAndroidBase,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import FormCardWrapper from '../../../components/Forms/FormCardWrapper';
import ErrorMessage from '../../../components/ErrorMessage';
import CatPageHeader from '../../../components/CatPageHeader';
import {CATEGORIES_DATA} from '../../../utils/CategoriesData';
import {AppColors} from '../../../utils/Constants';
import {uploadTutorial} from '../../../redux/actions/uploadTutorialAction';
import {fetchEditingTools} from '../../../redux/actions/getEditinToolAction';
import TutorialFilters from '../../../components/TutorialFilters';
import {fetchTutorials} from '../../../redux/actions/getTutorialsAction';

const EditingTutorialsFormScreen = () => {
  const category = CATEGORIES_DATA[2];
  const [label, setLabel] = useState('');
  const [ytUrl, setYtUrl] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {uploading} = useSelector(state => state.uploadTutorial);
  const {editingTools, fetching: toolsFetching} = useSelector(
    state => state.getEditingTools,
  );
  const [selectedToolId, setSelectedToolId] = useState(
    'd4fc4557-38b4-4978-b8e5-04e8a0bb52fc',
  );

  const youtubeRegex_1 = /(?:https?:\/\/)?(?:www\.)?youtube\.com|youtu\.be/;
  const youtubeRegex_2 =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]{11}(&\S*)?$/;
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  const handleSubmit = () => {
    setError(false);
    if (!label || !ytUrl) {
      setError(true);
      setErrorMessage('Please fill all the fields !!');
      return;
    } else if (!youtubeRegex_1.test(ytUrl)) {
      console.log(ytUrl);
      setError(true);
      setErrorMessage('Invalid tutorial url :(');
      return;
    }

    const payload = {
      id: uuidv4(),
      label: label,
      ytUrl: ytUrl,
      editingToolId: selectedToolId,
      categoryId: '7d4b3674-be06-4bcd-9c9c-d737078bfe93',
      isApproved: true,
      isFeatured: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    try {
      dispatch(uploadTutorial(payload));
    } catch (error) {
      console.log(error);
    } finally {
      setLabel('');
      setYtUrl('');
      setTimeout(() => {
        dispatch(fetchTutorials());
        navigation.navigate('EditingTutorialsScreen', {...category});
      }, 1500);
    }
  };

  useEffect(() => {
    if (editingTools.length === 0) {
      dispatch(fetchEditingTools());
    }
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 4,
      }}>
      <View style={{...styles.cardStyle, flex: 1}}>
        <CatPageHeader
          catName={category.name}
          catDescription={category.description}
          catImageUrl={category.imageUrl}
        />
      </View>
      <View style={{margin: 10}}>
        <FormCardWrapper
          headerTitle="Share Your Pack 🤠"
          onPressSubmit={handleSubmit}>
          {uploading ? (
            <ActivityIndicator size="large" color={AppColors.blueBg} />
          ) : (
            <View style={{flexDirection: 'column', gap: 12}}>
              <TextInput
                label="Tutorial Name"
                mode="outlined"
                style={styles.nameInput}
                value={label}
                onChangeText={setLabel}
                activeOutlineColor={AppColors.blueBg}
              />
              <TextInput
                mode="outlined"
                label="Tutorial Link"
                style={styles.nameInput}
                value={ytUrl}
                onChangeText={setYtUrl}
                activeOutlineColor={AppColors.blueBg}
              />
              {toolsFetching ? (
                <ActivityIndicator
                  size="large"
                  color="coral"
                  style={{margin: 10}}
                />
              ) : (
                <TutorialFilters
                  editingTools={editingTools}
                  selectedToolId={selectedToolId}
                  setSelectedToolId={setSelectedToolId}
                  btnColor={AppColors.blueBg}
                  txtColor="white"
                />
              )}
            </View>
          )}
          {error && <ErrorMessage message={errorMessage} />}
        </FormCardWrapper>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  nameInput: {
    width: '100%',
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
  messageInput: {
    height: 90,
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  cardStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
});

export default EditingTutorialsFormScreen;
