import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Landing = ({ navigation }) => {
  return (
    <View style={lStyles.container}>
      <Image style = {lStyles.logo} source = {require('../assets/logo.png')} />
      <TouchableOpacity onPress={() => navigation.navigate("Register")} style = {lStyles.button} >
        <Text style = {lStyles.buttonText} >
          Register
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")} style = {lStyles.button} >
        <Text style = {lStyles.buttonText} >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const lStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#070AE3'
  },

  button: {
    backgroundColor: '#DEC12F',
    padding: 20,
    borderRadius: 10,
    marginTop: 10
  },

  buttonText: {
    textAlign: 'center',
    color: '#696868',
    justifyContent: 'center'
  },

  logo: {
    marginLeft: 110,
    width: 200,
    height: 100,
    resizeMode: 'contain',
    justifyContent: 'center'
},
})

export default Landing