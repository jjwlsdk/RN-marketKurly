import actions from "./actions";
const { GET_DATA, OFF_SET } = actions;

const INITIAL_STATE = {
  data: [],
  offset: 0
};

export default function productReducer(state=INITIAL_STATE, action){
  switch(action.type){
    case GET_DATA:
      return {
        ...state,
        data: action.payload
      }
    case OFF_SET:
      return {
        ...state,
        offset: action.payload
      }
    default:
      return state
  }
};