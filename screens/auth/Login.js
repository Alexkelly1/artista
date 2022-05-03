import React, { useState } from 'react'
import { View, Button, TextInput } from 'react-native'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignIn = async () => {
        await signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res);
                navigation.navigate("home");
            })
            .catch(err => { console.log(err) });
    }

    return (
        <View>
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
                onPress={() => onSignIn()}
                title="Log In"
            />
        </View>
    )
}

export default Login