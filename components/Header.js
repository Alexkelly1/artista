import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import appLogo from '../assets/artista.png'

const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={appLogo} />
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                    <Icon style={styles.icon} name="search-circle-outline" size={30} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={styles.icon} name="heart-outline" size={30} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={styles.icon} name="chatbubble-outline" size={30} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    logo: {
        marginTop: 40,
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        color: "#FFFFFF"
    },
    iconsContainer: {
        marginTop: 35,
        flexDirection: 'row',
        color: 'white'
    },
})

export default Header;