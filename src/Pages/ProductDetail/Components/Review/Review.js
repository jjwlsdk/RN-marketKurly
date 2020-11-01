import React from "react";
import styled from "styled-components";
import WriteBtn from "./Components/WriteBtn";
import ReviewGroup from "./Components/ReviewGroup";

const Review = () => {
  return (
    <Container>
      <WriteBtn />
      <ReviewGroup />
    </Container>
  );
};

export default Review;

const Container = styled.View`
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.color.FooterBackground};
`;
