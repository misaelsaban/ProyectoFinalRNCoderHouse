import BagDetailScreen from "../screens/BagDetailScreen";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBagScreen from '../screens/CategoryBagScreen';
import Colors from '../constants/colors';
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const BagNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
      }}
    >
      <Stack.Screen
        name="Home"
        component={CategoriesScreen}
        options={{ title: 'MASHA BAGS' }}
      />
      <Stack.Screen
        name="BreadCategory"
        component={CategoryBagScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="DetailBread"
        component={BagDetailScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default BagNavigator;