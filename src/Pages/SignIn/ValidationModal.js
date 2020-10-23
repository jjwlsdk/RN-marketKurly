import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import styled from "styled-components";

function ValidationModal({ isModal, text }) {
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (text) {
      setModalVisible(true);
    }
  }, [isModal]);

  const hide = () => {
    setTimeout(() => {
      setModalVisible(false);
    }, 1000);
  };

  return (
    <BottomModal
      isVisible={isModalVisible}
      animationOutTiming={2000}
      onModalShow={hide}
      hideModalContentWhileAnimating={true}
      useNativeDriver={true}
      backdropOpacity={0}
    >
      <Wrapper>
        <Content>{text}</Content>
      </Wrapper>
    </BottomModal>
  );
}

const BottomModal = styled(Modal)`
  justify-content: flex-end;
  margin: 0;
`;

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.color.DarkGray};
  padding: 22px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const Content = styled.Text`
  color: ${({ theme }) => theme.color.White};
  font-size: 16px;
`;

export default ValidationModal;
