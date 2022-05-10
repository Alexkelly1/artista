import 'react-native-gesture-handler'
import React from 'react';
import './config/firebase';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './screens/Landing';
import RegisterScreen from './screens/auth/Register';
import LoginScreen from './screens/auth/Login';
import { HomeScreen } from './screens/Main';
import Header from './components/home/Header';
import AddScreen from './screens/main/Add';
import SaveScreen from './screens/main/Save';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Add" component={AddScreen} navigation={this.props.navigation}/>
        <Stack.Screen name="Save" component={SaveScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;