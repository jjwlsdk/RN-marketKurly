import React, { useState, useEffect } from "react";
import styled from 'styled-components';

export default function Filter() {
  return (
    <FilterConTainer>
      <FilterLeft>
        <FilterItem>샛별지역상품</FilterItem>
        <FiterIcon source={{uri: 'https://res.kurly.com/mobile/ico/1908/ico_arrow_top_20x20.png'}}/>
      </FilterLeft>
      <FilterRight>
        <FilterItem>신상품순</FilterItem>
        <FiterIcon source={{uri: 'https://res.kurly.com/mobile/ico/1908/ico_arrow_top_20x20.png'}}/>
      </FilterRight>
    </FilterConTainer>
  )
}

const FilterConTainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px; 
`
const FilterLeft = styled.View`
  position: relative;
  width: 111px;
  height: 44px;
`
const FilterRight = styled.View`
  position: relative;
  width: 90px;
  height: 44px;
`
const FilterItem = styled.Text`
  padding: 12px 0 13px 12px;
  font-size: 14px;
  color: #666;
`

const FiterIcon = styled.Image`
  position: absolute;
  right: 20px;
  bottom: 21px;
  width: 10px;
  height: 10px;
  margin-left: 5px;
`