import React from 'react';
import { Splash } from './src/screens/splash/SplashScreen';
import Login from './src/screens/login/LoginScreen';
import SignUp from './src/screens/signup/SignUpScreen';
import { Provider } from 'react-redux';
import store from './src/redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStack } from './src/navigation/NavigationStack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" >
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Main" component={HomeStack} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

