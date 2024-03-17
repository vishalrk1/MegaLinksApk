import 'react-native-get-random-values';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import {useNavigation} from '@react-navigation/native';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import FormCardWrapper from '../../../components/Forms/FormCardWrapper';
import {uploadFeedbackAction} from '../../../redux/actions/uploadFeedbackAction';
import {fetchUserFeedbackAction} from '../../../redux/actions/getFeedbacksAction';
import ErrorMessage from '../../../components/ErrorMessage';
import {AppColors} from '../../../utils/Constants';

const UserFeedbackFormScreen = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {uploading} = useSelector(state => state.uploadFeedback);

  const handleSubmit = () => {
    if (!name || !message) {
      setIsError(true);
      setErrorMessage('Please fill all the fields');
      return;
    }

    const payload = {
      id: uuidv4(),
      userName: name,
      message: message,
      categoryId: '258620ae-f888-4170-906d-65339d11787a',
      isFeatured: false,
      createdAt: new Date(),
    };

    try {
      dispatch(uploadFeedbackAction(payload));
      setTimeout(() => {
        dispatch(fetchUserFeedbackAction());
        navigation.navigate('UserFeedbackScreen');
      }, 1000);
      setMessage('');
      setName('');
      setIsError(false);
    } catch (error) {
      console.log(error);
      Alertert.alert('Error', 'Something went wrong, please try again');
      setIsError(true);
      setErrorMessage('Something went wrong, please try again');
      return;
    }
  };
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 20,
      }}>
      <FormCardWrapper
        headerTitle={'Tell us what you think'}
        onPressSubmit={handleSubmit}>
        {!uploading ? (
          <View
            style={{
              marginVertical: 4,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
            }}>
            <TextInput
              placeholder="Name"
              style={styles.nameInput}
              value={name}
              onChangeText={setName}
            />
            <TextInput
              placeholder="Message"
              numberOfLines={5}
              multiline={true}
              textAlignVertical="top"
              style={styles.messageInput}
              value={message}
              onChangeText={setMessage}
            />
          </View>
        ) : (
          <ActivityIndicator size="large" color={AppColors.blueBg} />
        )}
        {isError && <ErrorMessage message={errorMessage} />}
      </FormCardWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  nameInput: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 16,
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
});

export default UserFeedbackFormScreen;
