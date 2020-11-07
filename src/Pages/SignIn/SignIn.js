import React, { useState } from "react";
import { View } from "react-native";
import * as Google from "expo-google-app-auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import ValidationModal from "./ValidationModal";
import { post } from "../../Api/api";
import styled from "styled-components";
import mixin from "../../Styles/Mixin";

export default function SignIn() {
  const [id, onChangeId] = useState();
  const [pw, onChangePw] = useState();
  const [isModal, setModal] = useState(false);
  const [validationText, setValidationText] = useState("");
  const navigation = useNavigation();

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        iosClientId:
          "109768551521-6q6ek378dpsspnnnmshhpct19omh7t5m.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        return SocialSubmit(result.accessToken);
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("ACCESS_TOKEN", value);
    } catch (e) {
      // saving error
    }
  };

  async function SocialSubmit(result) {
    const res = await fetch("http://localhost:8000/user/googlesignin", {
      method: "GET",
      headers: {
        Authorization: result,
      },
    });
    const resJson = await res.json();
    if (resJson.ACCESS_TOKEN) {
      storeData(resJson.ACCESS_TOKEN);
      navigation.navigate("Home"); //go home
    }
  }

  const handleModal = (text) => {
    setValidationText(text);
    setModal(!isModal);
  };

  const handleSubmit = () => {
    if (!id) {
      handleModal("아이디를 입력하세요");
      return;
    }

    if (!pw) {
      handleModal("비밀번호를 입력하세요");
      return;
    }

    submit();
  };

  async function submit() {
    const res = await post("user/signin", {
      account: id,
      password: pw,
    });

    if (res.message === "INVALID_USER") {
    } else {
      storeData(res.ACCESS_TOKEN);
      navigation.navigate("홈"); //go home
    }
  }

  const handleSocialLogin = () => {
    signInWithGoogleAsync();
  };

  return (
    <Container>
      <Wrapper>
        <ValidationModal isModal={isModal} text={validationText} />
        <View>
          <Input
            onChangeText={(text) => onChangeId(text)}
            value={id}
            placeholder="아이디를 입력해주세요"
          />
          <Input
            onChangeText={(text) => onChangePw(text)}
            value={pw}
            placeholder="비밀번호를 입력해주세요"
            secureTextEntry={true}
          />
        </View>
        <Btn onPress={handleSubmit}>
          <LoginText>로그인</LoginText>
        </Btn>
        <FindContainer>
          <FindBtn>
            <FindText>아이디 찾기</FindText>
          </FindBtn>
          <FindText>|</FindText>
          <FindBtn>
            <FindText>비밀번호 찾기</FindText>
          </FindBtn>
        </FindContainer>
        <SignUpBtn onPress={() => navigation.navigate("SignUp")}>
          <SignUpText>회원 가입</SignUpText>
        </SignUpBtn>
        <SocialLoginBtn onPress={handleSocialLogin}>
          <SocialText>구글로 로그인하기</SocialText>
        </SocialLoginBtn>
      </Wrapper>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.White};
`;

const Wrapper = styled.View`
  flex: 1;
  margin: 30px 24px 0px;
`;

const Input = styled.TextInput`
  height: 44px;
  margin-bottom: 8px;
  padding: 10px;
  border: ${({ theme }) => theme.border.BorderGrey};
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
`;

const Btn = styled.TouchableOpacity`
  ${mixin.flex()}
  height: 40px;
  margin-top: 8px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.MainPurple};
`;

const LoginText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.color.White};
`;

const FindContainer = styled.View`
  ${mixin.flex()};
  height: 40px;
`;

const FindBtn = styled.TouchableOpacity``;

const FindText = styled.Text`
  margin: 4px;
  color: ${({ theme }) => theme.color.DarkGray};
`;

const SignUpBtn = styled(Btn)`
  margin-top: 24px;
  border: 1px ${({ theme }) => theme.color.MainPurple};
  background-color: ${({ theme }) => theme.color.White};
`;

const SignUpText = styled(LoginText)`
  color: ${({ theme }) => theme.color.MainPurple};
`;

const SocialLoginBtn = styled(Btn)`
  border: 1px ${({ theme }) => theme.color.Black};
  background-color: ${({ theme }) => theme.color.White};
`;

const SocialText = styled(LoginText)`
  color: ${({ theme }) => theme.color.Black};
`;
