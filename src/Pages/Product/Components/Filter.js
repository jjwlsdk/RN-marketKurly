import React from "react";
import styled from 'styled-components';
import mixIn from '../../../Styles/Mixin';

export default function Filter() {
  return (
    <Container>
      <Location>
        <Item>샛별지역상품</Item>
        <Icon source={{uri: 'https://res.kurly.com/mobile/ico/1908/ico_arrow_top_20x20.png'}}/>
      </Location>
      <New>
        <Item>신상품순</Item>
        <Icon source={{uri: 'https://res.kurly.com/mobile/ico/1908/ico_arrow_top_20x20.png'}}/>
      </New>
    </Container>
  )
}


const Container = styled.View`
  ${mixIn.flex("row", "space-between")};
  padding: 0 10px; 
`

const Location = styled.View`
  position: relative;
  width: 111px;
  height: 44px;
`

const New = styled.View`
  position: relative;
  width: 90px;
  height: 44px;
`

const Item = styled.Text`
  padding: 12px 0 13px 12px;
  font-size: 14px;
  color: ${({theme}) => theme.color.DarkGray};
`

const Icon = styled.Image`
  position: absolute;
  right: 20px;
  bottom: 21px;
  width: 10px;
  height: 10px;
  margin-left: 5px;
`