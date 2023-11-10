import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/login/Login";
import CreateAccount from "./src/pages/createAccount/CreateAccount";
import ForgotPassword from "./src/pages/forgotPassword/ForgotPassword";
import Home from "./src/pages/home/Home";
import Icon from "react-native-vector-icons/AntDesign";
import ShoppingCart from "./src/pages/shoppingCart/ShoppingCart";
import { useState } from "react";

const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator()
  const [shoppingCart, setShoppingCart] = useState([])
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Login" component={Login} ></Stack.Screen>
      <Stack.Screen options={({navigation}) => {
        return{
          headerBackVisible:false, 
          headerTitleAlign: "center",
          title: "Ofertas",
          headerLeft: () => (
            <Icon onPress={() => (navigation.navigate('ShoppingCart',{shoppingCart}))} name="shoppingcart" size={28}></Icon>
          ),
          headerRight: () => (
                  
            <Icon onPress={() => (navigation.navigate('Login'))} name="logout" size={24}></Icon>       
          )
        }
      }}name="Home">
        {
          () => (
            <Home shoppingCart = {shoppingCart} setShoppingCart = {setShoppingCart}></Home>
          )
        }
      </Stack.Screen>
      <Stack.Screen name="CreateAccount" component={CreateAccount} ></Stack.Screen>
      <Stack.Screen options={{title:'Cancelar', headerTintColor:'#000'}}name="ForgotPassword" component={ForgotPassword} ></Stack.Screen>
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} ></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
  );
}


export default App;