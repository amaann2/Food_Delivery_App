import axios from "axios";
import { userActionTypes } from "./userActionType";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: userActionTypes.LOAD_USER_REQUEST,
    });
    const { data } = await axios.get(`/api/v1/users/getMe`, {
      withCredentials: true,
    });
    console.log(data.user);
    dispatch({
      type: userActionTypes.LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: userActionTypes.LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};
