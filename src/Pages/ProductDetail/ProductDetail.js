import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import actions from "../../Redux/ProductDetail/actions";
import TabBar from "./Components/TabBar";
import Cart from "./Components/Cart";

const ProductDetail = ({ route }) => {
  const { productId } = route.params;

  const dispatch = useDispatch();
  const { setData, setId } = actions;

  useEffect(() => {
    fetchData();
    dispatch(setId(productId));
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:4001/product/${productId}`);
      // const res = await fetch(`http://172.30.1.4:8000/products/${productId}`);
      const resJson = await res.json();
      dispatch(setData(resJson.product));
      // dispatch(setData(resJson));
    } catch (e) {
      console.log("productDetail: 페치에 실패했습니다.");
    }
  };

  return (
    <>
      <Container>
        <ScrollView>
          <TabBar />
        </ScrollView>
        <Cart />
      </Container>
    </>
  );
};

export default ProductDetail;

const Container = styled.View`
  background-color: ${({ theme }) => theme.color.White};
`;