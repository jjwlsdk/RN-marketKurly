import * as React from 'react';
import { Text, View,SafeAreaView,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './Header';
import Home from './Home/Home';
import Search from './Search';
import My from './My';
import Kurly from './Home/Kurly'
import Theme from '../../Styles/Theme'

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <>
    {/* <SafeAreaView >
     <Image source={{
          uri: 'https://res.kurly.com/images/marketkurly/logo/logo_type2_x2.png',
        }}/>
      {/* <Text> HELLO WORLD</Text> */}
      {/* </SafeAreaView> */}
    <Header/>
    <NavigationContainer>
    <Tab.Navigator >  
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Search" component={Search}/>
      <Tab.Screen name="My" component={My} />
    </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}

// import {createAppContainer} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import Home from './Home/Home';
// import Search from './Search';
// import My from './My';

// const TabNavigator = createBottomTabNavigator({
//   Home: {
//     screen: Home,
//   },
//   Search: {
//     screen: Search,
//   },
//   My: {
//     screen: My,
//   },
// });

// export default createAppContainer(TabNavigator);
