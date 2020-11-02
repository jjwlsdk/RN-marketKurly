import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Kurly from './Kurly'
import Product from '../../Product/Product';
import Event from './Event'
import Theme from '../../../Styles/Theme'

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor:Theme.color.MainPurple, 
        inactiveTintColor:Theme.color.DarkGray, 
        indicatorStyle:{borderBottomColor: Theme.color.MainPurple,borderBottomWidth: 2},
      }}
    >
      <Tab.Screen name="컬리추천" component={Kurly} />
      <Tab.Screen name="신상품" component={Product} />
      <Tab.Screen name="베스트" component={Product} />
      <Tab.Screen name="알뜰쇼핑" component={Product} />
      <Tab.Screen name="이벤트" component={Event} />
    </Tab.Navigator>
  );
}
