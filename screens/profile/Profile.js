import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { ProfileHeader } from "./components/ProfileHeader";

const storage = getStorage();
const auth = getAuth();

const Profile = ({ navigation }) => {
    const [photoURLs, setPhotoURLs] = useState([]);
    const user = auth.currentUser;
    const userId = auth.currentUser.uid;

    useEffect(() => fetchUserPhotos(), []);

    const fetchUserPhotos = () => {
        const userPhotoDIR = ref(storage, `images/${userId}`)

        if (user) {
            listAll(userPhotoDIR).then(async (res) => {
                const photosList = await Promise.all(
                    res.items.map(imgRef => {
                        return getDownloadURL(ref(storage, imgRef))
                    }));
                setPhotoURLs(photosList)
            })
                .catch(err => console.log(err));
        }
    };

    return (
        <>
            <ProfileHeader
                postAmount={photoURLs.length}
                navigation={navigation}
            />
            <FlatList
                data={photoURLs}
                renderItem={({ item }) => (
                    <View style={style.gridItem}>
                        <Image source={{ uri: item }} style={style.gridImage}></Image>
                    </View>
                )}
                numColumns={3}
                keyExtractor={(_, index) => index.toString()}
            />
        </>
    );
};

const style = StyleSheet.create({
    gridItem: {
        width: '33.3333%',
    },
    gridImage: {
        height: 150,
        width: '100%',
        resizeMode: "cover",
    },
});

export default Profile;
