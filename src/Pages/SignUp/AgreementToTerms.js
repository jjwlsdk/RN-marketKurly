import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "./Components/Title";
import CustomCheckBox from "../../Components/CheckBox";
import RightArrowImg from "../Mypage/RightArrowImg";
import mixIn from "../../Styles/Mixin";

export default function AgreementToTerms() {
  const [all, setAll] = useState(false);
  const [state, setState] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    sms: false,
    email: false,
    fifth: false,
  });

  const onAllClick = () => {
    setAll(!all);
    setState({
      first: !all,
      second: !all,
      third: !all,
      fourth: !all,
      fifth: !all,
    });
  };

  useEffect(() => {
    const { first, second, third, fourth, fifth } = state;
    const Allcondition = first && second && third && fourth;
    setAll(Allcondition);
  }, [state]);

  return (
    <Container>
      <Title text="이용약관동의" />
      <Wrapper>
        <CustomCheckBox size="24" isChecked={all} onClick={onAllClick} />
        <All>전체 동의합니다.</All>
      </Wrapper>
      <TextWrapper>
        <GreyTxt>
          선택 항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할
          수 있습니다.
        </GreyTxt>
      </TextWrapper>

      {DATA.map((el, idx) => (
        <Wrapper key={idx}>
          <CustomCheckBox
            size="24"
            onClick={() => {
              setState({ ...state, [el.state]: !state[el.state] });
            }}
            isChecked={state[el.state]}
          />
          <CheckTextWrapper>
            <Txt>
              {el.text} <GreyTxt>({el.option})</GreyTxt>
            </Txt>
            <RightArrowImg size="10" />
          </CheckTextWrapper>
        </Wrapper>
      ))}
    </Container>
  );
}

const Container = styled.View`
  background-color: ${({ theme }) => theme.color.White};
  margin: 0 24px;
  margin-bottom: 20px;
  padding-bottom: 50px;
`;

const Wrapper = styled.View`
  ${mixIn.flex("row", "flex-start")};
  padding: 10px 0px;
`;

const All = styled.Text`
  color: ${({ theme }) => theme.color.Black};
  font-weight: 600;
  font-size: 16px;
`;

const Txt = styled.Text`
  color: ${({ theme }) => theme.color.fontBlack};
  font-size: 12px;
`;

const GreyTxt = styled.Text`
  color: ${({ theme }) => theme.color.DarkGray};
  font-size: 12px;
`;

const TextWrapper = styled.View`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.color.FooterBackground};
`;

const CheckTextWrapper = styled.View`
  flex: 1;
  ${mixIn.flex("row", "space-between", "center")}
`;

const DATA = [
  {
    text: "이용약관 동의",
    option: "필수",
    state: "first",
  },
  {
    text: "개인정보처리방침 동의",
    option: "필수",
    state: "second",
  },
  {
    text: "무료배송, 할인쿠폰 등 혜택/정보수신 동의",
    option: "선택",
    state: "third",
  },
  {
    text: "본인은 만 14세 이상입니다.",
    option: "필수",
    state: "fourth",
  },
];
