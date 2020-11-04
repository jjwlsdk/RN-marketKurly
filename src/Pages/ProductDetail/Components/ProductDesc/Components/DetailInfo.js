import React, { useState, useEffect } from "react";
import { Dimensions, Image } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function DetailInfo() {
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
      </Container>
    </>
  );
}

const Container = styled.View`
  margin: 0 auto;
  padding: 0 10px;
  text-align: center;
`;

const DescBox = styled.View``;

const TitleDesc = styled.Text`
  margin-top: 48px;
  padding-bottom: 24px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.color.DarkGray};
  line-height: 32px;
  font-weight: 700;
  font-size: 26px;
  color: ${({ theme }) => theme.color.DarkGray};
  text-align: center;
`;

const DetailDesc = styled.Text`
  margin: 24px 0 36px 0;
  line-height: 23px;
  font-size: 14px;
  letter-spacing: 0;
  color: #373737;
`;
