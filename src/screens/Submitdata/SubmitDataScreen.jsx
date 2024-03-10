import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ChevronRight} from 'lucide-react-native';
import {SUBMIT_SCREEN_DESCRIPTION} from '../../utils/Constants';
import {FORMS_TILE_DATA} from '../../utils/CategoriesData';

const SubmitDataScreen = () => {
  return (
    <ScrollView style={styles.backgroundStyle}>
      <View
        style={{
          height: 250,
        }}>
        <Image
          source={require('../../assets/Banners/SubmitDataHeader.jpg')}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </View>
      <SafeAreaView style={{paddingHorizontal: 10, paddingVertical: 10}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            marginBottom: 4,
            color: 'black',
          }}>
          Share Your Packs with us 😎!
        </Text>
        <Text style={{fontSize: 16, fontWeight: '500'}}>
          {SUBMIT_SCREEN_DESCRIPTION}
        </Text>
        {FORMS_TILE_DATA.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => {}}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}>
              <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
                {item.title}
              </Text>
              <Text style={{fontSize: 14, fontWeight: '500', color: 'gray'}}>
                {item.description}
              </Text>
            </View>
            <ChevronRight size={36} color={'gray'} />
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
    height: '100%',
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    padding: 20,
    borderRadius: 18,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
});

export default SubmitDataScreen;
