import React from "react";
import styled from 'styled-components';
import ProductList from './Components/ProductList';

export default function Product({route}) {
  const { sort_by_category, sort_by_filter, navigation } = route.params;

  return (
    <Page>
      <ProductList 
        sort_by_category={sort_by_category}
        sort_by_filter={sort_by_filter}
        navigation={navigation}
      />
    </Page>
  )
}

const Page = styled.View`
  padding: 10px 0 50px;
  `
