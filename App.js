import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react';
import './firebase/config/initializeApp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigation } from './components/layout/TabNavigation';
import { GlobalStateProvider } from './state/Context';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import LandingScreen from './screens/Landing';
import RegisterScreen from './screens/auth/Register';
import LoginScreen from './screens/auth/Login';
import AddScreen from './components/camera/Add';
import SaveScreen from './components/camera/Save';
import ProfileScreen from './screens/profile/Profile';
import PostDetailScreen from './screens/posts/PostDetail';
import Search from './components/widgets/SearchBar';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Stack = createStackNavigator();
const auth = getAuth();

const App = () => {
  const [hasToken, setHasToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setHasToken(user.refreshToken);
        setIsLoading(false);
        console.log("Logged In")
      } else setIsLoading(false);
      console.log("Logged Out")
      // TODO: Dispatch token to reducer
    });
  }, [auth]);

  const defaultHeaderStyle = {
    headerStyle: {
      backgroundColor: 'black',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTintColor: '#fff'
  }

  const Loader = () => (
    <View style={style.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )

  return (

    <GlobalStateProvider>
      {isLoading == false ? (
        <NavigationContainer>
          <Stack.Navigator>
            {hasToken ? (
              <>
                <Stack.Screen
                  name="TabNavigation"
                  component={TabNavigation}
                  options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Add" component={AddScreen} />
                <Stack.Screen name="Save" component={SaveScreen} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen
                  name="Posts"
                  component={PostDetailScreen}
                  options={defaultHeaderStyle} />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Landing"
                  component={LandingScreen}
                  options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      ) : <Loader />}
    </GlobalStateProvider>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
    width: '100%'
  }
});

export default App;