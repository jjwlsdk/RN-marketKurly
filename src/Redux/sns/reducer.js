import actions from "./actions";
const { TAG, GET_DATA, FILTER_DATA } = actions;

const INITIAL_STATE = {
  data: [],
  sortedData: []
};

export default function tagReducer(state=INITIAL_STATE, action){
  switch(action.type){
    case TAG:
      return {
        ...state,
        payload:action.payload
      }
    case GET_DATA:
      return {
        ...state,
        data: action.payload
      }
      case FILTER_DATA:
      return {
        ...state,
        sortedData: action.payload
      }
    default:
      return ""
  }
};