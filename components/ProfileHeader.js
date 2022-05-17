import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native'
import appLogo from '../assets/artista.png'

const ProfileHeader = () => {
    return (
        <View style={pHStyles.container}>
            <Image source={appLogo} style={pHStyles.logo} />
            <TouchableOpacity style={pHStyles.button}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const pHStyles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "#000000"
    },
    logo: {
        marginTop: 40,
        width: 70,
        height: 50,
        resizeMode: 'contain'
    },
    button: {
        backgroundColor: '#DEC12F',
        padding: 10,
        borderRadius: 10,
        marginTop: 30,
        marginRight: 15,
    },
})

export default ProfileHeader;