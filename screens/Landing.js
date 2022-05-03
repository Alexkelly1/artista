import React from 'react'
import { View, Button } from 'react-native'

const Landing = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button
        title="Register"
        onPress={() => navigation.navigate("register")} />
      <Button
        title="Login"
        onPress={() => navigation.navigate("login")} />
    </View>
  )
}

export default Landing