import React, { useState } from "react";
import { View, TextInput, Image, Button } from "react-native";
import { singularPhotoUpload } from "../../firebase/network/singluarPhoto";

export const Save = (props) => {
    const generatedId = Math.random().toString(15)
    const [caption, setCaption] = useState(generatedId);
    const directory = `user-posts`;

    const imagePath = props.route.params.image;

    return (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: imagePath }} />
            <TextInput
                style={{ padding: 10 }}
                placeholder="Caption..."
                placeholderTextColor={"#000000"}
                onChangeText={(caption) => setCaption(caption)}
            />
            <Button title="Post" onPress={() => singularPhotoUpload(
                { directory },
                imagePath,
                caption
            )} />
        </View>
    );
};

export default Save;