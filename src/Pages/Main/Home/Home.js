import * as React from 'react';
import { Text, View, SafeAreaView, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {createAppContainer} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import Kurly from './Kurly'
import Event from './Event'
import Theme from '../../../Styles/Theme'
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../Main'

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        activeTintColor:Theme.color.MainPurple, 
        inactiveTintColor:Theme.color.DarkGray, 
        indicatorStyle:{borderBottomColor: Theme.color.MainPurple,borderBottomWidth: 2},
      }}
    >
      <Tab.Screen name="컬리추천" component={Kurly} />
      <Tab.Screen name="신상품" component={Kurly} />
      <Tab.Screen name="베스트" component={Kurly} />
      <Tab.Screen name="알뜰쇼핑" component={Kurly} />
      <Tab.Screen name="이벤트" component={Event} />
    </Tab.Navigator>
  );
}