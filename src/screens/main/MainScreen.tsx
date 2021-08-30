import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../cart/CartScreen';
import Home from "../home/HomeScreen"
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function HomeStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}