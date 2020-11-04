import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import actions from "../../../../Redux/ProductDetail/actions";
import { Wrapper, ButtonTxt } from "../Cart";
import mixIn from "../../../../Styles/Mixin";

const ReviewModal = () => {
  const [ttl, setTtl] = useState("");
  const [txt, setTxt] = useState("");
  const [photo, setPhoto] = useState(0);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const { setReview } = actions;

  const { data } = useSelector(({ prodDataReducer: { data } }) => ({ data }));
  const { review } = useSelector(({ prodDataReducer: { review } }) => ({
    review,
  }));

  const addReview = () => {
    navigation.goBack;
    dispatch(
      setReview({
        ...review,
        review_id: null,
        title: ttl,
        comment: txt,
        review_image: null,
      })
    );
  };

  return (
    <Container>
      <GoodsName>{data.name}</GoodsName>
      <Form>
        <Title>후기 쓰기</Title>
        <TitleInput
          onChangeText={(e) => setTtl(e)}
          placeholder="제목을 입력해주세요"
        />
        <ContentsBox>
          <ContentsInput
            onChangeText={(e) => setTxt(e)}
            placeholder="자세한 후기는 다른 고객의 구매에 많은 도움이 되며, 일반식품의 효능이나 효과 등에 오해의 소지가 있는 내용을 작성 시 검토 후 비공개 조치될 수 있습니다. 반품/환불 문의는 1:1문의로 가능합니다."
            multiline={true}
          />
          <Count>{txt.length} 자 / 최소 10자</Count>
        </ContentsBox>
        <PhotoView>
          <TitlePhoto>
            <Title photo>사진 등록</Title>
            <Count photo>{photo} 장 / 최대 8장</Count>
          </TitlePhoto>
          <AddPhoto>
            <Plus
              source={{
                uri: "https://res.kurly.com/pc/ico/1806/img_add_thumb_x2.png",
              }}
            ></Plus>
          </AddPhoto>
          <PhotoNotice>
            구매한 상품이 아니거나 캡쳐 사진을 첨부할 경우, 통보없이 삭제 및
            적립 혜택이 취소됩니다.
          </PhotoNotice>
        </PhotoView>
        <BtnWrapper
          disabled={ttl && txt.length >= 10 ? false : true}
          onPress={addReview}
        >
          <ButtonTxt>등록하기</ButtonTxt>
        </BtnWrapper>
      </Form>
    </Container>
  );
};

export default ReviewModal;

const Container = styled.View`
  margin: 20px 10px 0;
  padding: 17px 10px;
  background-color: ${({ theme }) => theme.color.White};
`;

const GoodsName = styled.Text`
  padding-bottom: 10px;
`;

const Form = styled.View`
  border-style: solid;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.color.FooterBackground};
`;

const Title = styled.Text`
  padding: ${({ photo }) => (photo ? "0" : "21px 0 9px")};
`;

const TitleInput = styled.TextInput`
  height: 44px;
  margin-bottom: 8px;
  padding: 10px;
  border: ${({ theme }) => theme.border.BorderGrey};
  font-size: 16px;
`;

const ContentsBox = styled.View`
  padding: 10px 0;
`;

const ContentsInput = styled.TextInput`
  min-height: 140px;
  padding: 10px;
  border: ${({ theme }) => theme.border.BorderGrey};
  font-size: 16px;
`;

const Count = styled.Text`
  padding-top: ${({ photo }) => (photo ? "0" : "10px")};
  font-size: 12px;
  color: #666;
  line-height: 20px;
  text-align: right;
`;

const PhotoView = styled.View`
  padding-top: 9px;
`;

const TitlePhoto = styled.View`
  ${mixIn.flex("row", "space-between", "center")}
`;

const AddPhoto = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 19px;
  width: 64px;
  height: 64px;
  border: ${({ theme }) => theme.border.BorderGrey};
`;

const Plus = styled.Image`
  width: 14px;
  height: 14px;
`;

const PhotoNotice = styled.Text`
  padding-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.DarkGray};
`;

const BtnWrapper = styled(Wrapper)`
  margin-top: 30px;

  background-color: ${({ disabled, theme }) =>
    disabled ? theme.color.DiscountedCostGrey : theme.color.MainPurple};
  border-color: ${({ disabled, theme }) =>
    disabled ? theme.color.DiscountedCostGrey : theme.color.MainPurple};
`;
