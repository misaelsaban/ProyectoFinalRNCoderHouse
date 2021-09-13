import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import TouchableComponent from './TouchableComponent';

const BagItem = ({ item, onSelected }) => {
  return (
    <TouchableComponent onPress={() => onSelected(item)} style={styles.bagItem}>
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <View>
        <Image source={{uri: item.img}} style={styles.imageItem} />
      </View>
    </TouchableComponent>
  );
}

const styles = StyleSheet.create({
  bagItem: {
    height: 150,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: "wrap",
    backgroundColor: '#ccc',
    margin: 20,
    padding: 10
  },
  imageItem:{
    width: 130, 
    height: 130,
  },
  title: {
    textAlign:'left',
    fontSize: 30,
    fontFamily: 'open-sans-bold',
    fontWeight: 'bold',
  },
  price: {
    textAlign:'left',
    fontFamily: 'open-sans',
  },
});

export default BagItem;