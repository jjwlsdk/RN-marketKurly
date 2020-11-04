import React from "react";
import styled from "styled-components";

export default function RightArrowImg({ size = 14 }) {
  return <Img size={size} source={require("../../../assets/rightArrow.png")} />;
}

const Img = styled.Image`
  ${({ size }) =>
    ` width: ${size}px;
      height: ${size}px;
    `}
`;
