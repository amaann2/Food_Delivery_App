import { foodActionTypes } from "./foodActionType";

export const foodReducer = (state = { myFood: [] }, action) => {
  switch (action.type) {
    case foodActionTypes.GET_MY_FOOD_REQUEST:
      return {
        ...state,
        loading: true,
        myFood: [],
        error: null,
      };
    case foodActionTypes.GET_MY_FOOD_SUCCESSS:
      return {
        ...state,
        loading: false,
        myFood: action.payload,
        error: null,
      };
    case foodActionTypes.GET_MY_FOOD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
