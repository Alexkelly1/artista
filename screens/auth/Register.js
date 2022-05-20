import React, { useState } from 'react'
import { View, TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native'
import { db } from '../../firebase/config/initializeApp';
import { doc, setDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const Register = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(_ => {
                const userId = auth.currentUser.uid;
                const docRef = doc(db, "users", userId);

                setDoc(docRef, { name: name, email: email });
                navigation.navigate("TabNavigation");
            })
            .catch(err => { console.log(err) });
    }

    return (
        <View style={rStyles.container}>
            <TextInput
                style={rStyles.input}
                placeholder="Name"
                placeholderTextColor={'#FFFFFF'}
                onChangeText={(name) => setName(name)}
            />
            <TextInput
                style={rStyles.input}
                placeholder="Email"
                placeholderTextColor={'#FFFFFF'}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={rStyles.input}
                placeholder="Password"
                placeholderTextColor={'#FFFFFF'}
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />

            <TouchableOpacity onPress={() => onSignUp(navigation.navigate("TabNavigation"))} style={rStyles.button} >
                <Text style={rStyles.buttonText} >
                    Register
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const rStyles = StyleSheet.create({
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

export default Register