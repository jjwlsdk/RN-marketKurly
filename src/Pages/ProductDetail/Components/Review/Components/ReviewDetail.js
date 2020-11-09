import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components";
import mixIn from "../../../../../Styles/Mixin";

const ReviewDetail = ({ route }) => {
  const [likes, useLikes] = useState(0);

  const { item } = route.params;

  const { data } = useSelector(({ prodDataReducer: { data } }) => ({ data }));

  return (
    <ScrollView>
      <Container>
        <GoodsName>{data.name}</GoodsName>
        <ContentsBox>
          {item.review_image ? (
            <Img source={{ uri: item.review_image }} />
          ) : null}
          <Title>{item.title}</Title>
          <Contents>{item.comment}</Contents>
          <Extra>
            <Date>{`${item.date?.split("T")[0]} 작성`}</Date>
            <Likes>{`도움이 돼요 ${likes}`}</Likes>
          </Extra>
        </ContentsBox>
      </Container>
    </ScrollView>
  );
};

export default ReviewDetail;

const Container = styled.View`
  margin-top: 8px;
  padding: 10px 10px 30px;
  background-color: ${({ theme }) => theme.color.White};
`;

const GoodsName = styled.Text`
  padding-bottom: 10px;
  font-size: 12px;
`;

const ContentsBox = styled.View`
  border-style: solid;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-color: ${({ theme }) => theme.color.SubtitlePaleGrey};
  border-bottom-color: ${({ theme }) => theme.color.SubtitlePaleGrey};
`;

const Title = styled.Text`
  padding-top: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.fontBlack};
`;

const Img = styled.Image`
  padding-top: 10px;
  height: 400px;
`;

const Contents = styled.Text`
  padding-top: 15px;
`;

const Extra = styled.View`
  ${mixIn.flex("row", "space-between")}
  padding: 20px 0 20px 0;
`;

const Date = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.color.DarkGray};
`;

const Likes = styled(Date)``;
