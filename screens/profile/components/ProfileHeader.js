import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "react-native-elements";
import { CustomAppButton } from "../../../components/widgets/AppButton";
import { Spacer } from "../../../components/widgets/Spacer";
import { singularPhotoUpload, singularPhotoDownload } from "../../../firebase/network/singluarPhoto";
import defaultAvatar from '../../../assets/default_avatar.jpg';
import * as ImagePicker from 'expo-image-picker';
import { fetchFirestoreDoc } from "../../../firebase/network/firestoreDoc";

export const ProfileHeader = ({ postAmount }) => {
    const [username, setUsername] = useState('');
    const [profilePhoto, setProfilePhoto] = useState(null);
    const directory = `user-avatars`;

    useEffect(() => {
        singularPhotoDownload({ directory })
            .then(uri => setProfilePhoto(uri))

        fetchUserName();
    }, []);

    const launchDeviceGallery = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.cancelled) handleUploadAndDownload(result.uri);
    };

    const handleUploadAndDownload = async (uri) => {
        await singularPhotoUpload({ directory }, uri);

        singularPhotoDownload({ directory })
            .then(uri => setProfilePhoto(uri));
    }

    const fetchUserName = () =>
        fetchFirestoreDoc("users")
            .then(fetchedName => setUsername(fetchedName));

    return (
        <View style={{ backgroundColor: 'black' }}>
            <SafeAreaView>
                <View style={style.flexContainer} >
                    <View style={style.gridRow}>
                        <Avatar
                            onPress={() => launchDeviceGallery()}
                            size="medium"
                            rounded
                            source={profilePhoto ? { uri: profilePhoto } : defaultAvatar}
                        />
                        <Text
                            numberOfLines={1}
                            style={style.username}>{username}</Text>
                        <View>
                            <Text
                                numberOfLines={1}
                                style={style.amount}>
                                {postAmount}
                            </Text>
                            <Text style={style.postText}>Posts</Text>
                        </View>
                    </View>
                    <Spacer height={20} />
                    <CustomAppButton title="Log out" />
                </View>
            </SafeAreaView >
        </View >
    )
}

const style = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "black",
        paddingHorizontal: 25,
        paddingVertical: 20
    },
    gridRow: {
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    username: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingLeft: 10,
        color: "white"
    },
    amount: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "white"
    },
    postText: {
        fontSize: 15,
        textAlign: 'center',
        color: "white"
    },
});