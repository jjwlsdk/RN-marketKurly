import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import { FlatList } from 'react-native';
import { fetchingData } from '../../Redux/Product/thunk';
import Filter from '../Product/Components/Filter';


export default function Product() {
  const dispatch = useDispatch();
  const { data } = useSelector(({ productReducer: { data }}) => ({ data }));

  useEffect(()=> {
    dispatch(fetchingData());
  },[])

  const renderItem = ({item}) => {    
    return (
      <ProductContainer>
        <ProductWrap>
          <ImgWrap>
            <ProductImg source={{uri: `${item.image}`}}/>
            <Sale source={{uri: `${item.discount_image}`}} />
            <Cart source={{uri: 'https://res.kurly.com/mobile/ico/1908/ico_goodslist_cart.png'}} />
          </ImgWrap>
          <InfoWrap>
            <ProductName>{item.name}</ProductName>
            <PriceWrap >
              <DiscountPrice discount={item.discount_price} >{`${item.discount_price.toLocaleString()}원`}</DiscountPrice>
              <ProductPrice>{`${item.origin_price.toLocaleString()}원`}</ProductPrice>
            </PriceWrap>
          </InfoWrap>
          <TagWrap>
            <ProductTag tag={item.tag}>{item.tag}</ProductTag>
          </TagWrap>
        </ProductWrap>
      </ProductContainer>
    )
  }

  const onEndReached = () => {
    dispatch(fetchingData());
  }

  return (
    <Page>
      <Filter />
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, idx) => idx.toString()}
        numColumns={2}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.6}
      />
    </Container>
    </Page>
  )
}

const Page = styled.View`
  padding: 10px 0 50px;
  `

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 10px;
`

const ProductContainer = styled.View`
  width: 50%;
  padding: 0 5px 20px 0;
  `

const ProductWrap = styled.View`
  background-color: #fff;
`

const ImgWrap = styled.View`
  position:relative;
  width: 100%;
`

const ProductImg = styled.Image`
  height: 222px;
`

const Sale = styled.Image`
  position: absolute;
  left: 0;
  top: 0;
  width: 45px;
  height: 39px;
`

const Cart = styled.Image`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 40px;
  height: 40px;
`

const InfoWrap = styled.View`
  height: 73px;
  padding: 8px 10px 0;
`

const ProductName = styled.Text`
  font-size: 14px;
  color: #333;
  line-height: 20px;
`

const PriceWrap = styled.View`
  flex-direction: row;
  padding-top: 4px;
`
const DiscountPrice = styled.Text`
  display: ${({ discount }) => discount.toString().length <= 1 ? "none" : "flex"  };
  padding-right: 1px;
  font-size: 12px;
  color: #ccc;
  text-decoration: line-through;
  text-decoration-color: #ccc;
`
const ProductPrice = styled.Text`
  font-size: 14px;
  color: #333;
`

const TagWrap = styled.View`
  height: 26px;
  padding: 0 10px;
`

const ProductTag = styled.Text`
  align-self: flex-start;
  height: 15px;
  padding: 0 5px;
  margin-left: 2px;
  border: ${({tag, theme}) => tag.length < 1 ? "none" :"1px solid #5f0080" };
  font-weight: 600;
  font-size: 10px;
  color: #5f0080;
  line-height: 14px;
`