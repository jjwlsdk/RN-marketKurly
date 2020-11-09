import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components";
import ProductList from "./Components/ProductList";

const Stack = createStackNavigator();

export default function Product({ route }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={route.name}
        options={{ headerShown: false }}
        component={ProductItem}
      />
      <Stack.Screen
        name="ProductList"
        options={{ headerShown: false }}
        component={ProductList}
      />
    </Stack.Navigator>
  );
}

function ProductItem({ route, navigation }) {
  return (
    <Page>
      <ProductList sort_by_category={route.name} navigation={navigation} />
    </Page>
  );
}

const Page = styled.View`
  padding: 10px 0 50px;
`;
