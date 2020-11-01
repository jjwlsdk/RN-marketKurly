import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Dimensions, Image } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const ProductImage = () => {
  const { data } = useSelector(({ prodDataReducer: { data } }) => ({ data }));

  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return (
    <>
      <Image
        source={{
          uri: data.product_image,
        }}
        style={{
          //사이즈 생각해보기
          width: dimensions.screen.width,
          height: 2000,
        }}
      />
    </>
  );
};

export default ProductImage;
