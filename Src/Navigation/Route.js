import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../Screens/Login/Login'

const Route = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Route
