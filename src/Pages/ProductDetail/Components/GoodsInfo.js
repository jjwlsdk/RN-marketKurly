import React from "react";
import styled from "styled-components";

const GoodsInfo = () => {
  return (
    <Container>
      <List>
        <Title>판매단위</Title>
        <Desc>1개</Desc>
      </List>
      <List>
        <Title>중량/용량</Title>
        <Desc>125g</Desc>
      </List>
      <List>
        <Title>배송구분</Title>
        <Desc>샛별배송/택배배송</Desc>
      </List>
      <List>
        <Title>원산지</Title>
        <Desc>수입산(벨기에)</Desc>
      </List>
      <List>
        <Title>포장타입</Title>
        <Desc>냉동/종이포장</Desc>
      </List>
    </Container>
  );
};

export default GoodsInfo;

const Container = styled.View`
  margin: 19px 20px 0;
  padding: 10px 0 19px;
  border-style: solid;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.color.FooterBackground};
`;

const List = styled.View`
  flex-direction: row;
  padding-top: 10px;
`;

const Title = styled.Text`
  width: 85px;
  padding-right: 4px;
  font-size: 14px;
  color: #666;
  line-height: 20px;
`;

const Desc = styled.Text`
  font-weight: 500;
  font-size: 14px;
  color: #333;
  line-height: 20px;
`;
