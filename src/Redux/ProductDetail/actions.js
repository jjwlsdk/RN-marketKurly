const actions = {
  SET_DATA: "SET_DATA",
  SET_ID: "SET_ID",
  SET_CART: "SET_CART",
  SET_REVIEW: "SET_REVEIW",

  setData: (data) => ({
    type: actions.SET_DATA,
    data,
  }),

  setId: (id) => ({
    type: actions.SET_ID,
    id,
  }),

  setCart: (cart) => ({
    type: actions.SET_CART,
    cart,
  }),

  setReview: (review) => ({
    type: actions.SET_REVIEW,
    review,
  }),
};

export default actions;
