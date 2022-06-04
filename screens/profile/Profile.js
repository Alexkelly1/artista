import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableHighlight } from "react-native";
import { ProfileHeader } from "./components/ProfileHeader";
import Icon from 'react-native-vector-icons/FontAwesome';
import { fetchFirestoreDoc } from "../../firebase/network/firestoreDoc";
import placeholder from '../../assets/image-placeholder.jpg';

const Profile = ({ navigation }) => {
    const [photoURLs, setPhotoURLs] = useState([]);
    const directory = `users`;

    useEffect(() => fetchFirestoreDoc(directory)
        .then(user => setPhotoURLs(user.posts) || []), []);

    const postDetails = (item) => {
        navigation.navigate("Posts", {
            postURI: item.photo,
            caption: item.caption
        });
    }

    return (
        <>
            <ProfileHeader
                postAmount={photoURLs.length}
                navigation={navigation}
            />
            {photoURLs.length != 0 ? (
                <View style={style.layout}>
                    <FlatList
                        data={photoURLs}
                        renderItem={({ item }) => (
                            <View style={style.gridItem}>
                                <TouchableHighlight onPress={() => postDetails(item)}>
                                    <Image source={item.photo ? { uri: item.photo } : placeholder} style={style.gridImage}></Image>
                                </TouchableHighlight>
                            </View>
                        )
                        }
                        numColumns={3}
                        keyExtractor={(_, index) => index.toString()}
                    />
                </View>
            ) :
                <View style={style.layout}>
                    <View style={style.noItems}>
                        <Icon style={style.icon} name="camera-retro" size={30} />
                        <Text style={style.uploadTitle}>No Posts</Text>
                        <Text style={style.uploadDesc}>Try uploading your first post</Text>
                    </View>
                </View>
            }
        </>
    );
}


const style = StyleSheet.create({
    icon: {
        color: 'white',
    },
    layout: {
        backgroundColor: 'black',
        height: '100%'
    },
    gridItem: {
        width: '33.3333%'
    },
    gridImage: {
        height: 150,
        width: '100%',
        resizeMode: "cover"
    },
    noItems: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60%',
    },
    uploadTitle: {
        paddingTop: 15,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    },
    uploadDesc: {
        color: 'white',
        paddingTop: 5
    }
});

export default Profile;
