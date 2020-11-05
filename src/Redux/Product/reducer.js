import actions from "./actions";

const { OFF_SET, GET_FILTER, GET_DELIVERY } = actions;

const INITIAL_STATE = {
  offset: 0,
  filter: "신상품순",
  delivery: "샛별지역상품",
};

export default function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OFF_SET:
      return {
        ...state,
        offset: action.payload,
      };
    case GET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case GET_DELIVERY:
      return {
        ...state,
        delivery: action.payload,
      };
    default:
      return state;
  }
}
