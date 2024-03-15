import 'react-native-get-random-values';
import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {
  ActivityIndicator,
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
import {uploadAnimeRaw} from '../../../redux/actions/uploadAnimeRawAction';
import {fetchAnimeRaw} from '../../../redux/actions/getAnimeDataAction';

const AnimeRawsFormScreen = () => {
  const category = CATEGORIES_DATA[1];
  const [label, setLabel] = useState('');
  const [packUrl, setPackUrl] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {uploading} = useSelector(state => state.uploadAnimeRaw);

  const imageExtensionRegex = /\.(png|jpg)$/;
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  const handleSubmit = () => {
    setError(false);
    if (!label || !packUrl || !description) {
      setError(true);
      setErrorMessage('Please fill all the fields !!');
      return;
    } else if (!urlRegex.test(packUrl)) {
      setError(true);
      setErrorMessage('Invalid Pack url');
      return;
    }

    const payload = {
      id: uuidv4(),
      label: label,
      packUrl: packUrl,
      description: description,
      categoryId: '2a54818c-0c2e-4231-9449-9eb1840b60c6',
      isApproved: true,
      isFeatured: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    try {
      dispatch(uploadAnimeRaw(payload));
      setTimeout(() => {
        dispatch(fetchAnimeRaw());
        navigation.navigate('AnimeRawsScreen', {...category});
      }, 1500);
    } catch (error) {
      console.log(error);
      setError(true);
      setErrorMessage(error);
    }
  };

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
                label="Anime Name"
                mode="outlined"
                style={styles.nameInput}
                value={label}
                onChangeText={setLabel}
                activeOutlineColor={AppColors.blueBg}
              />
              <TextInput
                mode="outlined"
                label="Pack link"
                style={styles.nameInput}
                value={packUrl}
                onChangeText={setPackUrl}
                activeOutlineColor={AppColors.blueBg}
              />
              <TextInput
                label="Description"
                mode="outlined"
                numberOfLines={3}
                style={{
                  height: 100,
                  textAlignVertical: 'top',
                  textAlign: 'left',
                }}
                value={description}
                onChangeText={setDescription}
                activeOutlineColor={AppColors.blueBg}
              />
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
  },
  messageInput: {
    height: 90,
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
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

export default AnimeRawsFormScreen;
