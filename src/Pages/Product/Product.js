import React, {useEffect} from "react";
import styled from 'styled-components';
import ProductList from './Components/ProductList';
import ProductDetail from '../ProductDetail/ProductDetail';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function Product({ route }) {
  return(
    <Stack.Navigator>
    <Stack.Screen name={route.name}
      options={{ headerShown: false }}
      component={ProductItem} />
    <Stack.Screen name="ProductList"
    options={{ headerShown: false }}
    component={ProductList} />
    <Stack.Screen name="ProductDetail"
      options={{ headerShown: false }}
      component={ProductDetail} />
  </Stack.Navigator>
  )
}

function ProductItem({ route, navigation }) {
  return (
    <Page>
      <ProductList 
        sort_by_category={route.name}
        navigation={navigation}
      />
    </Page>
  )
}

const Page = styled.View`
  padding: 10px 0 50px;
  `
