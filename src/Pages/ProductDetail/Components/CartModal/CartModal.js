import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import Modal from "react-native-modal";
import styled from "styled-components";
import Header from "./Components/Header";
import CartItem from "./Components/CartItem";
import AddCart from "./Components/AddCart";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function CartModal({ isModal }) {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [isModalVisible, setModalVisible] = useState(false);

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);

    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  useEffect(() => {
    setModalVisible(true);
  }, [isModal]);

  const removeModal = (modal) => {
    setModalVisible(modal);
  };

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
        <AddCart removeModal={removeModal} />
      </Wrapper>
    </BottomModal>
  );
}

const BottomModal = styled(Modal)`
  justify-content: flex-end;
  margin: 0;
`;

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.color.FooterBackground};
`;
