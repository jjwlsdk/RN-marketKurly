import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { FlatList, TouchableOpacity, Text } from 'react-native';
// import { fetchingData } from '../../Redux/Product/thunk';
import actions from '../../Redux/Product/actions';
import styled from 'styled-components';
import mixIn from '../../Styles/Mixin';

const LIMIT = 10;

export default function SlideProd(props) {
  const { header, category, subCategoryId, navigation } = props;
  const dispatch = useDispatch();
  const { getData, getOffset } = actions;
  const { data } = useSelector(({ productReducer: { data }}) => ({ data }));
  const { offset } = useSelector(({ productReducer: { offset }}) => ({ offset }));
  // const DATA = data.products;
  const DATA = data;

  // useEffect(()=> {
  //   dispatch(fetchingData());
  // },[])

  useEffect(() => {
    fetchData();
  },[])


  // const fetchData = async() => {
  //   try{
  //   const res = await fetch(`http://localhost:4000/products/`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //         "sub_category_id": subCategoryId
  //     })
  //   });
  //   const resJson = await res.json();
  //   dispatch(getData(data.concat(resJson.slice(offset, offset + LIMIT))))
  //   dispatch(await getOffset(offset + LIMIT))
  // } catch(e) {
  //   console.log("페치에 실패했습니다.")
  //   }
  // }

  const fetchData = async() => {
    try{
    const res = await fetch(`http://localhost:4000/products`);
    const resJson = await res.json();
    dispatch(getData(data.concat(resJson.slice(offset, offset + LIMIT))))
    dispatch(await getOffset(offset + LIMIT))
  } catch(e) {
    console.log("페치에 실패했습니다.")
    }
  }

  const renderItem = ({ item }) => {    
    return (
      <ProductContainer 
        onPress={() => navigation.navigate('Product', {
          sub_category_id: "2",
          itemId: "이것은 아이디 입니다.",
          otherParam: "이것은 파람스입니다."
      })}>
        <ProductWrap category={category}>
          <ImgWrap>
            <ProductImg source={{uri: item.image ? `${item.image}` : null }}/>
            <Sale source={{uri: item.discount__image ? `${item.discount__image}` : null }} />
          </ImgWrap>
          <InfoWrap>
            <ProductName numberOfLines={2}>{item.name}</ProductName>
            <PriceWrap >
              <ProductPrice >{`${item.discount_price.toLocaleString()}원`}</ProductPrice>
              <DiscountPrice price={item.discount_price} discount={item.price} >{`${item.price.toLocaleString()}원`}</DiscountPrice>
            </PriceWrap>
          </InfoWrap>
        </ProductWrap>
      </ProductContainer>
    )
  } 

  const onEndReached = () => {
    fetchData();
  }

  return (
    <Container category={category}>
      <HeaderContainer>
        <TitleWrap>
          <HeaderWrap>
          <Header>{header}</Header>
          <HeaderIcon source={{uri: `https://res.kurly.com/mobile/service/main/1903/ico_title_link.png`}} />
          </HeaderWrap>
          <TitleDesc category={category}>매일 정오, 컬리의 새로운 상품을 만나보세요</TitleDesc>
        </TitleWrap>
      </HeaderContainer>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, idx) => idx.toString()}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.6}
        horizontal
      />
    </Container>
  )
}

const Container = styled.View`
  width: 375px;
  height: 402px;
  padding: 0 10px;
  background-color: ${({theme, category}) => category === "new" ? `${theme.color.grey}` : `${theme.color.White}`};
`

const ProductContainer = styled.TouchableOpacity`
  padding-left: 15px;
  `

const ProductWrap = styled.View`
  width: 150px;
  background-color: ${({theme, category}) => category === "new" ? `${theme.color.grey}` : `${theme.color.White}`};
`

const ImgWrap = styled.View`
  position:relative;
`

const ProductImg = styled.Image`
  height: 195px;
`

const Sale = styled.Image`
  position: absolute;
  left: 0;
  top: 0;
  width: 39px;
  height: 34px;
`

const InfoWrap = styled.View`
  height: 120px;
`

const ProductName = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  color: ${({theme}) => theme.color.fontBlack};
  line-height: 20px;
`

const PriceWrap = styled.View`
  line-height: 16px;
`
const DiscountPrice = styled.Text`
  display: ${({ discount, price }) => discount == price ? "none" : "flex" };
  padding-top: 2px;
  ${mixIn.sale};
`
const ProductPrice = styled.Text`
  padding-top: 3px;
  font-weight: 600;
  font-size: 14px;
  color: ${({theme}) => theme.color.fontBlack};
`


const HeaderContainer = styled.View`
  padding: 27px 0 0 15px;
`

const TitleWrap = styled.View`
  padding: 14px 0;
`

const HeaderWrap = styled.View`
  ${mixIn.flex("row", "flex-start", "flex-start")};
`

const Header = styled.Text`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`

const HeaderIcon =styled.Image`
  width: 22px;
  height: 22px;
  padding-right: 21px;
`

const TitleDesc = styled.Text`
  display: ${({category}) => category ==="new" ? "flex" : "none" };
  padding-top: 4px;
  font-weight: 400;
  font-size: 14px;
  color: ${({theme}) => theme.color.SubtitlePaleGrey};
`
