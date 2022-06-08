import React, { useState } from 'react'
import { View, TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignIn = async () => {
        await signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res);
                navigation.navigate("TabNavigation");
            })
            .catch(err => { console.log(err) });
    }

    return (
        <View style={loStyles.container}>
            <TextInput
                style={loStyles.input}
                placeholder="Email"
                placeholderTextColor={'#FFFFFF'}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={loStyles.input}
                placeholder="Password"
                placeholderTextColor={'#FFFFFF'}
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />

            <TouchableOpacity onPress={() => onSignIn(navigation.navigate("TabNavigation"))} style={loStyles.button} >
                <Text style={loStyles.buttonText} >
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const loStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },

    input: {
        backgroundColor: '#3F42F2',
        padding: 10,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
    },

    button: {
        backgroundColor: '#DEC12F',
        padding: 20,
        borderRadius: 10,
        marginTop: 10
    },

    buttonText: {
        textAlign: 'center',
        color: '#000000',
        justifyContent: 'center'
    }
})

export default Login