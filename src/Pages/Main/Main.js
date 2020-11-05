import React from "react";
import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "./Header";
import Home from "./Home/Home";
import Empty from "../Main/Empty";
import Search from "../Search/Search";
import MyPage from "../Mypage/Mypage";
import Theme from "../../Styles/Theme";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <>
    <Header/> 
    <Tab.Navigator 
    tabBarOptions={{
      activeTintColor:Theme.color.MainPurple, 
      inactiveTintColor:Theme.color.DarkGray, 
    }}>  
      <Tab.Screen 
        name="홈" 
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={{uri: focused ? icon.home_on: icon.home}}
                style={style.icon}
              />
            );
          }
        }}/>
      <Tab.Screen 
        name="카테고리" 
        component={Empty}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={{uri: focused ? icon.category_on: icon.category}}
                style={style.icon}
              />
            );
          }
        }}/>
      <Tab.Screen 
        name="검색" 
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={{uri: icon.search}}
                style={style.icon}
              />
            );
          }
        }}
      />
      <Tab.Screen 
        name="마이컬리" 
        component={MyPage}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={{uri: focused ? icon.MyPage_on : icon.MyPage}}
                style={style.icon}
              />
            );
          }
        }}
      />
      </Tab.Navigator>
    </>
  )
}

const style = StyleSheet.create({
  icon: {
    width: 24,
    height: 25,
  },
});

const icon = {
  home_on: "http://res.kurly.com/mobile/service/common/1908/ico_home_on.png",
  home: "https://res.kurly.com/mobile/service/common/1908/ico_home.png",
  category_on:
    "https://res.kurly.com/mobile/service/common/1908/ico_cate_on.png",
  category: "https://res.kurly.com/mobile/service/common/1908/ico_cate.png",
  search: "https://res.kurly.com/mobile/service/common/1908/ico_search.png",
  MyPage_on: "https://res.kurly.com/mobile/service/common/1908/ico_mypage_on.png",
  MyPage: "https://res.kurly.com/mobile/service/common/1908/ico_mypage.png",
};
