import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";

const storage = getStorage();
const auth = getAuth();

const Profile = () => {
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

    const loadPhotos = photoURLs.map((url, i) => {
        return (
            <View key={i} style={style.gridItem}>
                <Image source={{ uri: url }} style={style.gridImage}></Image>
            </View>
        )
    })

    return (
        <>
            <View style={style.spacer} />
            <View style={style.gridContainer}>
                {loadPhotos}
            </View>
        </>
    );
};

const style = StyleSheet.create({
    gridContainer: {
        flex: 1,
        flexDirection: "row",
    },
    gridItem: {
        justifyContent: "center",
        flex: 1,
        height: "30%",
    },
    gridImage: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
    },
    spacer: {
        height: "30%",
        backgroundColor: "white",
    },
});

export default Profile;
