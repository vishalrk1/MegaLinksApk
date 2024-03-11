import {Alert, Linking} from 'react-native';

export const openUrlInBrowser = url => {
  Linking.openURL(url)
    .then(supported => {
      if (!supported) {
        Alert.alert(`Can't handle url: ${url}`);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch(err => console.error('An error occurred', err));
};
