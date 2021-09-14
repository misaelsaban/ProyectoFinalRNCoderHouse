import { useDispatch, useSelector } from 'react-redux';

import BagItem from '../components/BagItem';
import { FlatList } from 'react-native';
import React from 'react';
import { selectBag } from '../store/actions/bags.actions';

const CategoryBagScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const categoryID = useSelector(state => state.categories.selectedId)
  const BAGS = useSelector(state => state.bags.list)
  const data = BAGS.filter(item => item.category === categoryID);
  
  const handleSelected = (item) => {
    dispatch(selectBag(item.id));

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
