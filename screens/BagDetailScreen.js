import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const BagDetailScreen = ({ route }) => {
  return (
    <View style={styles.screen}>
      <Image source={{uri: route.params.item.img}} style={styles.imageItem} />
      <Text style={styles.title}>{route.params.item.name}</Text>
      <Text style={styles.description}>{route.params.item.description}</Text>
      <Text style={styles.price}>${route.params.item.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    marginTop: 1,
    padding: 20
  },
  imageItem:{
    width: 200, 
    height: 200,
  },
  title:{
    fontSize: 60,
    fontFamily: 'open-sans-bold',
    fontWeight: 'bold',
    marginTop:10
  },
  description:{
    fontSize: 20,
    fontFamily: 'open-sans',
    fontWeight: 'normal',
    marginTop:10
  },
  price:{
    fontSize: 40,
    fontFamily: 'open-sans-bold',
    marginTop:10
  }
});

export default BagDetailScreen;
