import React, { useState } from "react";
import { View, TextInput, Image, Button } from "react-native";
import { photoUpload, createUserPost } from "../../firebase/network/photoHandler";

export const Save = ({ navigation, route }) => {
    const generatedId = Math.random().toString(15)
    const postID = generatedId;
    const [caption, setCaption] = useState("");
    const directory = 'user-posts';

    const imagePath = route.params.image;

    const postPhoto = () => {
        photoUpload({ directory }, imagePath, postID)
            .then(_ => createUserPost({ directory }, "users", postID, caption));

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