import { restaurantActionTypes } from "./restaurantActionType";

export const restaurantReducer = (state = { restaurant: {} }, action) => {
  switch (action.type) {
    case restaurantActionTypes.LOAD_RESTAURANT_REQUEST:
      return {
        ...state,
        restaurant: {},
        loading: true,
      };
    case restaurantActionTypes.LOAD_RESTAURANT_SUCCESS:
      return {
        ...state,
        restaurant: action.payload,
        loading: false,
        error: null,
      };
    case restaurantActionTypes.LOAD_RESTAURANT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
