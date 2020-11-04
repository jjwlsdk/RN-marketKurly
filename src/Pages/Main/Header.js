import React from "react";
import { View, SafeAreaView, Image } from "react-native";
import Theme from "../../Styles/Theme";

export default function Header() {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: Theme.color.MainPurple }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          backgroundColor: Theme.color.MainPurple,
        }}
      >
        <Image source={{ uri: icon.logo }} style={{ width: 62, height: 36 }} />
      </View>
    </>
  );
}

const icon = {
  logo: "https://res.kurly.com/images/marketkurly/logo/logo_type2_x2.png",
  cart:
    "https://res.kurly.com/mobile/service/common/2006/ico_navi_cart_white.svg?v=3",
};
