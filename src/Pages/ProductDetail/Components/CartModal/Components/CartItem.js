import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import actions from "../../../../../Redux/ProductDetail/actions";
import CountBox from "./CountBox";
import { Number, OriginPrice } from "../../ProductDesc/Components/GoodsPrice";
import mixIn from "../../../../../Styles/Mixin";

const CartItem = () => {
  const dispatch = useDispatch();

  const { setCart } = actions;

  const [count, setCount] = useState(0);

  const { data, cart } = useSelector(({ prodDataReducer: { data, cart } }) => ({
    data,
    cart,
  }));

  const handleCount = (item, price, num) => {
    setCount({ ...count, [item]: { price: price * num, count: num } });
    dispatch(setCart({ ...count, [item]: { price: price * num, count: num } }));
  };

  return (
    <>
      <ScrollView>
        <Container>
          {data.product_series.length ? (
            <>
              {data.product_series.map((item, idx) => (
                <>
                  <Name key={idx}>{item.name}</Name>
                  <PriceWrapper>
                    <PriceBox>
                      <Box>
                        <Discounted>{`${item.price.toLocaleString()}원`}</Discounted>
                      </Box>
                      <CountBox
                        id={item.product_series_id}
                        price={item.price}
                        handleCount={handleCount}
                      />
                    </PriceBox>
                  </PriceWrapper>
                </>
              ))}
              <TotalWrapper>
                <Title>합계</Title>
                <Total>{`${Object.values(count)
                  .map((item) => item.price)
                  .reduce((a, b) => {
                    return a + b;
                  }, 0)
                  .toLocaleString()}원`}</Total>
              </TotalWrapper>
            </>
          ) : (
            <>
              <Name>{data.name}</Name>
              <PriceWrapper>
                <PriceBox>
                  {data.price === data.discount_price ? (
                    <Box>
                      <Discounted>{`${data.price?.toLocaleString()}원`}</Discounted>
                    </Box>
                  ) : (
                    <Box>
                      <Original>{`${data.price?.toLocaleString()}원`}</Original>
                      <Discounted>{`${data.discount_price?.toLocaleString()}원`}</Discounted>
                    </Box>
                  )}
                  <CountBox id={data.id} handleCount={handleCount} />
                </PriceBox>
              </PriceWrapper>
              <TotalWrapper>
                <Title>합계</Title>
                <Total>{`${
                  data.price === data.discount_price
                    ? (count[data.id]?.count * data.price).toLocaleString()
                    : (
                        count[data.id]?.count * data.discount_price
                      ).toLocaleString()
                }원`}</Total>
              </TotalWrapper>
            </>
          )}
        </Container>
      </ScrollView>
    </>
  );
};

export default CartItem;

const Container = styled.View`
  margin: 10px;
  padding: 12px;
  background-color: ${({ theme }) => theme.color.White};
`;

const Name = styled.Text`
  font-size: 14px;
`;

const PriceWrapper = styled.View`
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.color.FooterBackground};
`;

const PriceBox = styled.View`
  ${mixIn.flex("row", "space-between", "center")}
  padding-top: 25px;
  padding-bottom: 10px;
`;

const Box = styled.View`
  ${mixIn.flex("row", "center", "center")}
`;

const Original = styled(OriginPrice)`
  padding: 0;
  font-size: 12px;
`;

const Discounted = styled(Number)`
  padding-left: 2px;
  font-weight: 600;
  font-size: 14px;
`;

const TotalWrapper = styled.View`
  ${mixIn.flex("row", "space-between", "center")}
  padding-top: 15px;
`;

const Title = styled.Text`
  font-size: 16px;
`;

const Total = styled(Discounted)`
  font-size: 16px;
`;
