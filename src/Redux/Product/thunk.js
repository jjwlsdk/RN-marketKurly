import actions from "./actions";
const { getData, getOffset } = actions;

const LIMIT = 10;

export const fetchingData = () => {
  return (dispatch, getState) => {
    const { productReducer:{offset} } = getState();
    const { productReducer:{data} } = getState();
    try{
      fetch('http://localhost:4000/products')
      .then((res) => res.json())
      .then((res) => dispatch(getData(data.concat(res.slice(offset, offset + LIMIT)))))
      .then(() => dispatch(getOffset(offset + LIMIT)))
      .then(() => console.log(offset))
    } catch(e) {
      console.log(`페치에 실패했습니다.`)
    }
  }
}
