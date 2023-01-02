import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Registration from '../screens/registration';
import Login from '../screens/login';
import Home from '../screens/Home';
import Product from '../screens/Product';
import OrderBook from '../screens/OrderBook';
import AddPizza from '../screens/admin/AddPizza';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false,}} name="splash" component={Splash} />
                <Stack.Screen options={{ headerShown: false,}} name='register' component={Registration}/>
                <Stack.Screen options={{ headerShown: false,}} name='login' component={Login}/>
                <Stack.Screen name='Home' component={Home}/> 
                <Stack.Screen name='product' component={Product}/> 
                <Stack.Screen name='Order Booking' component={OrderBook}/> 
                <Stack.Screen name='Admin' component={AddPizza}/> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;