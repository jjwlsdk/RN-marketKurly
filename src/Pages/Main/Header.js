import * as React from 'react';
import { Text, View,SafeAreaView,Image, StatusBar, TouchableOpacity,Button } from 'react-native';
import Cart from '../Cart/Cart'
import Theme from '../../Styles/Theme'

const icon = {
  logo: 'https://res.kurly.com/images/marketkurly/logo/logo_type2_x2.png',
  cart:'https://res.kurly.com/mobile/service/common/2006/ico_navi_cart_white.svg?v=3'
}


export default function Header () {
  return(
  <>
  <SafeAreaView style={{backgroundColor:Theme.color.MainPurple}}/>
  <View style={{height:50, backgroundColor:Theme.color.MainPurple, justifyContent:'center', alignItems:'center', flexDirection: 'row'}}>
  <Image
    source={{uri: icon.logo}}
    style={{width:62, height:36}}
  />
{/* <TouchableOpacity>
  <Image 
    source={{uri: icon.cart}}
    style={{width: 25, height: 25, backgroundColor:'black' }}
    onPress={()=> navigation.navigate}/>
</TouchableOpacity> */}

  </View>
  </>
  )
}