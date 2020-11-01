import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const GoodsName = () => {
  const { data } = useSelector(({ prodDataReducer: { data } }) => ({ data }));

  return (
    <>
      <Container>
        <Name>{data.name}</Name>
        <ShortDesc>{data.sub_title}</ShortDesc>
      </Container>
    </>
  );
};

export default GoodsName;

const Container = styled.View`
  padding: 24px 20px 20px;
`;

const Name = styled.Text`
  padding-right: 50px;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
`;

const ShortDesc = styled.Text`
  padding: 4px 50px 0 0;
  font-weight: 500;
  font-size: 14px;
  color: #999;
  line-height: 20px;
`;

const ShareBtn = styled.Button`
  overflow: hidden;
  position: absolute;
  right: 0;
  top: -1px;
  width: 40px;
  height: 40px;
  border: 0;
  background: url(https://res.kurly.com/mobile/service/goodsview/1910/ico_view_sns_x2.png)
    no-repeat 50% 50%;
  background-size: 40px 40px;
  font-size: 0;
  text-indent: -9999px;
`;
