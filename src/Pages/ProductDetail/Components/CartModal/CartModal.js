import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";
import Modal from "react-native-modal";
import Header from "./Components/Header";
import CartItem from "./Components/CartItem";
import AddCart from "./Components/AddCart";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const CartModal = ({ isModal }) => {
  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(true);
  }, [isModal]);

  return (
    <BottomModal
      isVisible={isModalVisible}
      swipeDirection="down"
      onSwipeComplete={() => setModalVisible(false)}
      hideModalContentWhileAnimating={true}
      useNativeDriver={true}
      backdropOpacity={0}
    >
      <Wrapper style={{ height: dimensions.screen.height - 50 }}>
        <Header />
        <CartItem />
        <AddCart />
      </Wrapper>
    </BottomModal>
  );
};

const BottomModal = styled(Modal)`
  justify-content: flex-end;
  margin: 0;
`;

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.color.FooterBackground};
`;

export default CartModal;
