import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import FeedScreen from './main/Feed';
import ProfileScreen from './main/Profile';


const Tab = createMaterialBottomTabNavigator()

const EmptyScreen = () => {
    return(null)
}

export const HomeScreen = () => (
    <>
        <Tab.Navigator initialRouteName="Feed" labeled={false}>
            <Tab.Screen name="Feed" component={FeedScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home-sharp" color={color} size={26}/>
                    )
                }}/>
            <Tab.Screen name="AddContainer" component={EmptyScreen}
                listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate("Add")
                    }
                })}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="add-circle-sharp" color={color} size={26}/>
                    )
                }}/>
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person-sharp" color={color} size={26}/>
                    )
                }}/>
        </Tab.Navigator>
    </>
)