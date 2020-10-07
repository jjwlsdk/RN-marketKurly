import React, { useEffect } from "react";
import { View } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Product from './Product/Product';

const Detail = () => {
  return (
    <View>
      <Product route="detail" />
    </View>  
  )
}

export default Detail
