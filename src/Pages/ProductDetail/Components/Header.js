import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Back title="뒤로"></Back>
      <Name>컬리플라워 라이스 340g(냉동)</Name>
      <Cart title="카트"></Cart>
    </Container>
  );
};

export default Header;

const Container = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
`;

const Back = styled.Button``;

const Name = styled.Text`
  margin: 0 auto;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
`;

const Cart = styled.Button``;
