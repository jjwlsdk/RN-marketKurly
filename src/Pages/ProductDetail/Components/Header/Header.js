import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Header = () => {
  const { data } = useSelector(({ prodDataReducer: { data } }) => ({ data }));

  return (
    <Container>
      <Name>{data.name}</Name>
    </Container>
  );
};

export default Header;

const Container = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.Text`
  margin: 0 auto;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
`;
