import { BREADS } from '../data/bags';
import BagItem from '../components/BagItem';
import { FlatList } from 'react-native';
import React from 'react';

const CategoryBagScreen = ({ navigation, route }) => {
  const data = BREADS.filter(item => item.category === route.params.categoryID);
  const handleSelected = (item) => {
    navigation.navigate('DetailBread', {
      item,
      name: item.name,
    });
  }
  const renderItem = ({ item }) => <BagItem item={item} onSelected={handleSelected} />

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  )
}

export default CategoryBagScreen;
