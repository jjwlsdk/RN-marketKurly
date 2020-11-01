import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";

const WriteBtn = () => {
  const navigation = useNavigation();

  return (
    <>
      {/* 모달 작동 안 함 */}
      <Wrapper onPress={() => navigation.navigate("ReviewModal")}>
        <BtnTxt>후기 작성</BtnTxt>
      </Wrapper>
    </>
  );
};

export default WriteBtn;

const Wrapper = styled.TouchableOpacity`
  height: 50px;
  border: 1px solid #5f0080;
  background-color: #fff;
`;

const BtnTxt = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: #5f0080;
  line-height: 50px;
  text-align: center;
`;
