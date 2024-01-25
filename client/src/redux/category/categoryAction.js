import axios from "axios";
import { categoryActionTypes } from "./categoryActionType";

export const getAllCategory = () => async (dispatch) => {
  try {
    dispatch({
      type: categoryActionTypes.ALL_CATEGORY_REQUEST,
    });
    const { data } = await axios.get("/api/v1/category");

    dispatch({
      type: categoryActionTypes.ALL_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: categoryActionTypes.ALL_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};
