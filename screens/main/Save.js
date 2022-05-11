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

import React, { useState } from 'react'
import { View, TextInput, Image, Button } from 'react-native'

import firebase from 'firebase/app'

export default function Save(props) {
    const [caption, setCaption] = useState("")

    const uploadImage = async () => {
        const uri = props.route.params.image;
        const childPath = `post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`
        console.log(childPath)

        const response = await fetch(uri)
        const blob = await response.blob();

        const task = firebase
            .storage()
            .ref()
            .child(childPath)
            .put(blob)
        
        const taskProgress = snapshot => {
            console.log(`transferred: ${snapshot.bytesTransferred}`)
        }
        
        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                console.log(snapshot)
            })
        }

        const taskError = snapshot => {
            console.log(snapshot)
        }

        task.on("state_changed", taskProgress, taskError, taskCompleted);
    }
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
