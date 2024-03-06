import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Category} from '../../redux/types';

interface CategoriesCardProps {
  catItem: Category;
}

const CategoriesCard: React.FC<CategoriesCardProps> = ({catItem}) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={{uri: catItem.imageUrl}}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 50,
              objectFit: 'cover',
            }}
          />
        </View>
        <View style={{marginHorizontal: 10, flex: 1, width: '100%'}}>
          <Text style={styles.title}>{catItem.name}</Text>
          <Text style={styles.description}>{catItem.description}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: 'gray',
  },
});

export default CategoriesCard;
