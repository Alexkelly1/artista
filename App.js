import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register'; 

//import app from 'firebase/app'
//import 'firebase/auth'

import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAMVNLVNB_8xCb1p4YyHRM5s1rUyejhykw",
  authDomain: "artista-26a24.firebaseapp.com",
  projectId: "artista-26a24",
  storageBucket: "artista-26a24.appspot.com",
  messagingSenderId: "962053485800",
  appId: "1:962053485800:web:f7463e2abedcb09225455d",
  measurementId: "G-61FE658B73"
};

initializeApp(firebaseConfig);

//import Firebase from './firebase';

//new Firebase();

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}