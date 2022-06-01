import React, { useContext, useState } from 'react'
import { View, TouchableOpacity, TextInput, StyleSheet, Text } from 'react-native'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { uploadFirestoreDoc } from '../../firebase/network/firestoreDoc';
import { UserContext, ActionType } from '../../state/Context';

const auth = getAuth();

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const appContext = useContext(UserContext);
    const { username } = appContext.state;

    const onSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(_ => uploadFirestoreDoc(
                navigation,
                "users",
                { name: username, email: email }
            ))
            .catch(err => { console.log(err) });
    }

    const setUsername = (username) => {
        appContext.dispatch({
            type: ActionType.Username,
            payload: {
                username: username
            }
        })
    }

    return (
        <View style={rStyles.container}>
            <TextInput
                style={rStyles.input}
                placeholder="Username"
                placeholderTextColor={'#FFFFFF'}
                onChangeText={(username) => setUsername(username)}
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