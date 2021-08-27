import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../cart/CartScreen';
import Home from "../home/HomeScreen"

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Cart} />
    </Tab.Navigator>
  );
}