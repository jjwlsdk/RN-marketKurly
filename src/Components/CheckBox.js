import React from "react";
import CheckBox from "react-native-check-box";
import styled from "styled-components";

export default function CustomCheckBox({ onClick, isChecked, size }) {
  return (
    <CheckBox
      style={{ marginRight: 14 }}
      onClick={onClick}
      isChecked={isChecked}
      checkedImage={
        <CheckImage size={size} source={require("../../assets/checked.png")} />
      }
      unCheckedImage={
        <CheckImage
          size={size}
          source={require("../../assets/unchecked.png")}
        />
      }
    />
  );
}

const CheckImage = styled.Image`
  ${({ size }) =>
    size
      ? `width:${size}px; height:${size}px`
      : `width: 16px;
  height: 16px;`}
`;
