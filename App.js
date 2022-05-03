import React, { useState } from 'react';
import './config/firebase';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

<<<<<<< HEAD
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';
import HomeScreen from './components/auth/Home';
=======
import LandingScreen from './screens/Landing';
import RegisterScreen from './screens/auth/Register';
import LoginScreen from './screens/auth/Login';
import { HomeScreen } from './screens/Home';
>>>>>>> 2b56ecc25ce691ecdfb5ada279e93820d0b2e154

const Stack = createStackNavigator();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  /*if (!loggedIn) {
    return (
      <NavigationContainer>
<<<<<<< HEAD
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
=======
        <Stack.Navigator initialRouteName="landing">
          <Stack.Screen name="landing" component={LandingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="register" component={RegisterScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="home" component={HomeScreen} />
>>>>>>> 2b56ecc25ce691ecdfb5ada279e93820d0b2e154
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
<<<<<<< HEAD

  return (
    <Provider store={store}>
      <Stack.Navigator initalRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </Provider>
  )*/

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
    </NavigationContainer>
  );

=======
>>>>>>> 2b56ecc25ce691ecdfb5ada279e93820d0b2e154
}

export default App;