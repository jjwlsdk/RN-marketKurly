import actions from "./actions";

const { SET_DATA } = actions;
const { SET_ID } = actions;
const { SET_CART } = actions;
const { SET_REVIEW } = actions;

function getFormatDate(date) {
  var year = date.getFullYear();
  var month = 1 + date.getMonth();
  var day = date.getDate();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;

  return year + "-" + month + "-" + day;
}

const INITIAL_STATE = {
  data: {},
  id: 0,
  cart: {},
  review: {
    review_id: null,
    title: null,
    comment: null,
    review_image: null,
    date: getFormatDate(new Date()),
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
