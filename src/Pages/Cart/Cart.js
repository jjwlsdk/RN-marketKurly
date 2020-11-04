import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { allCheckedData } from "../../Redux/Cart/thunk";
import Item from "./Components/item";
import CustomCheckBox from "../../Components/CheckBox";
import mixIn from "../../Styles/Mixin";

export default function Cart({ data }) {
  const [allChecked, setAllChecked] = useState();

  const dispatch = useDispatch();

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
