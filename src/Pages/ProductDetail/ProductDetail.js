import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import actions from "../../Redux/ProductDetail/actions";
import TabBar from "./Components/TabBar";
import Cart from "./Components/Cart";
import { productDetail } from "../../config";

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
      const res = await fetch(`${productDetail}${productId}`);
      const resJson = await res.json();
      dispatch(setData(resJson.product));
    } catch (e) {
      console.log("productDetail: 페치에 실패했습니다.");
    }
  };

  return (
    <>
      <TabBar />
      <Cart />
    </>
  );
};

export default ProductDetail;
