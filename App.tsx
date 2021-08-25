import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Splash } from './src/screens/splash/SplashScreen';
import { NativeRouter, Switch, Route } from 'react-router-native';
import  Login  from './src/screens/login/LoginScreen';
import SignUp from './src/screens/signup/SignUpScreen';
import { Provider } from 'react-redux';
import store from './src/redux/Store';

export default function App() {
  return (
    <Provider store={store}>
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={Splash}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
        </Switch>
      </View>
    </NativeRouter>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
