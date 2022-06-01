import React, { useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { Header } from "../components/layout/Header";
import { getAuth } from "firebase/auth";
import { fetchFirestoreDoc } from "../firebase/network/firestoreDoc";
import { singularPhotoDownload } from "../firebase/network/singluarPhoto";
import { UserContext, ActionType } from "../state/Context";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home(props) {
    const auth = getAuth();
    const appContext = useContext(UserContext);

    useEffect(async () => {
        if (auth.currentUser) {
            const [username, avatar] = await Promise.all(
                [
                    AsyncStorage.getItem('username'),
                    AsyncStorage.getItem('avatar'),
                ]
            );

            const usernameSource = username || await fetchFirestoreDoc('users');
            const avatarSource = avatar || await singularPhotoDownload({ directory: 'user-avatars' });
            if (usernameSource || avatarSource) {
                appContext.dispatch({
                    type: ActionType.UserDetails,
                    payload: {
                        username: usernameSource,
                        avatar: avatarSource
                    }
                })
            }
        } else { props.navigation.navigate('Landing') }
    }, [auth.currentUser]);

    return (
        <>
            <View style={{ backgroundColor: "#000000" }}>
                <Header />
                <Text style={{ color: "#FFFFFF" }}>Welcome To ARTISTA</Text>
            </View>
        </>
    )
}