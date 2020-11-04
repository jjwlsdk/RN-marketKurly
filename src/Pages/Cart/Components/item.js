import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  chekcedDataById,
  removeDataById,
  changeCount,
} from "../../../Redux/Cart/thunk";
import CustomCheckbox from "../../../Components/CheckBox";
import CountBox from "./../Components/CountBox";
import mixIn from "../../../Styles/Mixin";

export default function item({ data }) {
  const dispatch = useDispatch();

  const {
    cart_id,
    product_image,
    product_name,
    product_series_name,
    product_price,
    discount_price,
    count,
    checked,
  } = data;

  return (
    <Container>
      {product_series_name && (
        <Title>
          <Text>{product_name}</Text>
        </Title>
      )}
      <Wrapper>
        <CustomCheckbox
          onClick={() => {
            dispatch(chekcedDataById(cart_id));
          }}
          isChecked={checked}
        />
        <Info>
          <SecondTitle>
            <MediumText>
              {product_series_name ? product_series_name : product_name}
            </MediumText>
            <CancelBtn
              onPress={() => {
                dispatch(removeDataById(cart_id));
              }}
            >
              <CancelImage
                source={require("./../../../../assets/cancel.png")}
              />
            </CancelBtn>
          </SecondTitle>
          <MiddleBox>
            <Img
              source={{
                url: product_image,
              }}
            />
            <PriceBox>
              {discount_price && (
                <DiscountText>{`${discount_price.toLocaleString()}원`}</DiscountText>
              )}
              <Text>{`${product_price.toLocaleString()}원`}</Text>
            </PriceBox>
            <CountWrapper>
              <CountBox
                id={cart_id}
                count={count}
                onPlusPress={() =>
                  dispatch(changeCount(cart_id, count, "plus"))
                }
                onMinusPress={() =>
                  dispatch(changeCount(cart_id, count, "minus"))
                }
              />
            </CountWrapper>
          </MiddleBox>
          <MoneyWrapper>
            <Text>합계</Text>
            <Price>{`${(product_price * count).toLocaleString()}`}</Price>
            <Text>원</Text>
          </MoneyWrapper>
        </Info>
      </Wrapper>
    </Container>
  );
}

const Container = styled.View`
  margin-top: 10px;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.color.White};
`;

const Title = styled.View`
  padding: 10px 0;
  border-bottom-width: 1;
  border-bottom-color: ${({ theme }) => theme.color.FooterBackground};
`;

const Text = styled.Text`
  font-size: 14px;
`;

const Price = styled(Text)`
  margin: 0 5px 0 20px;
  font-weight: bold;
`;

const MediumText = styled.Text`
  font-size: 16px;
`;

const DiscountText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.color.DiscountedCostGrey};
  text-decoration: line-through;
  text-decoration-color: ${({ theme }) => theme.color.DiscountedCostGrey};
`;

const Wrapper = styled.View`
  ${mixIn.flex("row", "flex-start", "flex-start")}
  margin-top: 21px;
`;

const SecondTitle = styled.View`
  ${mixIn.flex("row", "space-between", "flex-start")}
`;

const Info = styled.View`
  flex: 1;
`;

const CancelBtn = styled.TouchableOpacity`
  ${mixIn.flex("column", "center", "flex-start")}
`;

const CancelImage = styled.Image`
  width: 12px;
  height: 12px;
`;

const Img = styled.Image`
  width: 50px;
  height: 60px;
`;

const MiddleBox = styled.View`
  position: relative;
  ${mixIn.flex("row", "flex-start", "flex-end")}
  margin-top: 10px;
`;

const CountWrapper = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const PriceBox = styled.View`
  ${mixIn.flex("column", "flex-end", "flex-start")}
  margin-left: 10px;
`;

const MoneyWrapper = styled.View`
  ${mixIn.flex("row", "flex-end", "flex-start")}
  margin: 9px 0px;
`;
