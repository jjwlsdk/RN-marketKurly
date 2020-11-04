import React from "react";
import styled from "styled-components";

export default function Title({ text, isRedDot = true }) {
  return (
    <Container>
      {text}
      {isRedDot && <RedDot>*</RedDot>}
    </Container>
  );
}

const Container = styled.Text`
  padding: 17px 0px 7px;
  font-size: 12px;
`;

const RedDot = styled.Text`
  color: red;
  font-size: 12px;
`;
