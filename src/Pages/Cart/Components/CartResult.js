import React, { useEffect, useState } from "react";
import styled from "styled-components";
import mixIn from "../../../Styles/Mixin";

export default function CartResult({ data, onChangeTotal }) {
  const [originalTotalCount, setOriginalTotalCount] = useState();
  const [discount, setDiscount] = useState();
  const [deliveryFee, setDelivertFee] = useState();
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    const originalTotal = calOriginaltotalCount();
    const discount = calDiscount();
    const delivery = originalTotal > 30000 ? 0 : 3000;
    const total = originalTotal - discount + delivery;
    setOriginalTotalCount(originalTotal);
    setDiscount(discount);
    setDelivertFee(delivery);
    setTotalPrice(total);
    onChangeTotal(total);
  }, [data]);

  const calOriginaltotalCount = () => {
    return data
      .filter((item) => item.checked === true)
      .reduce((acc, cur) => {
        return acc + cur.product_price * cur.count;
      }, 0);
  };

  const calDiscount = () => {
    return data
      .filter((item) => item.checked === true && item.discount_price !== null)
      .reduce((acc, cur) => {
        return acc + (cur.product_price - cur.discount_price);
      }, 0);
  };

  return (
    <Container>
      <Wrapper>
        <Text>상품금액</Text>
        <Text>{`${originalTotalCount?.toLocaleString()} 원`}</Text>
      </Wrapper>
      <Wrapper>
        <Text>상품할인금액</Text>
        <Text>
          {discount === 0 ? `0 원` : `- ${discount?.toLocaleString()} 원`}
        </Text>
      </Wrapper>
      <Wrapper>
        <Text>배송비</Text>
        <Text>
          {deliveryFee === 0 ? `0 원` : `+ ${deliveryFee?.toLocaleString()} 원`}
        </Text>
      </Wrapper>
      <Wrapper>
        <Text>결제예정금액</Text>
        <Text>{`${totalPrice?.toLocaleString()}원`}</Text>
      </Wrapper>
    </Container>
  );
}

const Container = styled.View`
  margin-top: 10px;
  padding: 12px 20px 75px;
  background-color: white;
`;

const Wrapper = styled.View`
  ${mixIn.flex("row", "space-between", "flex-start")}
  padding-top: 10px;
`;

const Text = styled.Text`
  font-size: 16px;
`;
