import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import ProductList from './Components/ProductList';
import actions from '../../Redux/Product/actions';

export default function Product({route}) {
  const { sub_category_id } = route.params;
  const dispatch = useDispatch();
  const { getId } = actions;
  
  useEffect(() => {
    // console.log(route.params)
    dispatch(getId(sub_category_id));
  }, [])

  return (
    <Page>
      <ProductList subCategoryId={sub_category_id}/>
    </Page>
  )
}

const Page = styled.View`
  padding: 10px 0 50px;
  `