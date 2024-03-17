import React, {useState} from 'react';
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
import {uploadScenepack} from '../../../redux/actions/uploadScenepacksAction';

import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {useNavigation} from '@react-navigation/native';
import {fetchScenePacks} from '../../../redux/actions/scenepackAction';

const ScenePackFormScreen = () => {
  const category = CATEGORIES_DATA[0];
  const [label, setLabel] = useState('');
  const [packUrl, setPackUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [credit, setCredit] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {uploading} = useSelector(state => state.uploadScenepack);

  const imageExtensionRegex = /\.(png|jpg)$/;
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  const handleSubmit = () => {
    setError(false);
    if (!label || !packUrl || !imageUrl || !credit) {
      setError(true);
      setErrorMessage('Please fill all the fields !!');
      return;
    } else if (
      !imageExtensionRegex.test(imageUrl) &&
      !urlRegex.test(imageUrl)
    ) {
      setError(true);
      setErrorMessage('Incorrect Image Link !!');
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
      imageUrl: imageUrl,
      credit: credit,
      categoryId: '653ead2e-ba7d-4bb9-8dbf-cfd392ee6815', // 653ead2e-ba7d-4bb9-8dbf-cfd392ee6815
      isApproved: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    try {
      dispatch(uploadScenepack(payload));
      setTimeout(() => {
        dispatch(fetchScenePacks());
        navigation.navigate('ScenePackScreen', {...category});
      }, 1500);
      setLabel('');
      setPackUrl('');
      setImageUrl('');
      setCredit('');
      setError(false);
      setErrorMessage('');
    } catch (error) {
      console.log(error);
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
          {!uploading ? (
            <View style={{flexDirection: 'column', gap: 12}}>
              <TextInput
                label="Character Name"
                mode="outlined"
                style={styles.nameInput}
                value={label}
                onChangeText={setLabel}
                activeOutlineColor={AppColors.blueBg}
              />
              <TextInput
                mode="outlined"
                label="Scenepack link"
                style={styles.nameInput}
                value={packUrl}
                onChangeText={setPackUrl}
                activeOutlineColor={AppColors.blueBg}
              />
              <TextInput
                label="Image Link"
                mode="outlined"
                style={styles.nameInput}
                value={imageUrl}
                onChangeText={setImageUrl}
                activeOutlineColor={AppColors.blueBg}
              />
              <TextInput
                label="Credits"
                mode="outlined"
                style={styles.nameInput}
                value={credit}
                onChangeText={setCredit}
                activeOutlineColor={AppColors.blueBg}
              />
            </View>
          ) : (
            <ActivityIndicator size="large" color={AppColors.blueBg} />
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

export default ScenePackFormScreen;
