import React from "react";
import { Image } from "react-native";

const MainImage = () => {
  return (
    <Image
      source={{
        uri: "https://img-cf.kurly.com/shop/data/goods/1564118564514y0.jpg",
      }}
      style={{ width: 375, height: 482 }}
    />
  );
};

export default MainImage;
