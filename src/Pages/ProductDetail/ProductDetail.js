import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import actions from "../../Redux/ProductDetail/actions";
import TabBar from "./Components/TabBar";
import Cart from "./Components/Cart";
import { productDetail } from "../../config";

const ProductDetail = ({ route }) => {
  const { productId } = route.params.params;

  const dispatch = useDispatch();

  const { setData, setId } = actions;

  useEffect(() => {
    fetchData();
    dispatch(setId(productId));
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(`${productDetail}${productId}`);
      // const res = await fetch(`http://172.30.1.4:8000/products/${productId}`);
      const resJson = await res.json();
      // dispatch(setData(resJson.product));
      dispatch(setData(resJson));
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
