import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import FormCardWrapper from '../../../components/Forms/FormCardWrapper';

const ScenePackFormScreen = () => {
  const [label, setLabel] = useState('');
  const [packUrl, setPackUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [credit, setCredit] = useState('');

  const handleSubmit = () => {
    const payload = {
        label: label,
        packUrl: packUrl,
        imageUrl: imageUrl,
        credit: credit,
        categoryId: 'd5ce972f-6454-4638-a765-c9adf9e6094b',
        isApproved: true,
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
        headerTitle={'Share your packs 😎'}
        onPressSubmit={handleSubmit}>
        <View
          style={{
            marginVertical: 4,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 12,
          }}>
          <TextInput
            placeholder="Character Name"
            style={styles.nameInput}
            value={label}
            onChangeText={setLabel}
          />
          <TextInput
            placeholder="Scenepack link"
            style={styles.nameInput}
            value={packUrl}
            onChangeText={setPackUrl}
          />
          <TextInput
            placeholder="jpg/png image link"
            style={styles.nameInput}
            value={imageUrl}
            onChangeText={setImageUrl}
          />
          <TextInput
            placeholder="Credis for pack"
            style={styles.nameInput}
            value={credit}
            onChangeText={setCredit}
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

export default ScenePackFormScreen;
