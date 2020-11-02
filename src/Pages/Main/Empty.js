import * as React from 'react';
import { Text, View,Image } from 'react-native';

const icon_home = 'https://res.kurly.com/mobile/service/common/1908/ico_home.png'

export default function Empty() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Empty!</Text>
      <Image source={{uri:icon_home}} style={{width: 30, height: 30}}/>
    </View>
  );
}