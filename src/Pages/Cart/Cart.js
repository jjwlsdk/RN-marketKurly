import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Item from "./Components/item";
import { useDispatch, useSelector } from "react-redux";
import { getCartData, allCheckedData } from "../../Redux/Cart/thunk";
import CustomCheckBox from "../../Components/CheckBox";
import mixIn from "../../Styles/Mixin";

function Cart({ data }) {
  const dispatch = useDispatch();
  const [allChecked, setAllChecked] = useState();

  useEffect(() => {
    setAllChecked(calAllChecked() === data.length);
  }, [data]);

  const calAllChecked = () => {
    return data.filter((item) => item.checked === true).length;
  };

  return (
    <Container>
      <TopView>
        <CustomCheckBox
          onClick={() => {
            dispatch(allCheckedData(!allChecked));
            setAllChecked(!allChecked);
          }}
          isChecked={allChecked}
        />
        <TotalText>{`전체선택 (${calAllChecked()}/${data.length})`}</TotalText>
      </TopView>
      <DataView>
        {data.map((item) => {
          return <Item key={item.cart_id} data={item} />;
        })}
      </DataView>
    </Container>
  );
}

const Container = styled.View``;

const TopView = styled.View`
  ${mixIn.flex("row", "flex-start", "flex-start")}
  display: flex;
  flex-direction: row;
  margin: 21px 10px 10px;
`;

const DataView = styled.View`
  margin: 0 10px;
`;

const Text = styled.Text`
  font-size: 16px;
`;

const TotalText = styled(Text)`
  font-weight: bold;
`;

export default Cart;
