import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { categoryReducer } from "./category/categoryReducer";

const reducer = combineReducers({
  category: categoryReducer,
});
const initialState = {};
const middleware = [thunk, logger];
export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
