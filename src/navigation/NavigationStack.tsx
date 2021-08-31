import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../screens/cart/CartScreen';
import { NavigationContainer, StackActions, NavigationAction } from '@react-navigation/native';
import Home from '../screens/home/HomeScreen';

const Tab = createBottomTabNavigator();

export function HomeStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export function MainStack(){

}

export default {HomeStack, MainStack}