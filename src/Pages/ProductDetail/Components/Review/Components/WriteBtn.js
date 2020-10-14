import React from "react";
import styled from "styled-components";

const WriteBtn = () => {
  return (
    <Wrapper>
      <BtnTxt>후기 작성</BtnTxt>
    </Wrapper>
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
