import React from 'react'

import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

const BottomStack = createBottomTabNavigator(
    {
        home: {
            screen: "Home",
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ focused }) => <Icon name='home-outline' focused={focused} color={focused} />
            }
        }
    }
)