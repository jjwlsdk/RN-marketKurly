import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProductDesc from "../Components/ProductDesc/ProductDesc";
import ProductImage from "../Components/ProductImage/ProductImage";
import Review from "../Components/Review/Review";

const Tab = createMaterialTopTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#5f0080",
        inactiveTintColor: "#666",
        labelStyle: { width: 80 },
        indicatorStyle: { borderBottomColor: "#5f0080", borderBottomWidth: 2 },
      }}
    >
      <Tab.Screen name="상품설명" component={ProductDesc} />
      <Tab.Screen name="상품이미지" component={ProductImage} />
      <Tab.Screen name="상세정보" component={ProductDesc} />
      <Tab.Screen name="후기" component={Review} />
      <Tab.Screen name="상품문의" component={ProductDesc} />
    </Tab.Navigator>
  );
}

export default TabBar;
