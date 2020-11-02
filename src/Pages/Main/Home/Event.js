import * as React from 'react';
import { View, FlatList, Image } from 'react-native';

const DATA = [
  {
    "id": 1,
    "img": "https://img-cf.kurly.com/shop/data/m/event/afc5e48f43ad1b02930ee1046f6c23ac.jpg"
  },
  {
    "id": 2,
    "img": "https://img-cf.kurly.com/shop/data/m/event/76c968b6b08732a3215ee5cc42607ea8.jpg"
  },
  {
    "id": 3,
    "img": "https://img-cf.kurly.com/shop/data/m/event/960f94328a593ab3485f04de13b5f496.jpg"
  },
  {
    "id": 4,
    "img": "https://img-cf.kurly.com/shop/data/m/event/08b1849f2f2a48bed0f1bcb0e7881e48.jpg"
  },
  {
    "id": 5,
    "img": "https://img-cf.kurly.com/shop/data/m/event/01e5ee67e1e6ae1317f5efad7addf40f.jpg"
  }
]

const renderItem = ({item}) => {
  return (
    <View style={{marginBottom:10}}>
      <Image source={{uri:item.img}} style={{ height: 140}}/>
    </View>
  )
}

export default function HomeScreen() {
  return (
    <View style={{paddingBottom:10}}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item=> item.id}/>
    </View>
  );
}