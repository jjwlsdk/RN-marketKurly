import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Filter from "./Filter";
import { productList } from "../../../config";
import mixIn from "../../../Styles/Mixin";

const LIMIT = 10;

export default function ProductList({ sort_by_category, navigation }) {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  const { filter, delivery } = useSelector(
    ({ productReducer: { filter, delivery } }) => ({
      filter,
      delivery,
    })
  );

  // useEffect(()=> console.log(sort_by_category, sort_by_filter),[])

  // const fetchData = async() => {
  //   try{
  //   const res = await fetch(`http://172.30.1.4:8000/products/`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //         "sort_by_category": sort_by_category,
  //         "sort_by_filter": filter,
  //         "sort_by_delivery": delivery
  //     })
  //   });
  //   const resJson = await res.json();
  //   const newResJson = resJson.products.slice(offset, offset + LIMIT)
  //   setData(data.concat(newResJson))
  //   await setOffset(offset + LIMIT)
  // } catch(e) {
  //   console.log("페치에 실패했습니다.")
  //   }
  // };

  // npx json-server ./src/Data/Product/main.json --port 4000
  // 서버가 닫혀있을때 이용해주세요
  const fetchData = async () => {
    try {
      const res = await fetch(`${productList}`);
      const resJson = await res.json();
      const newResJson = resJson.slice(offset, offset + LIMIT);
      setData(data.concat(newResJson));
      await setOffset(offset + LIMIT);
      // console.log(data);
    } catch (e) {
      console.log("페치에 실패했습니다.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <ProductContainer
        onPress={() =>
          navigation.navigate("ProductDetail", {
            productId: item.id,
          })
        }
      >
        <ProductWrap>
          <ImgWrap>
            <ProductImg source={{ uri: item.image ? `${item.image}` : null }} />
            <Sale
              source={{
                uri: item.discount__image ? `${item.discount__image}` : null,
              }}
            />
            <Cart
              source={{
                uri:
                  "https://res.kurly.com/mobile/ico/1908/ico_goodslist_cart.png",
              }}
            />
          </ImgWrap>
          <InfoWrap>
            <ProductName numberOfLines={2}>{item.name}</ProductName>
            <PriceWrap>
              <DiscountPrice
                price={item.discount_price}
                discount={item.price}
              >{`${item.price.toLocaleString()}원`}</DiscountPrice>
              <ProductPrice>{`${item.discount_price.toLocaleString()}원`}</ProductPrice>
            </PriceWrap>
          </InfoWrap>
          <TagWrap>
            <ProductTag tag={item.tag__name}>{item.tag__name}</ProductTag>
          </TagWrap>
        </ProductWrap>
      </ProductContainer>
    );
  };

  const onEndReached = () => {
    fetchData();
  };

  return (
    <Container>
      <Filter />
      <Test>
        <FlatList
          // ListHeaderComponent={Filter}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, idx) => idx.toString()}
          numColumns={2}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.6}
        />
      </Test>
    </Container>
  );
}

const Container = styled.View`
  padding: 0 10px;
  margin-top: 5px;
`;

const ProductContainer = styled.TouchableOpacity`
  padding: 0 5px 20px 0;
`;

const ProductWrap = styled.View`
  width: 172px;
  background-color: ${({ theme }) => theme.color.White};
`;

const ImgWrap = styled.View`
  position: relative;
`;

const ProductImg = styled.Image`
  height: 222px;
`;

const Sale = styled.Image`
  position: absolute;
  left: 0;
  top: 0;
  width: 45px;
  height: 39px;
`;

const Cart = styled.Image`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 40px;
  height: 40px;
`;

const InfoWrap = styled.View`
  height: 73px;
  padding: 8px 10px 0;
`;

const ProductName = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.color.fontBlack};
  line-height: 20px;
`;

const PriceWrap = styled.View`
  flex-direction: row;
  padding-top: 4px;
`;

const DiscountPrice = styled.Text`
  display: ${({ discount, price }) => (discount === price ? "none" : "flex")};
  padding-right: 1px;
  ${mixIn.sale};
`;
const ProductPrice = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.color.fontBlack};
`;

const TagWrap = styled.View`
  height: 26px;
  padding: 0 10px;
`;

const ProductTag = styled.Text`
  align-self: flex-start;
  height: 15px;
  padding: 0 5px;
  margin-left: 2px;
  border: ${({ tag, theme }) =>
    tag ? `1px solid ${theme.color.MainPurple}` : "none"};
  font-weight: 600;
  font-size: 10px;
  color: ${({ theme }) => theme.color.MainPurple};
  line-height: 14px;
`;

const Test = styled.View`
  margin-top: -155px;
  z-index: -100;
`;
