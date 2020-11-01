import actions from "./actions";
const { GET_DATA, GET_SLIDEDATA, OFF_SET, GET_ID } = actions;

const INITIAL_STATE = {
  data: [],
  slideData: [],
  offset: 0,
  id: 0,
  productId:""
};

export default function productReducer(state=INITIAL_STATE, action){
  switch(action.type){
    case GET_DATA:
      return {
        ...state,
        data: action.payload
      }
    case GET_SLIDEDATA:
      return {
        ...state,
        slideData: action.payload
      }
    case OFF_SET:
      return {
        ...state,
        offset: action.payload
      }
    case GET_ID:
      return {
        ...state,
        id: action.payload
      }
    default:
      return state
  }
};