import React, { useState } from "react";
import styled from "styled-components";
import CartModal from "./CartModal/CartModal";

const Cart = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      {isModal && <CartModal isModal />}
      <Container>
        <Wrapper onPress={() => setIsModal(!isModal)}>
          <ButtonTxt>구매하기</ButtonTxt>
        </Wrapper>
      </Container>
    </>
  );
};

export default Cart;

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 10px 50px 10px;
  background-color: ${({ theme }) => theme.color.White};
`;

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  border-color: ${({ theme }) => theme.color.MainPurple};
  background-color: ${({ theme }) => theme.color.MainPurple};
`;

export const ButtonTxt = styled.Text`
  color: ${({ theme }) => theme.color.White};
  font-weight: 600;
  font-size: 16px;
  line-height: 52px;
  text-align: center;
`;
