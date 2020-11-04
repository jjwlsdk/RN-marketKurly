import React from "react";
import styled from "styled-components";
import CreateAlert from "../../../Components/Alert";

export default function CountBox({ count, onPlusPress, onMinusPress }) {
  const onDecrease = () => {
    if (count > 1) {
      onMinusPress();
    } else {
      CreateAlert("구매수량은 1 이상 입력해야 합니다.");
    }
  };

  return (
    <Container>
      <Minus onPress={onDecrease}>-</Minus>
      <Input>{count}</Input>
      <Plus onPress={onPlusPress}>+</Plus>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  width: 88px;
  height: 24px;
  border: 1px solid #dddfe1;
  border-radius: 3px;
`;

const Minus = styled.Text`
  width: 22px;
  height: 22px;
  background: #f6f7f7;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

const Input = styled.Text`
  width: 42px;
  height: 24px;
  padding: 2px;
  font-size: 14px;
  text-align: center;
`;

const Plus = styled(Minus)``;
