import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { getData } from "../../../../../Api/api";
import { Container, Wrapper, ButtonTxt } from "../../Cart";
import { addCart } from "../../../../../config";

export default function AddCart({ removeModal }) {
  const [modal, setModal] = useState(true);

  const { data, cart } = useSelector(({ prodDataReducer: { data, cart } }) => ({
    data,
    cart,
  }));

  const navigation = useNavigation();

  useEffect(() => {
    removeModal(modal);
  }, [modal]);

  const handleCart = async () => {
    const res = await fetch(`${addCart}`, {
      method: "post",
      headers: {
        Authorization: await getData(),
      },
      body: JSON.stringify({
        product_id: data.id,
        product_series_id: data.product_series
          ? Object.keys(cart).map((item) => {
              return Number(item);
            })
          : [],
        product_count: data.product_series
          ? Object.values(cart).map((item) => {
              return item.count;
            })
          : cart[data.id].count,
      }),
    });
    const resJson = await res.json();
    console.log("AddCart:", resJson);
    await setModal(false);
    await navigation.navigate("CartScreen");
  };

  return (
    <Container>
      <Wrapper onPress={handleCart}>
        <ButtonTxt>장바구니에 담기</ButtonTxt>
      </Wrapper>
    </Container>
  );
}
