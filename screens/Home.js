import React, { useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { Header } from "../components/layout/Header";
import { getAuth } from "firebase/auth";
import { fetchFirestoreDoc } from "../firebase/network/firestoreDoc";
import { photoDownload } from "../firebase/network/photoHandler";
import { UserContext, ActionType } from "../state/Context";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
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
            // Get user details via device local storage || over the network if not available.
            const usernameSource = username || await fetchFirestoreDoc("users").then(user => user.name);
            const avatarSource = avatar || await photoDownload({ directory: 'user-avatars' });

            if (usernameSource || avatarSource) {
                appContext.dispatch({
                    type: ActionType.UserDetails,
                    payload: {
                        username: usernameSource,
                        avatar: avatarSource
                    }
                })
            }
        } else { navigation.navigate('Landing') }
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

export default Home;