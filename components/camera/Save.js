import React, { useState } from "react";
import { View, TextInput, Image, Button } from "react-native";

import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth } from "firebase/auth";

const storage = getStorage();
const auth = getAuth();

export const Save = (props) => {
    const generatedId = Math.random().toString(15)
    const [caption, setCaption] = useState(generatedId);

    const imagePath = props.route.params.image;
    const user = auth.currentUser;
    const userId = auth.currentUser.uid;

    const handleImageUpload = async () => {
        if (!imagePath) return;

        if (user) {
            const storageRef = ref(storage, `images/${userId}/${caption}`);
            const response = await fetch(imagePath);
            const conversion = await response.blob();

            uploadBytes(storageRef, conversion)
                .then(_ => console.log("Upload completed"))
                .catch(err => console.log(err));
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: imagePath }} />
            <TextInput
                style={{padding: 10}}
                placeholder="Caption..."
                placeholderTextColor={"#000000"}
                onChangeText={(caption) => setCaption(caption)}
            />
            <Button title="Post" onPress={() => handleImageUpload()} />
        </View>
    );
};

export default Save;