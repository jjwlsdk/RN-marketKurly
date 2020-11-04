import React from "react";
import styled from "styled-components";

export default function Info() {
  return (
    <Container>
      <InfoDelivery>
        <TitleDelivery>배송안내</TitleDelivery>
        <ListBox>
          <List>
            <Title>샛별배송</Title>
            <Desc>밤 11시까지 주문하면, 다음날 아침 7시 이전 도착</Desc>
          </List>
          <List>
            <Title>택배배송</Title>
            <Desc>밤 8시까지 주문하면, 다음날 도착</Desc>
          </List>
          <List>
            <TitleBlack>배송휴무</TitleBlack>
            <Desc>
              샛별배송 - 휴무없음 / 택배배송 - 일요일{"\n"}
              택배배송의 경우, 지역에 따라{"\n"}
              토요일 배송이 불가할 수 있습니다.
            </Desc>
          </List>
        </ListBox>

        <LinkDelevery>자세히 보기</LinkDelevery>
      </InfoDelivery>
    </Container>
  );
}

const Container = styled.View`
  border-style: solid;
  border-top-width: 10px;
  border-top-color: ${({ theme }) => theme.color.FooterBackground};
`;

const InfoDelivery = styled.View`
  margin: 20px 20px 30px;
  padding: 20px 0;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.FooterBackground};
  text-align: center;
`;

const TitleDelivery = styled.Text`
  padding-bottom: 6px;
  line-height: 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

const ListBox = styled.View`
  margin: 0 auto;
`;

const List = styled.View`
  flex-direction: row;
  padding-top: 4px;
  text-align: center;
`;

const Title = styled.Text`
  width: 52px;
  padding: 4px 4px 0 0;
  line-height: 20px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.MainPurple};
`;

const TitleBlack = styled(Title)`
  color: ${({ theme }) => theme.color.fontBlack};
`;

const Desc = styled.Text`
  padding-top: 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
`;

const LinkDelevery = styled.Text`
  width: 156px;
  height: 36px;
  margin: 22px auto 0;
  border: 1px solid #ddd;
  border-radius: 18px;
  line-height: 35px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;
