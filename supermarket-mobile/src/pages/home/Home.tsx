import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView, Text, View, ToastAndroid, Pressable } from 'react-native'
import { Card } from 'react-native-elements'

const products =[
  {name: "Tênis Asics Gel-Iempression", price: "R$ 399,99", descripition: "Sapato de marca", image:"https://static.netshoes.com.br/produtos/tenis-asics-gel-impression-11-masculino/72/2FW-0179-172/2FW-0179-172_detalhe1.jpg?ts=1695700246?ims=240x240", discount:"R$ 218,49 no Pix"},
  {name: "Tênis Olympikus Delta", price: "R$ 300,00", descripition: "Sapato de marca", image:"https://static.netshoes.com.br/produtos/tenis-olympikus-delta-masculino/34/2I2-5006-234/2I2-5006-234_detalhe1.jpg?ts=1695612302?ims=240x240", discount:"R$ 123,99 no Pix"},
  {name: "Tênis Joma Set", price: "R$ R$ 338,19", descripition: "Masculino", image:"https://static.netshoes.com.br/produtos/tenis-joma-set-masculino/78/049-4102-178/049-4102-178_detalhe1.jpg?ts=1695427875", discount:"R$ 270,00 no Pix"},
  {name: "Tênis Joma Slam", price: "R$ 649,99", descripition: "Sapato de marca", image:"https://static.netshoes.com.br/produtos/tenis-joma-slam-masculino/24/049-4095-024/049-4095-024_detalhe1.jpg?ts=1695648512", discount:"R$ 474,99 no Pix"},
  {name: "Tênis Joma Point", price: "R$ 799,99", descripition: "Sapato de marca", image:"https://static.netshoes.com.br/produtos/tenis-joma-point-masculino/08/049-4107-008/049-4107-008_detalhe1.jpg?ts=1695357326", discount:"R$ 493,99 no Pix"},
  {name: "Tênis Adidas Galaxy 5", price: "R$ 399,99", descripition: "Sapato de marca", image:"https://static.netshoes.com.br/produtos/tenis-adidas-galaxy-5-masculino/26/3ZP-8484-026/3ZP-8484-026_zoom1.jpg?ts=1695699199&ims=326x", discount:"R$ 179,99 no Pix"},
]
const Home = ({shoppingCart, setShoppingCart}: any) => {
  return (
    <ScrollView>
      <StatusBar backgroundColor='black'/>
     {
      products.map((product, i) => {
        const openToast = (message: string) =>{
          ToastAndroid.show(message, 3000)
        }
        return(
        <Card key={i}>
          <Card.Title> <Text style={{fontSize:24}}>{product.name}</Text></Card.Title>
          <Card.Divider/>
          <Card.Image source={{uri: product.image}}/>
          <View style={{marginBottom:"5%", marginTop:"5%"}}>
            <Text style={{textDecorationLine: "line-through",color:"#848484"}}>{product.price} </Text>
            <Text style={{fontSize: 16}}>{product.discount}</Text> 
          </View> 
        
            <Pressable onPress={() => {
              openToast("Item adicionado com sucesso!")
              setShoppingCart([...shoppingCart,product])
              }}
              
              style={
                ({pressed}: any) => (
                  {
                    backgroundColor: pressed ? 'green' : 'black',
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5
                  }
                )
              }
              >
              
              <Text style={{fontSize:18, color: "white"}}> Adicionnar ao Carrinho </Text>
            </Pressable>
        </Card>
        )
        })
     }
    </ScrollView>
  );
}

export default Home