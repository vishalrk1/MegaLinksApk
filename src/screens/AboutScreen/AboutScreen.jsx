import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ABOUT_DISCLAIMER,
  ABOUT_PARA_1,
  ABOUT_PARA_2,
} from '../../utils/Constants';
import {SOCIALS_DATA} from '../../utils/CategoriesData';
import SocialsCard from '../../components/Cards/SocialsCard';
import {openUrlInBrowser} from '../../utils/utils';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.backgroundStyle}>
      <View
        style={{
          height: 250,
        }}>
        <Image
          source={require('../../assets/Banners/AboutHeader.jpg')}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </View>
      <SafeAreaView style={styles.detailsAreaStyle}>
        <Text style={styles.titleStyle}>MegaLinks 😎</Text>
        <Text style={styles.textStyle}>{ABOUT_PARA_1}</Text>
        <Text style={styles.textStyle}>{ABOUT_PARA_2}</Text>
        <View style={styles.warningContainer}>
          <Text style={{...styles.textStyle, fontWeight: '400', flex: 1}}>
            {ABOUT_DISCLAIMER}
          </Text>
        </View>
      </SafeAreaView>
      <SafeAreaView
        style={{
          padding: 10,
          borderBottomWidth: 1,
          borderColor: 'lightgray',
          marginBottom: 5,
        }}>
        <Text style={styles.titleStyle}>Socials</Text>
        <View>
          {SOCIALS_DATA.map((item, index) => (
            <SocialsCard item={item} key={index} />
          ))}
        </View>
      </SafeAreaView>
      <SafeAreaView style={{padding: 10}}>
        <Text style={styles.titleStyle}>Discord Community</Text>
        <TouchableOpacity
          activeOpacity={1}
          style={{...styles.dcCard, flexDirection: 'column', gap: 4}}>
          <Image
            source={require('../../assets/socials/discord.png')}
            style={{
              height: 200,
              width: '100%',
              objectFit: 'cover',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
          <TouchableOpacity
            activeOpacity={1}
            onPress={() =>
              openUrlInBrowser('https://discord.com/invite/PjfJsh9ty3')
            }
            style={{
              width: '100%',
              paddingVertical: 10,
              backgroundColor: 'coral',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              JOIN
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: '100%',
    backgroundColor: 'white',
    flex: 1,
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
  },
  textStyle: {
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
    lineHeight: 20,
  },
  detailsAreaStyle: {
    padding: 10,
    flexDirection: 'column',
    gap: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#FFCCCB',
    borderRadius: 10,
  },
  dcCard: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
});

export default AboutScreen;
