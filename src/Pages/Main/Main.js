import React, {useState, useRef} from "react";
import { FlatList } from "react-native-gesture-handler";
import * as Animatable from 'react-native-animatable';
import SlideProd from '../../Pages/SlideProd/SlideProd';
import Recipe from '../Recipe/Recipe';
import Footer from './Components/Footer';
import styled from 'styled-components';

export default function Main({navigation}) {
  const scrollRef = useRef();
  const [ scrollY , setScrollY ] = useState(0);

  const btnActive = (e) => {
    setScrollY(e.nativeEvent.contentOffset.y);
  }

  const onFabPress = () => {
    scrollRef.current?.scrollToOffset({ animated: true, offset: 0 })
  }


  const renderItem = ({item}) => {
    return(
      <SlideProd
        subCategoryId={item.sub_category_id}
        category={item.category}
        header={item.header}
        navigation={navigation}
      />
    )
  }
  return (
    <Container>
      <FlatList
        ref={scrollRef}
        onScroll={btnActive}
        scrollEventThrottle={16}
        data={ProdData}
        renderItem={renderItem}
        keyExtractor={(item, idx) => idx.toString()}
        ListFooterComponent={
          <>
            <Recipe />
            <Delivery source={{uri: "https://img-cf.kurly.com/shop/data/main/15/mobile_img_1601803115.png"}}/>
            <Footer/>
          </>
        }
      />
      <TopBtn onPress={onFabPress}>
        <BtnImage
          valueY={scrollY} 
          animation={ scrollY > 700 ? "fadeIn" : false }
          delay={10}
          source={{uri: "https://res.kurly.com/mobile/service/common/1903/btn_pagetop_v3.png"}}
        />
      </TopBtn>
    </Container>
  )
}

const Container = styled.View`
  position: relative;
  padding: 10px 0 50px;
`

const Delivery = styled.Image`
  width: 100%;
  height: 76px;
`

const TopBtn = styled.TouchableOpacity`
  position: absolute;
  bottom: 100px;
  right: 15px;
`

const BtnImage = Animatable.createAnimatableComponent(styled.Image`
  opacity: ${({valueY}) => valueY > 700 ? "1" : "0"};
  width: 46px;
  height: 46px;
`);

const ProdData = [
  {
    sub_category_id: "1",
    header: "이 상품 어때요?",
    category: null
  },
  {
    sub_category_id: "2",
    header: "알뜰 상품",
    category: null
  },
  {
    sub_category_id: "3",
    header: "오늘의 신상품",
    category: "new"
  },
  {
    sub_category_id: "4",
    header: "지금 가장 핫한 상품",
    category: null
    
  },
  {
    sub_category_id: "5",
    header: "식단관리",
    category: null
  }
]