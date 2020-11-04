import actions from "./actions";

const { SET_DATA } = actions;
const { SET_ID } = actions;
const { SET_CART } = actions;
const { SET_REVIEW } = actions;

const INITIAL_STATE = {
  data: {},
  id: 0,
  cart: {},
  review: {
    review_id: null,
    title: null,
    comment: null,
    review_image: null,
  },
};

export default function prodDataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    case SET_ID:
      return {
        ...state,
        id: action.id,
      };
    case SET_CART:
      return {
        ...state,
        cart: action.cart,
      };
    case SET_REVIEW:
      return {
        ...state,
        review: action.review,
      };
    default:
      return state;
  }
}
