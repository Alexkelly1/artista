import React, { useState } from 'react'
import { View, Button, TextInput } from 'react-native'
<<<<<<< HEAD
import * as firebase from 'firebase/app';
=======

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

//import * as firebase from 'firebase/app';
>>>>>>> 391b64a1f8c609b19d69520ce71ab282a3eb2b0c
//import firebase from 'firebase/app'
//import app from 'firebase/app'
import 'firebase/auth'

import { initializeApp } from 'firebase/app'


const auth = getAuth();

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignUp = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) });
    }

<<<<<<< HEAD
    onSignUp() {
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        //app.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }
=======
    return (
        <View>
            <TextInput
                placeholder="Name"
                onChangeText={(name) => setName(name)}
            />
            <TextInput
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
>>>>>>> 391b64a1f8c609b19d69520ce71ab282a3eb2b0c

            <Button
                onPress={() => onSignUp()}
                title="Sign Up"
            />
        </View>
    )
}

export default Register