import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import FormCardWrapper from '../../../components/Forms/FormCardWrapper';
import ErrorMessage from '../../../components/ErrorMessage';
import CatPageHeader from '../../../components/CatPageHeader';
import {CATEGORIES_DATA} from '../../../utils/CategoriesData';
import {AppColors} from '../../../utils/Constants';

const EditingTutorialsFormScreen = () => {
  const category = CATEGORIES_DATA[2];
  const [label, setLabel] = useState('');
  const [ytUrl, setYtUrl] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)[\w\-]{11}$/;
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  const handleSubmit = () => {
    setError(false);
    if (!label || !ytUrl || !description) {
      setError(true);
      setErrorMessage('Please fill all the fields !!');
      return;
    } else if (!youtubeRegex.test(ytUrl)) {
      setError(true);
      setErrorMessage('Invalid tutorial url');
      return;
    }

    const payload = {
      label: label,
      ytUrl: ytUrl,
      description: description,
      categoryId: '7d4b3674-be06-4bcd-9c9c-d737078bfe93',
      isApproved: true,
      isFeatured: false,
    };
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

export default EditingTutorialsFormScreen;
