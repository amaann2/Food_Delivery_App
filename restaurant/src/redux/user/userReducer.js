import { userActionTypes } from "./userActionType";

const INITIAL_STATE = {
  currentUser: null,
  isAuthenticated: false,
};
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case userActionTypes.LOAD_USER_REQUEST:
      return {
        isAuthenticated: false,
        currentUser: null,
      };
    case userActionTypes.LOAD_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.payload,
      };
    case userActionTypes.LOAD_USER_FAIL:
      return {
        isAuthenticated: false,
        currentUser: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
