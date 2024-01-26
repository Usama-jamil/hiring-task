import { StyleSheet, Text, View,Image, TextInput } from 'react-native'
import React from 'react'
import { styles } from './Style'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Button from '../../Component/Button';
const Login = () => {
  return (
    <View style={styles.container}>
      <View style={{marginTop:"20"}}>
        <Image source={require('../../../assets/Login/Login.png')} style={styles.image} />
      </View>
      <View style={styles.contentSection}>
<Text>Sign In</Text>
<View style={styles.input_container}>
<MaterialCommunityIcons name="phone-hangup" size={24} color="black" />
<TextInput />
</View>
      </View>

      <Button text={'Sign In'}/>
    </View>
  )
}

export default Login

