import React from "react";
import { Container, Wrapper, ButtonTxt } from "../../Cart";

const AddCart = () => {
  return (
    <Container>
      <Wrapper onPress={() => alert("Added!")}>
        <ButtonTxt>장바구니에 담기</ButtonTxt>
      </Wrapper>
    </Container>
  );
};

export default AddCart;
