import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function GoodsInfo() {
  const { data } = useSelector(({ prodDataReducer: { data } }) => ({ data }));

  return (
    <Container>
      {data.unit ? (
        <List>
          <Title>판매단위</Title>
          <Desc>{data.unit}</Desc>
        </List>
      ) : null}
      {data.weight ? (
        <List>
          <Title>중량/용량</Title>
          <Desc>{data.weight}</Desc>
        </List>
      ) : null}
      {data.delivery_types ? (
        <List>
          <Title>배송구분</Title>
          <Desc>{data.delivery_types.join("/")}</Desc>
        </List>
      ) : null}
      {data.origin ? (
        <List>
          <Title>원산지</Title>
          <Desc>{data.origin}</Desc>
        </List>
      ) : null}
      {data.shipping_type ? (
        <List>
          <Title>포장타입</Title>
          <Desc>{data.shipping_type}</Desc>
        </List>
      ) : null}
      {data.allergen ? (
        <List>
          <Title>알레르기정보</Title>
          <Desc>{data.allergen}</Desc>
        </List>
      ) : null}
      {data.information ? (
        <List>
          <Title>안내사항</Title>
          <Desc>{data.information}</Desc>
        </List>
      ) : null}
    </Container>
  );
}

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
  line-height: 20px;
  font-size: 14px;
  color: #666;
`;

const Desc = styled.Text`
  line-height: 20px;
  font-weight: 500;
  font-size: 14px;
  color: #333;
`;
