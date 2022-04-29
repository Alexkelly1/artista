import React, { useState } from 'react'
import { View, Button, TextInput } from 'react-native'

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

//import * as firebase from 'firebase/app';
//import firebase from 'firebase/app'
import app from 'firebase/app'
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

            <Button
                onPress={() => onSignUp()}
                title="Sign Up"
            />
        </View>
    )
}

export default Register