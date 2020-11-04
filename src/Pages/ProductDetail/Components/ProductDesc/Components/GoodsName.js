import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function GoodsName() {
  const { data } = useSelector(({ prodDataReducer: { data } }) => ({ data }));

  return (
    <>
      <Container>
        <Name>{data.name}</Name>
        <ShortDesc>{data.sub_title}</ShortDesc>
      </Container>
    </>
  );
}

const Container = styled.View`
  padding: 24px 20px 20px;
`;

const Name = styled.Text`
  padding-right: 50px;
  line-height: 26px;
  font-size: 18px;
  font-weight: 600;
`;

const ShortDesc = styled.Text`
  padding: 4px 50px 0 0;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #999;
`;
