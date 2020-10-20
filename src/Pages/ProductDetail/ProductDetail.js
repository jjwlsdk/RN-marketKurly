import React,{useEffect} from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import Header from "./Components/Header";
import MainImage from "./Components/MainImage";
import GoodsName from "./Components/GoodsName";
import GoodsPrice from "./Components/GoodsPrice";
import GoodsInfo from "./Components/GoodsInfo";
import Info from "./Components/Info";

const ProductDetail = ({ route }) => {
const { productId } = route.params

  useEffect(() => {
    console.log(productId)
  }, [productId])
  return (
    <>
      <ScrollView>
          <Container>
          <Header />
          <MainImage />
          <GoodsName />
          <GoodsPrice />
          <GoodsInfo />
          <Info />
        </Container>
      </ScrollView>
    </>
  );
};

export default ProductDetail;

const Container = styled.View`
  background-color: ${({ theme }) => theme.color.White};
`;
