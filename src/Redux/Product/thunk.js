import actions from "./actions";

const { getData, getOffset } = actions;

const LIMIT = 10;

export const fetchingData = () => async (dispatch, getState) => {
  const {
    productReducer: { offset },
  } = getState();
  const {
    productReducer: { data },
  } = getState();
  const {
    productReducer: { id },
  } = getState();

  try {
    // const res = await fetch(`http://10.58.2.221:8000/products/`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     "sub_category_id": id
    //   })
    // });
    // const resJson = await res.json();
    // dispatch(getData(data.concat(resJson.slice(offset, offset + LIMIT))));
    // dispatch(await getOffset(offset + LIMIT));
    // .then((res) => res.json())
    // .then((res) => dispatch(getData(res)))

    // npx json-server ./src/Data/Product/product.json --port 4000 해야 데이터 열립니당 //
    const res = await fetch("http://localhost:4000/products");
    const resJson = await res.json();
    dispatch(getData(data.concat(resJson.slice(offset, offset + LIMIT))));
    dispatch(await getOffset(offset + LIMIT));
  } catch (e) {
    console.log(`페치에 실패했습니다.`);
  }
};
