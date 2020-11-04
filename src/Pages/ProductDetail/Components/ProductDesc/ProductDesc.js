import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import MainImage from "./Components/MainImage";
import GoodsName from "./Components/GoodsName";
import GoodsPrice from "./Components/GoodsPrice";
import GoodsInfo from "./Components/GoodsInfo";
import Info from "./Components/Info";
import DetailInfo from "./Components/DetailInfo";

export default function ProductDesc() {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator="No">
        <Container>
          <MainImage />
          <GoodsName />
          <GoodsPrice />
          <GoodsInfo />
          <Info />
          <DetailInfo />
        </Container>
      </ScrollView>
    </>
  );
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.color.White};
`;
