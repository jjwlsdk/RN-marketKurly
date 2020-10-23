import actions from "./actions";
const { getData, filterData } = actions;

export const fetchingData = () => async (dispatch) => {
  try {
    console.log("페치시작");
    const res = await fetch("http://localhost:4000/cafe");
    const resJson = await res.json();
    dispatch(getData(resJson));
  } catch (e) {
    console.log(`페치에 실패했습니다.`);
  }
};

export const filterdData = () => (dispatch, getState) => {
  const {
    tagReducer: { data, payload },
  } = getState();

  const result = countData(filter(data, payload));
  return dispatch(filterData(result));
};

const filter = (data, payload) => {
  if (!payload) return;
  const tags = {};
  const tagList = data[payload];

  for (let item of tagList) {
    const isNewItem = !tags.hasOwnProperty(item);
    if (isNewItem) tags[item] = 1;
    if (!isNewItem) tags[item] += 1;
  }
  return tags;
};

const countData = (data) => {
  if (!data) return;

  const temp = Object.keys(data)
    .map((x) => ({
      text: x,
      value: data[x],
      highlight: false,
    }))
    .sort(upperSort);

  temp.forEach((el, idx) => (el.highlight = idx <= 4));

  return temp;
};

const upperSort = (a, b) => (a.value < b.value ? 1 : -1);
