import React from "react";
import { View, SafeAreaView, Image } from "react-native";
import Theme from "../../../Styles/Theme";

export default function Header() {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: Theme.color.MainPurple }} />
      <View style={{ height: 50, backgroundColor: Theme.color.MainPurple }}>
        <Image
          style={{ justifyContent: "center" }}
          source={{
            uri:
              "https://res.kurly.com/images/marketkurly/logo/logo_type2_x2.png",
          }}
        />
      </View>
    </>
  );
}
