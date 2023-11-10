import React from 'react'
import { Text, TextInput, View, Button } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './LoginStyle';

const Login = ({navigation}) => {
  const goToPage = (path) =>{
    navigation.navigate(path)
  }
  return (
    <View style={styles.container}>
    <View style={styles.logo}>
       <Icon name="shoe-sneaker" size={150} color="black"></Icon>
       <Text style={styles.text}>AppShoes</Text>
    </View>
    <Text>Login</Text>
    <TextInput style={styles.input} />
    <Text>Password</Text>
    <TextInput secureTextEntry={true} style={styles.input} />
    <View style={styles.createForgotLink}>
      <Text onPress={() =>{goToPage("CreateAccount")}} style={styles.link}>Create Account</Text>
      <Text onPress={() =>{goToPage("ForgotPassword")}} style={styles.link}>Forget Password</Text>
    </View>
    <Button onPress={() => {goToPage('Home')}} title="Enviar" color="black"></Button>
  </View>
  )
}

export default Login