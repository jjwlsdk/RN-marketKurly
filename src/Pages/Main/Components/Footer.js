import React from "react";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components";

export default function Footer() {
  const categoryList = ({ item }) => {
    return <CategoryItem item={item}>{item}</CategoryItem>;
  };

  const snsIcons = ({ item }) => {
    return <SnsIcon source={{ uri: item }} />;
  };

  return (
    <Container>
      <Category>
        <FlatList
          data={categoryData}
          renderItem={categoryList}
          keyExtractor={(item, idx) => idx.toString()}
          numColumns={categoryData.length / 2}
        />
      </Category>
      <Icon>
        <FlatList
          data={snsIcon}
          renderItem={snsIcons}
          keyExtractor={(item, idx) => idx.toString()}
          horizontal
        />
      </Icon>
      <Customer>
        <CunstomerTitle>고객행복센터</CunstomerTitle>
        <TelNum>1644-1107</TelNum>
        <TelTime>
          365고객센터<Bar> I </Bar>오전 7시 - 오후 7시
        </TelTime>
      </Customer>
      <KakaoTalk>
        카카오톡 <Tag>@마켓컬리 </Tag>친구 추가하고 소식과 혜택을 받아보세요.
      </KakaoTalk>
      <Company>
        주식회사 컬리 <Bar> I </Bar> 대표이사 : 김슬아{"\n"}
        개인정보보호책임자 : 이원준{"\n"}
        사업자등록번호 : 261-81-23567 <Tag>사업자정보 확인</Tag>
        {"\n"}
        통신판매업 : 제 2018-서울강남-01646 호{"\n"}
        주소 : 서울특별시 강남구 도산대로 16길 20, 이래빌딩 B1~4F{"\n"}
        입점문의 : <Tag>입점문의하기</Tag>
        {"\n"}
        제휴문의 : <Tag>business@kurlycorp.com</Tag>
        {"\n"}
        채용문의 : <Tag>recruit@kurlycorp.com</Tag>
        {"\n"}
        팩스 : 070-7500-6098 <Bar> I </Bar> 이메일 :{" "}
        <Tag>help@kurlycorp.com</Tag>
      </Company>
      <Certification>
        <CertWrap>
          <CertImage
            source={{ uri: "https://res.kurly.com/pc/ico/2001/logo_isms.png" }}
          />
          <CertText>
            [인증범위] 마켓컬리 쇼핑몰 서비스 개발 · 운영{"\n"}
            [유효기간] 2019.04.01 ~ 2022.03.31
          </CertText>
        </CertWrap>
        <CertWrap>
          <CertImage
            source={{
              uri: "https://res.kurly.com/pc/ico/2001/logo_eprivacyplus.png",
            }}
          />
          <CertText>
            개인정보보호 우수 웹사이트 ·{"\n"}
            개인정보처리시스템 인증 (ePRIVACY PLUS)
          </CertText>
        </CertWrap>
      </Certification>
    </Container>
  );
}

const Container = styled.View`
  padding-bottom: 110px;
`;

const Category = styled.View`
  padding: 18px 0 0 15px;
  flex-flow: wrap;
`;

const CategoryItem = styled.Text`
  min-width: 62px;
  height: 32px;
  padding-top: 8px;
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme, item }) =>
    item === "개인정보처리방침"
      ? theme.color.fontBlack
      : theme.color.SubtitlePaleGrey};
`;

const Icon = styled.View`
  margin-top: 10px;
  padding: 3px 0 0 9px;
`;

const SnsIcon = styled.Image`
  margin: 0 6px;
  width: 25px;
  height: 25px;
`;

const Customer = styled.View`
  padding: 14px 10px 0 15px;
`;

const CunstomerTitle = styled.Text`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.SubtitlePaleGrey};
`;

const TelNum = styled.Text`
  padding-top: 3px;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.MainPurple};
`;

const TelTime = styled.Text`
  padding-top: 3px;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.SubtitlePaleGrey};
`;

const Bar = styled.Text`
  font-size: 14px;
`;

const KakaoTalk = styled.Text`
  position: relative;
  margin: 0 0 0 15px;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.SubtitlePaleGrey};
`;

const Tag = styled.Text`
  color: ${({ theme }) => theme.color.MainPurple};
`;

const Company = styled.Text`
  padding: 23px 0 0 15px;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.color.SubtitlePaleGrey};
`;

const Certification = styled.View`
  margin-top: 11px;
  padding: 0 15px;
`;

const CertWrap = styled.View`
  flex-direction: row;
  margin-top: 12px;
`;

const CertImage = styled.Image`
  margin-right: 10px;
  width: 34px;
  height: 34px;
`;

const CertText = styled.Text`
  padding-top: 2px;
  font-size: 10px;
  line-height: 16px;
  color: ${({ theme }) => theme.color.SubtitlePaleGrey};
`;

const categoryData = [
  "컬리소개",
  "이용안내",
  "배송안내",
  "자주하는 질문",
  "공지사항",
  "인재채용",
  "이용약관",
  "개인정보처리방침",
];
const snsIcon = [
  "https://res.kurly.com/mobile/service/common/1903/ico_instagram.png",
  "https://res.kurly.com/mobile/service/common/1903/ico_fb.png",
  "https://res.kurly.com/mobile/service/common/1903/ico_blog.png",
  "https://res.kurly.com/mobile/service/common/1903/ico_naverpost.png?v=1",
  "https://res.kurly.com/mobile/service/common/1903/ico_youtube.png",
];
