import React from "react";
import { View, Text } from "react-native";

import Header from '../components/Header';

export default function Feed() {
    return (
        <>
            <View style={{backgroundColor: "#000000"}}>
                <Header />
                <Text style={{color: "#FFFFFF"}}>Welcome To ARTISTA</Text>
            </View>
        </>
    )
}