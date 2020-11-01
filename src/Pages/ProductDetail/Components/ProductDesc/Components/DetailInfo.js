import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Dimensions, Image } from "react-native";
import styled from "styled-components";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const DetailInfo = () => {
  const { data } = useSelector(({ prodDataReducer: { data } }) => ({ data }));

  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return (
    <>
      <Container>
        <Image
          source={{
            uri: data.description__image,
          }}
          style={{
            width: dimensions.screen.width - 20,
            height: 223,
          }}
        />
        <DescBox>
          <TitleDesc>{data.description__title}</TitleDesc>
          <DetailDesc>{data.description__content}</DetailDesc>
        </DescBox>
        {/* <Image
          source={{
            uri: data.check_point,
          }}
          style={{
            width: dimensions.screen.width,
            height: 100, //빨리 다시 하기
          }}
        /> */}
      </Container>
    </>
  );
};

export default DetailInfo;

const Container = styled.View`
  margin: 0 auto;
  padding: 0 10px;
  text-align: center;
`;

const DescBox = styled.View``;

const TitleDesc = styled.Text`
  margin-top: 48px;
  padding-bottom: 24px;
  color: ${({ theme }) => theme.color.DarkGray};
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;
  text-align: center;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.color.DarkGray};
`;

const DetailDesc = styled.Text`
  margin: 24px 0 36px 0;
  letter-spacing: 0;
  font-size: 14px;
  line-height: 23px;
  color: #373737;
`;
