import React from "react";
import styled from "styled-components";
import mixIn from "../../../../../Styles/Mixin";

export default function Header() {
  return (
    <Container>
      <Close
        source={{
          uri:
            "https://res.kurly.com/mobile/service/common/1908/ico_close_333_100x100.png",
        }}
      />
      <Title>상품선택</Title>
    </Container>
  );
}

const Container = styled.View`
  ${mixIn.flex("row", "center", "center")}
  position: relative;
  height: 55px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.color.SubtitlePaleGrey};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.White};
`;

const Close = styled.Image`
  position: absolute;
  left: 0;
  width: 50px;
  height: 50px;
`;

const Title = styled.Text`
  margin: 0 auto;
  line-height: 26px;
  font-weight: 600;
  font-size: 16px;
`;
