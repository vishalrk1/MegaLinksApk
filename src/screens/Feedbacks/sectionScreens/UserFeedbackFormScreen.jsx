import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import FormCardWrapper from '../../../components/Forms/FormCardWrapper';

const UserFeedbackFormScreen = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const payload = {
        userName: name,
        message: message,
        categoryId: '258620ae-f888-4170-906d-65339d11787a',
    }
    console.log(payload);
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
