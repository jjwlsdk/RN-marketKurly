import React from "react";
import { useSelector } from "react-redux";
import { Container, Wrapper, ButtonTxt } from "../../Cart";

const AddCart = () => {
  const { cart } = useSelector(({ prodDataReducer: { cart } }) => ({ cart }));

  return (
    <Container>
      <Wrapper onPress={() => alert(cart)}>
        <ButtonTxt>장바구니에 담기</ButtonTxt>
      </Wrapper>
    </Container>
  );
};

export default AddCart;
