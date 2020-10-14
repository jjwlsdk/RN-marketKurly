import actions from "./actions";
const { SET_DATA } = actions;
const { SET_ID } = actions;

const INITIAL_STATE = {
  data: {},
  id: 0,
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
    default:
      return state;
  }
}
