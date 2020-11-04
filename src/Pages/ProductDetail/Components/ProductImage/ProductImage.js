import React, { useState, useEffect } from "react";
import { Dimensions, Image } from "react-native";
import { useSelector } from "react-redux";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function ProductImage() {
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
          width: dimensions.screen.width,
          height: 2000,
        }}
      />
    </>
  );
}
