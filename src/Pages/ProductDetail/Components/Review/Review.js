import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { reviewGroup } from "../../../../config";

export default function ReviewGroup({ navigation }) {
  const [reviewList, setReviewList] = useState([]);

  const { id, review } = useSelector(({ prodDataReducer: { id, review } }) => ({
    id,
    review,
  }));
  const { review_id, title, date } = review;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(`${reviewGroup}?product=${id}`);
      const resJson = await res.json();
      setReviewList(resJson.Review_list);
    } catch (e) {
      console.log("review: 페치에 실패했습니다");
    }
  };

  return (
    <Container>
      <Wrapper onPress={() => navigation.navigate("WriteReview")}>
        <BtnTxt>후기 쓰기</BtnTxt>
      </Wrapper>
      <ReviewBox>
        <Subject>[공지] 금주의 Best 후기 안내</Subject>
        <Info>
          <Writer>마켓컬리 관리자</Writer>
          <Date>2020-11-05</Date>
        </Info>
      </ReviewBox>
      <ReviewBox>
        <Subject>[공지] 상품 후기 적립금 정책 안내</Subject>
        <Info>
          <Writer>마켓컬리 관리자</Writer>
          <Date>2020-11-05</Date>
        </Info>
      </ReviewBox>
      {reviewList.map((item, idx) => {
        return (
          <ReviewBox key={idx}>
            <Subject
              onPress={() =>
                navigation.navigate("ReviewDetail", { item: item })
              }
            >
              {item.title}
            </Subject>
            <Info>
              <Writer>{item.review_id}</Writer>
              <Date>{item.date?.split("T")[0]}</Date>
            </Info>
          </ReviewBox>
        );
      })}
      {title ? (
        <ReviewBox>
          <Subject
            onPress={() =>
              navigation.navigate("ReviewDetail", { item: review })
            }
          >
            {title}
          </Subject>
          <Info>
            <Writer>{review_id}</Writer>
            <Date>{date}</Date>
          </Info>
        </ReviewBox>
      ) : null}
    </Container>
  );
}

const Container = styled.View`
  padding: 20px 10px;
`;

const Wrapper = styled.TouchableOpacity`
  height: 50px;
  margin-bottom: 20px;
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

const ReviewBox = styled.View`
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
  padding-top: 8px;
`;

const Writer = styled.Text`
  padding-right: 9px;
  font-size: 12px;
  color: #666;
  line-height: 18px;
`;

const Date = styled(Writer)``;
