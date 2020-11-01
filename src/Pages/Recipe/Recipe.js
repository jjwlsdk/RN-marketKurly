import React from 'react';
import styled from 'styled-components';
import mixIn from '../../Styles/Mixin';

export default function Recipe() {
  return (
    <Container>
      <HeaderContainer>
        <Header>컬리의 레시피</Header>
        <HeaderIcon source={{uri: `https://res.kurly.com/mobile/service/main/1903/ico_title_link.png`}} />
      </HeaderContainer>
      <InfoContainer>
        <InfoWrap>
          <InfoImage source={{uri: `https://img-cf.kurly.com/shop/data/board/recipe/m/main_v2_8b06410896645e33.jpg`}} />
          <Name>티라미수</Name>
        </InfoWrap>
        <InfoWrap>
          <InfoImage source={{uri: `https://img-cf.kurly.com/shop/data/board/recipe/m/main_v2_8c159e9c2e3bfb34.jpg`}} />
          <Name>도다리</Name>
        </InfoWrap>
      </InfoContainer>
    </Container>
  )
}

const Container = styled.View`
  height: 304px;
  padding: 0 10px 60px 10px;
  background-color: ${({theme}) => theme.color.White};
  `

const InfoContainer = styled.View`
  flex-direction: row;
  `

const HeaderContainer = styled.View`
  ${mixIn.flex("row", "flex-start", "center")};
  padding: 27px 0 15px 0;
`

const Header = styled.Text`
  padding-right: 1px;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
`

const HeaderIcon =styled.Image`
  width: 22px;
  height: 22px;
  padding-right: 21px;
`

const InfoWrap = styled.View`
  width: 240px;
  margin-right: 8px;
`

const InfoImage = styled.Image`
  width: 240px;
  height: 160px;
`

const Name = styled.Text`
  padding-top: 10px;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
`