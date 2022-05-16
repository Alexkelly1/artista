import 'react-native-gesture-handler'
import React from 'react';
import './config/firebase';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './screens/Landing';
import RegisterScreen from './screens/auth/Register';
import LoginScreen from './screens/auth/Login';
import AddScreen from './components/camera/Add';
import SaveScreen from './components/camera/Save';
import { TabNavigation } from './components/TabNavigation';
import ProfileScreen from './screens/Profile';
import Search from './components/SearchBar';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        {/* <Stack.Navigator initialRouteName="Profile"> */}
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Add" component={AddScreen} />
        <Stack.Screen name="Save" component={SaveScreen} />
        <Stack.Screen name="Search" component={Search} />

        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;