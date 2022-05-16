import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import ProfileHeader from "../components/ProfileHeader";

const storage = getStorage();
const auth = getAuth();

const Profile = () => {
    const [photoURL, setPhotoURL] = useState();
    const [photoList, setPhotoList] = useState([]);
    const user = auth.currentUser;
    const userId = auth.currentUser.uid;

    useEffect(() => fetchUserPhotos(), []);

    const fetchUserPhotos = () => {
        const userPhotoDIR = ref(storage, `images/${userId}`)

        if (user) {
            listAll(userPhotoDIR).then((res) => {
                setPhotoList(res.items);

                res.items.forEach(imgRef => {
                    getDownloadURL(ref(storage, imgRef))
                        .then(url => setPhotoURL(url));
                })
            })
                .catch(err => console.log(err));
        }
    };

    const loadPhotos = photoList.map((item, i) => {
        return (
            <View key={i} style={style.gridItem}>
                <Image source={{ uri: photoURL }} style={style.gridImage}></Image>
            </View>
        )
    })

    return (
        <>
            <ProfileHeader />
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
        backgroundColor: "#000000"
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
        backgroundColor: "#000000",
    },
});

export default Profile;
