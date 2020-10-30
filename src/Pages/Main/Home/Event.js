import * as React from 'react';
import { Text, View, FlatList, StyleSheet ,ImageBackground } from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';


const renderItem = ({item}) => {
  return (
    <View>
      <ImageBackground image={item.img} style={{width: '100%', height: '100%'}}>
      <Text>{item.title}</Text>
      <Text>{item.date}</Text>
      </ImageBackground>
    </View>
  )
}
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item=> item.id}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
})

const DATA = [
  {
    "id": 1,
    "title": "아직 전하지 못한 마음",
    "date": "-10월 11일(일) 23시",
    "img": "https://img-cf.kurly.com/shop/data/m/event/afc5e48f43ad1b02930ee1046f6c23ac.jpg"
  },
  {
    "id": 2,
    "title": "아직 전하지 못한 마음",
    "date": "-10월 15일(목) 11시",
    "img": "https://img-cf.kurly.com/shop/data/m/event/76c968b6b08732a3215ee5cc42607ea8.jpg"
  },
  {
    "id": 3,
    "title": "아직 전하지 못한 마음",
    "date": "-10월 15일(목) 11시",
    "img": "https://img-cf.kurly.com/shop/data/m/event/960f94328a593ab3485f04de13b5f496.jpg"
  },
  {
    "id": 4,
    "title": "아직 전하지 못한 마음",
    "date": "-10월 14일(수) 11시",
    "img": "https://img-cf.kurly.com/shop/data/m/event/08b1849f2f2a48bed0f1bcb0e7881e48.jpg"
  },
  {
    "id": 5,
    "title": "아직 전하지 못한 마음",
    "date": "-10월 11일(일) 23시",
    "img": "https://img-cf.kurly.com/shop/data/m/event/01e5ee67e1e6ae1317f5efad7addf40f.jpg"
  },
  {
    "id": 6,
    "title": "아직 전하지 못한 마음",
    "date": "-10월 14일(수) 11시",
    "img": "https://img-cf.kurly.com/shop/data/m/event/01e5ee67e1e6ae1317f5efad7addf40f.jpg"
  }
]