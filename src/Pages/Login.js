import React, { useEffect } from "react";
import { View } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Login = () => {
//   const dispatch = useDispatch();
//   const { data } = useSelector(({ tagReducer: { data }}) => ({ data }));

// useEffect(()=> {
//   dispatch(fetchingData())
// },[])

// useEffect(() => {
//   console.log(data)
// }, [data])

  return (
    <View>
      <Test>로그인페이지</Test>
    </View>
    
  )
}

export default Login

const Test = styled.Text `
  color: ${({theme}) => theme.color.MainPurple};
  border: ${({theme}) => theme.border.BorderGrey};
  font-size: 50px;
`