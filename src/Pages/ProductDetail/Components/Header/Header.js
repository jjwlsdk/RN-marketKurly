import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import mixIn from "../../../../Styles/Mixin";

export default function Header() {
  const { data } = useSelector(({ prodDataReducer: { data } }) => ({ data }));

  return (
    <Container>
      <Name>{data.name}</Name>
    </Container>
  );
}

export const Container = styled.View`
  ${mixIn.flex("row", "center", "center")}
  height: 50px;
`;

export const Name = styled.Text`
  margin: 0 auto;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
`;
