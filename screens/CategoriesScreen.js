import { useDispatch, useSelector } from 'react-redux';

import CategoryGridItem from '../components/CategoryGridItem';
import { FlatList } from 'react-native';
import React from 'react';
import { selectCategory } from '../store/actions/category.actions';

const CategoriesScreen = ({ navigation }) => {
  
  const dispatch = useDispatch();
  /** */
  const categories = useSelector(state => state.categories.list);
  const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('BreadCategory', {
      name: item.name,
    });
  }
  const renderItem = ({ item }) => <CategoryGridItem item={item} onSelected={handleSelectedCategory} />
  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  )
}

export default CategoriesScreen;
