import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import PurpleBtn from "../../Components/PurpleBtn";
import Cart from "./Cart";
import CartResult from "./Components/CartResult";
import { getCartData } from "../../Redux/Cart/thunk";
import mixIn from "../../Styles/Mixin";

function CartScreen(props) {
  const data = useSelector((state) => state.cartReducer.data);
  const dispatch = useDispatch();
  const [total, setTotal] = useState();
  useEffect(() => {
    dispatch(getCartData());
  }, []);

  const onChangeTotal = (result) => {
    setTotal(result);
  };

  return (
    <Container>
      <ScrollView>
        <Cart data={data} />
        <CartResult data={data} onChangeTotal={onChangeTotal} />
      </ScrollView>
      <BtnWrapper>
        <PurpleBtn
          text={`${total?.toLocaleString()}원 주문하기`}
          onPress={() => {
            console.log("구매버튼누르기");
          }}
        />
      </BtnWrapper>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  position: relative;
  padding-bottom: 20px;
`;

const BtnWrapper = styled.View`
  ${mixIn.flex()}
  width: 100%;
  padding: 0 14px 50px;
  background-color: ${({ theme }) => theme.color.White};
`;

export default CartScreen;
