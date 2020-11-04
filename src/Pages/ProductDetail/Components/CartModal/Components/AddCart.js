import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { Container, Wrapper, ButtonTxt } from "../../Cart";

export default function AddCart() {
  const navigation = useNavigation();

  const { data, cart } = useSelector(({ prodDataReducer: { data, cart } }) => ({
    data,
    cart,
  }));

  const handleCart = () => {
    navigation.navigate("CartScreen");

    // fetch(`http://172.30.1.9:8000/user/cart`, {
    //   method: "post",
    //   headers: {
    //     Authorization: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.BAwk01jYJjCSMdifZqmwPWbLi65xV4usBNGiZ8jScPE`,
    //   },
    //   body: JSON.stringify({
    //     product_id: data.id,
    //     product_series_id: data.product_series
    //       ? Object.keys(cart).map((item) => {
    //           return Number(item);
    //         })
    //       : [],
    //     product_count: data.product_series
    //       ? Object.values(cart).map((item) => {
    //           return item.count;
    //         })
    //       : cart.undefined.count,
    //     // product_series_id: [101, 102],
    //     // product_count: [4, 2],
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //   });
  };

  return (
    <Container>
      <Wrapper onPress={handleCart}>
        <ButtonTxt>장바구니에 담기</ButtonTxt>
      </Wrapper>
    </Container>
  );
}
