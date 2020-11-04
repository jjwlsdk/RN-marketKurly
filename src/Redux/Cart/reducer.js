import actions from "./actions";

const { REMOVE_DATA, GET_DATA, CHECKED_DATA, UPDATE_COUNT_DATA } = actions;

const INITIAL_STATE = {
  data: [],
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case REMOVE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case CHECKED_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case UPDATE_COUNT_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
