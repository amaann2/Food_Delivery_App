import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { userReducer } from "./user/userReducer";
import { restaurantReducer } from "./restaurant/restaurantReducer";
import { foodReducer } from "./food/foodReducer";
import { categoryReducer } from "./category/categoryReducer";

const reducer = combineReducers({
  user: userReducer,
  restaurant: restaurantReducer,
  food: foodReducer,
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
