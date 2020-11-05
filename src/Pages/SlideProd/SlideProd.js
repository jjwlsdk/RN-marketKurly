import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import { productList } from "../../config";
import mixIn from "../../Styles/Mixin";

const LIMIT = 10;

export default function SlideProd({ sort_by_sub_category, navigation }) {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(`${productList}`, {
        method: "POST",
        body: JSON.stringify({
          sort_by_sub_category: sort_by_sub_category,
        }),
      });
      const resJson = await res.json();
      const newResJson = resJson.products.slice(offset, offset + LIMIT);
      setData(data.concat(newResJson));
      await setOffset(offset + LIMIT);
    } catch (e) {
      console.log("페치에 실패했습니다.");
    }
  };

  const renderItem = ({ item }) => {
    return (
      <ProductContainer
        onPress={() =>
          navigation.navigate("ProductDetail", {
            productId: item.id,
          })
        }
      >
        <ProductWrap category={sort_by_sub_category}>
          <ImgWrap>
            <ProductImg source={{ uri: item.image ? `${item.image}` : null }} />
            <Sale
              source={{
                uri: item.discount__image ? `${item.discount__image}` : null,
              }}
            />
          </ImgWrap>
          <InfoWrap>
            <ProductName numberOfLines={2}>{item.name}</ProductName>
            <PriceWrap>
              <ProductPrice>{`${item.discount_price.toLocaleString()}원`}</ProductPrice>
              <DiscountPrice
                price={item.discount_price}
                discount={item.price}
              >{`${item.price.toLocaleString()}원`}</DiscountPrice>
            </PriceWrap>
          </InfoWrap>
        </ProductWrap>
      </ProductContainer>
    );
  };

  const onEndReached = () => {
    fetchData();
  };
  return (
    <Container category={sort_by_sub_category}>
      <HeaderContainer>
        <TitleWrap>
          <HeaderWrap>
            <Header>{sort_by_sub_category}</Header>
            <HeaderIcon
              source={{
                uri: `https://res.kurly.com/mobile/service/main/1903/ico_title_link.png`,
              }}
            />
          </HeaderWrap>
          <TitleDesc category={sort_by_sub_category}>
            매일 정오, 컬리의 새로운 상품을 만나보세요
          </TitleDesc>
        </TitleWrap>
      </HeaderContainer>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, idx) => idx.toString()}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.6}
        horizontal
      />
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 402px;
  padding: 0 10px;
  background-color: ${({ theme, category }) =>
    category === "지금 가장 핫한 상품"
      ? `${theme.color.PaleGreyBackground}`
      : `${theme.color.White}`};
`;

const ProductContainer = styled.TouchableOpacity`
  padding-left: 15px;
`;

const ProductWrap = styled.View`
  width: 150px;
  background-color: ${({ theme, category }) =>
    category === "지금 가장 핫한 상품"
      ? `${theme.color.PaleGreyBackground}`
      : `${theme.color.White}`};
`;

const ImgWrap = styled.View`
  position: relative;
`;

const ProductImg = styled.Image`
  height: 195px;
`;

const Sale = styled.Image`
  position: absolute;
  left: 0;
  top: 0;
  width: 39px;
  height: 34px;
`;

const InfoWrap = styled.View`
  height: 120px;
`;

const ProductName = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.fontBlack};
  line-height: 20px;
`;

const PriceWrap = styled.View`
  line-height: 16px;
`;
const DiscountPrice = styled.Text`
  display: ${({ discount, price }) => (discount == price ? "none" : "flex")};
  padding-top: 2px;
  ${mixIn.sale};
`;
const ProductPrice = styled.Text`
  padding-top: 3px;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.color.fontBlack};
`;

const HeaderContainer = styled.View`
  padding: 27px 0 0 15px;
`;

const TitleWrap = styled.View`
  padding: 14px 0;
`;

const HeaderWrap = styled.View`
  ${mixIn.flex("row", "flex-start", "flex-start")};
`;

const Header = styled.Text`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

const HeaderIcon = styled.Image`
  width: 22px;
  height: 22px;
  padding-right: 21px;
`;

const TitleDesc = styled.Text`
  display: ${({ category }) =>
    category === "지금 가장 핫한 상품" ? "flex" : "none"};
  padding-top: 4px;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.color.SubtitlePaleGrey};
`;
