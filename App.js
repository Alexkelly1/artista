import 'react-native-gesture-handler'
import React from 'react';
import './firebase/config/initializeApp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigation } from './components/layout/TabNavigation';
import LandingScreen from './screens/Landing';
import RegisterScreen from './screens/auth/Register';
import LoginScreen from './screens/auth/Login';
import AddScreen from './components/camera/Add';
import SaveScreen from './components/camera/Save';
import ProfileScreen from './screens/profile/Profile';
import PostDetailScreen from './screens/posts/PostDetail';
import Search from './components/widgets/SearchBar';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Add" component={AddScreen} />
        <Stack.Screen name="Save" component={SaveScreen} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Posts" component={PostDetailScreen} />

        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;