import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ReviewGroup = () => {
  const [reviewList, setReviewList] = useState([]);
  const { id } = useSelector(({ prodDataReducer: { id } }) => ({ id }));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(`http://172.30.1.9:8000/review?product=${id}`);
      const resJson = await res.json();
      setReviewList(resJson.Review_list);
    } catch (e) {
      console.log("review: 페치에 실패했습니다");
    }
  };

  return (
    <Container>
      <Review>
        <Subject>[공지] 금주의 Best 후기 안내</Subject>
        <Info>
          <Writer>마켓컬리 관리자</Writer>
        </Info>
      </Review>
      <Review>
        <Subject>[공지] 상품 후기 적립금 정책 안내</Subject>
        <Info>
          <Writer>마켓컬리 관리자</Writer>
        </Info>
      </Review>
      {reviewList.map((item, idx) => (
        <Review key={idx}>
          <Subject>{item.title}</Subject>
          <Info>
            <Writer>{item.review_id}</Writer>
            <Date>{item.date}</Date>
          </Info>
        </Review>
      ))}
    </Container>
  );
};

export default ReviewGroup;

const Container = styled.View`
  padding-top: 20px;
`;

const Review = styled.View`
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

const Date = styled(Writer)``;
