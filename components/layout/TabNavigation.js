import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../../screens/Home';
import ProfileScreen from '../../screens/profile/Profile';

const Tab = createMaterialBottomTabNavigator()

const EmptyScreen = () => {
    return (null)
}

export const TabNavigation = () => (
    <>
        <Tab.Navigator initialRouteName="Home" labeled={false} >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home-sharp" color={color} size={26} />
                    )
                }} />
            <Tab.Screen name="AddContainer" component={EmptyScreen}
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate("Add")
                    }
                })}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="add-circle-sharp" color={color} size={26} />
                    )
                }} />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person-sharp" color={color} size={26} />
                    )
                }} />
        </Tab.Navigator>
    </>
)