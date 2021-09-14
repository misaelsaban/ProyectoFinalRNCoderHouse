import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useSelector } from 'react-redux';

const BagDetailScreen = () => {
  const data = useSelector(state => state.bags.list)
  const bagID = useSelector(state => state.bags.selectedId)
  const bag = data.filter(item => item.id === bagID);
  const datos = bag[0]

  return (
    <View style={styles.screen}>
      <Image source={{uri: datos.img}} style={styles.imageItem} />
      <Text style={styles.title}>{datos.name}</Text>
      <Text style={styles.description}>{datos.description}</Text>
      <Text style={styles.price}>$ {datos.price}</Text>
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
