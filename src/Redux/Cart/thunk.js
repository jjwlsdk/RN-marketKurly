import actions from "./actions";
import { deleteItem, put, get } from "./../../Api/api";
const { getData, checkedData, removeData, updateCountData } = actions;

export const getCartData = () => async (dispatch) => {
  const res = await get("user/cart");
  const result = res.cart.map((item) => {
    return { ...item, checked: true };
  });

  return dispatch(getData(result));
};

export const allCheckedData = (checked) => (dispatch, getState) => {
  const {
    cartReducer: { data },
  } = getState();

  const result = data.map((item) => {
    return { ...item, checked };
  });

  return dispatch(checkedData(result));
};

export const chekcedDataById = (id) => (dispatch, getState) => {
  const {
    cartReducer: { data },
  } = getState();

  const result = data.map((item) => {
    if (item.cart_id === id) {
      return { ...item, checked: !item.checked };
    }
    return item;
  });

  return dispatch(checkedData(result));
};

export const removeDataById = (id) => async (dispatch, getState) => {
  const {
    cartReducer: { data },
  } = getState();

  const response = await deleteItem("user/cart", { cart_id: id });
  const result = data.filter((item) => item.cart_id !== id);

  return dispatch(removeData(result));
};

export const changeCount = (id, count, type) => async (dispatch, getState) => {
  const {
    cartReducer: { data },
  } = getState();

  if (type === "plus") {
    count++;
  }

  if (type === "minus") {
    count--;
  }

  const response = await put("user/cart", {
    cart_id: id,
    product_count: count,
  });

  const result = data.map((item) => {
    if (item.cart_id === id) {
      return { ...item, count: count };
    }
    return item;
  });

  return dispatch(updateCountData(result));
};

const DATA = [
  {
    cart_id: 1,
    product_id: 244,
    product_image:
      "https://img-cf.kurly.com/shop/data/goods/159168547565y0.jpg",
    product_name: "[풀무원] 탱탱쫄면 (4개입)",
    product_series_name: null,
    product_price: 4980,
    discount_price: null,
    count: 2,
  },
  {
    cart_id: 2,
    product_id: 243,
    product_image:
      "https://img-cf.kurly.com/shop/data/goods/1493359362446y0.jpg",
    product_name: "[스테파노스 키친] 까르보나라 스파게티 세트",
    product_series_name: null,
    product_price: 6800,
    discount_price: 6120.0,
    count: 1,
  },
  {
    cart_id: 4,
    product_id: 234,
    product_image:
      "https://img-cf.kurly.com/shop/data/goods/1465441496473y0.jpg",
    product_name: "[뜨레봄] 우리밀 카레 4종",
    product_series_name: "우리밀 바몬드 카레(순한맛) 85g",
    product_price: 3900,
    discount_price: null,
    count: 3,
  },
];
