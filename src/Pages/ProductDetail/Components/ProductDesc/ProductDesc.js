import React from "react";
import styled from "styled-components";
import MainImage from "./Components/MainImage";
import GoodsName from "./Components/GoodsName";
import GoodsPrice from "./Components/GoodsPrice";
import GoodsInfo from "./Components/GoodsInfo";
import Info from "./Components/Info";
import DetailInfo from "./Components/DetailInfo";

const ProductDesc = () => {
  return (
    <>
      <Container>
        <MainImage />
        <GoodsName />
        <GoodsPrice />
        <GoodsInfo />
        <Info />
        <DetailInfo />
      </Container>
    </>
  );
};

export default ProductDesc;

const Container = styled.View`
  background-color: ${({ theme }) => theme.color.White};
`;
