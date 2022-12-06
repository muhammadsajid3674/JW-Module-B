// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../screens/products';
import ProductDetails from '../screens/productDetails';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Products} />
        <Stack.Screen name="Product" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;