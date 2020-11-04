import React from "react";
import styled from "styled-components";
import mixIn from "../Styles/Mixin";

export default function PurpleBtn({ text, onPress, height = "55" }) {
  return (
    <Container>
      <Button onPress={onPress} height={height}>
        <Txt>{text}</Txt>
      </Button>
    </Container>
  );
}

const Container = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.color.White};
`;

const Button = styled.TouchableOpacity`
  ${mixIn.flex()};
  width: 100%;
  height: ${({ height }) => height}px;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  border-color: ${({ theme }) => theme.color.MainPurple};
  background-color: ${({ theme }) => theme.color.MainPurple};
`;

const Txt = styled.Text`
  color: ${({ theme }) => theme.color.White};
  line-height: 52px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;
