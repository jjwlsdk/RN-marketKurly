import React from "react";
import { useDispatch } from 'react-redux'
import styled from 'styled-components';
import mixIn from '../../../Styles/Mixin';
import DropDownPicker from 'react-native-dropdown-picker';
import action from '../../../Redux/Product/actions';

export default function Filter() {

  const { getFilter, getDelivery } = action;
  const dispatch = useDispatch();

  return (
    <Container>
      <DropDownPicker
        items={[
          {label: '샛별지역상품', selected: true},
          {label: '택배지역상품'},
        ]}
        style={{ backgroundColor: "#F4F4F4", borderColor: "#F4F4F4" }}
        arrowStyle={{ "color": "#333" }}
        containerStyle={{ "height": 40, "width": 115 }}
        labelStyle={{ "width": 100, "color": "#333", "textAlign": "right" }}
        itemStyle={{ "paddingLeft": 0, "paddingRight": 45 }}
        onChangeItem={item => dispatch(getDelivery(item.label))}
      />
        <DropDownPicker
        items={[
          {label: '신상품순', selected: true},
          {label: '인기상품순'},
          {label: '낮은 가격순'},
          {label: '높은 가격순'},
        ]}
        style={{ backgroundColor: "#F4F4F4", borderColor: "#F4F4F4" }}
        arrowStyle={{ "color": "#333", "paddingRight": 0 }}
        containerStyle={{ "height": 40, "width": 110 }}
        labelStyle={{ "width": 100, "color": "#333", "textAlign": "right" }}
        itemStyle={{ "paddingRight": 11 }}
        onChangeItem={item => dispatch(getFilter(item.label))}
      />
    </Container>
  )
}


const Container = styled.View`
  ${mixIn.flex("row", "space-between", "flex-start")};
  height: 200px;
`