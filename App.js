import React, { useState } from 'react';
import './config/firebase';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';

const Stack = createStackNavigator();

const [loggedIn] = useState(false);

export default function App() {
  const { loggedIn } = this.state;
  if(!loggedIn){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <Provider store={store}>
      <Stack.Navigator initalRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </Provider>
  )
}