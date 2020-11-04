import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import WriteBtn from "./Components/WriteBtn";
import ReviewDetail from "../Review/Components/ReviewDetail";
import ReviewModal from "../ReviewModal/ReviewModal";
import { createStackNavigator } from "@react-navigation/stack";
import { reviewGroup } from "../../../../config";

const Stack = createStackNavigator();

export default function Review() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ReviewGroup"
        options={{ headerShown: false }}
        component={ReviewGroup}
      />
      <Stack.Screen 
      name="WriteBtn"
      options={{ headerShown: false }}
      component={WriteBtn}/>      
    </Stack.Navigator>
  );
};

function ReviewGroup({navigation}) {
  const { id } = useSelector(({ prodDataReducer: { id } }) => ({ id }));
  const { review } = useSelector(({ prodDataReducer: { review } }) => ({
    review,
  }));
  const { review_id, title, comment, review_image } = review;
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("props:::", navigation)
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(`${reviewGroup}`);
      // const res = await fetch(`http://172.30.1.9:8000/review?product=${id}`)
      const resJson = await res.json();
      setReviewList(resJson);
      // setReviewList(resJson.Review_list);
    } catch (e) {
      console.log("review: 페치에 실패했습니다");
    }
  };

  return(
    <TestContainer>
      <Wrapper onPress={() => navigation.navigate("ReviewModal")}>
        <BtnTxt>후기 작성</BtnTxt>
      </Wrapper>
      <TestReview>
        <Subject>[공지] 금주의 Best 후기 안내</Subject>
        <Info>
          <Writer>마켓컬리 관리자</Writer>
        </Info>
      </TestReview>
      <TestReview>
        <Subject>[공지] 상품 후기 적립금 정책 안내</Subject>
        <Info>
          <Writer>마켓컬리 관리자</Writer>
        </Info>
      </TestReview>
      {reviewList.map((item, idx) => {
        console.log("review:",item)
        return(
        <TestReview key={idx}>
          <Subject
            onPress={() => navigation.navigate("ReviewDetail", { item: item })}
          >
            {item.title}
          </Subject>
          <Info>
            <Writer>{item.review_id}</Writer>
            <Date>{item.date}</Date>
          </Info>
        </TestReview>)}
      )}
    </TestContainer>
  )
}
const Container = styled.View`
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.color.FooterBackground};
`;

const TestContainer = styled.View`
  padding-top: 20px;
`;

const TestReview = styled.View`
  padding: 10px 10px 8px;
  background-color: ${({ theme }) => theme.color.White};
  border-style: solid;
  border-top-width: 1px;
  border-top-color: #dddfe1;
`;

const Subject = styled.Text`
  width: 100%;
  font-size: 14px;
  color: #333;
  line-height: 20px;
`;

const Info = styled.View`
  flex-direction: row;
  height: 26px;
  padding-top: 8px;
`;

const Writer = styled.Text`
  padding-right: 9px;
  font-size: 12px;
  color: #666;
  line-height: 18px;
`;

const Wrapper = styled.TouchableOpacity`
  height: 50px;
  border: 1px solid #5f0080;
  background-color: #fff;
`;

const BtnTxt = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: #5f0080;
  line-height: 50px;
  text-align: center;
`;

const Date = styled(Writer)``;