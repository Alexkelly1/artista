import React, { useState } from "react";
import { View, TextInput, Image, Button } from "react-native";

import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();

export const Save = (props) => {
    const [caption, setCaption] = useState("");
    const imagePath = props.route.params.image;

    const handleImageUpload = async () => {
        if (!imagePath) return;

        const storageRef = ref(storage, `images/${caption}`);
        const response = await fetch(imagePath);
        const conversion = await response.blob();

        uploadBytes(storageRef, conversion)
            .then(_ => console.log("Upload completed"))
            .catch(err => console.log(err));
    };

    return (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: imagePath }} />
            <TextInput
                placeholder="Caption..."
                onChangeText={(caption) => setCaption(caption)}
            />
            <Button title="Post" onPress={() => handleImageUpload()} />
        </View>
    );
};

export default Save;
