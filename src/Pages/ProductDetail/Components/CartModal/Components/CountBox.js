import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CountBox = ({ id, price, handleCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    handleCount(id, price, count);
  }, [count]);

  return (
    <Container>
      <Minus
        onPress={() => (count === 0 ? setCount(count) : setCount(count - 1))}
      >
        -
      </Minus>
      <Input>{count}</Input>
      <Plus onPress={() => setCount(count + 1)}>+</Plus>
    </Container>
  );
};

export default CountBox;

const Container = styled.View`
  flex-direction: row;
  width: 88px;
  height: 24px;
  border: 1px solid #dddfe1;
  border-radius: 3px;
`;

const Minus = styled.Text`
  width: 22px;
  height: 22px;
  background: #f6f7f7;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

const Input = styled.Text`
  width: 42px;
  height: 24px;
  padding: 2px;
  font-size: 14px;
  text-align: center;
`;

const Plus = styled(Minus)``;
