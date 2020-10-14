import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk];

const bindMiddleware = (middleware) => {
  return applyMiddleware(...middleware);
};

const store = createStore(rootReducer, bindMiddleware(middlewares));
// store.subscribe(() => console.log(store.getState()));
export { store };
