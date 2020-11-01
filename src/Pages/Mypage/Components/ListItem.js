import React from "react";
import styled from "styled-components";
import mixin from "../../../Styles/Mixin";
import RightArrowImg from "../RightArrowImg";

function ListItem({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Arrow>
        <RightArrowImg />
      </Arrow>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  ${mixin.flex("row", "space-between", "center")};
  height: 50px;
  padding: 0px 16px;
  background-color: ${({ theme }) => theme.color.White};
  border: 1px ${({ theme }) => theme.color.PaleGreyBackground};
`;
const Title = styled.Text`
  color: ${({ theme }) => theme.color.fontBlack};
  font-size: 15px;
`;

const Arrow = styled.View`
  ${mixin.flex()};
  /* border: 1px; */

  /* background: url(); */
`;

export default ListItem;
