import React, { useState } from "react";
import { View, TextInput, Image, Button } from "react-native";
import { photoUpload, createUserPost } from "../../firebase/network/photoHandler";

export const Save = ({ navigation, route }) => {
    const postPhotoID = Math.random().toString(15);
    const [caption, setCaption] = useState("");
    const directory = 'user-posts';

    const imagePath = route.params.image;

    const postPhoto = () => {
        photoUpload({ directory }, imagePath, postPhotoID)
            .then(_ => createUserPost({ directory }, "users", postPhotoID, caption));

        navigation.navigate(
            'TabNavigation',
            { screen: 'Home' }
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: imagePath }} />
            <TextInput
                style={{ padding: 10 }}
                placeholder="Caption..."
                placeholderTextColor={"#000000"}
                onChangeText={(caption) => setCaption(caption)}
            />
            <Button title="Post" onPress={() => postPhoto()} />
        </View>
    );
};

export default Save;