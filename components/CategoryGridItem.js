import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';

const CategoryGridItem = ({ item, onSelected }) => {
  const TouchableComponent = Platform.OS === 'android' && Platform.version >= 21
    ? TouchableNativeFeedback
    : TouchableOpacity;

  return (
    <View style={styles.gridItem}>
      <TouchableComponent
        onPress={() => onSelected(item)}
        style={{ ...styles.container, backgroundColor: item.color }}
      >
        <View>
          <Text styles={styles.titulos}>{item.name}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: 6,
    margin: 10,
    height: 150
  },
  container: {
    flex: 1,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  titulos: {
    fontSize:100
    
  }
});

export default CategoryGridItem;