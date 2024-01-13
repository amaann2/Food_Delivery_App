import axios from "axios";
import { restaurantActionTypes } from "./restaurantActionType";

export const loadRestaurant = () => async (dispatch) => {
  try {
    dispatch({
      type: restaurantActionTypes.LOAD_RESTAURANT_REQUEST,
    });

    const { data } = await axios.get("/api/v1/restaurant/myrest/mine", {
      withCredentials: true,
    });
    dispatch({
      type: restaurantActionTypes.LOAD_RESTAURANT_SUCCESS,
      payload: data.restaurant,
    });
  } catch (error) {
    dispatch({
      type: restaurantActionTypes.LOAD_RESTAURANT_FAIL,
      payload: error.response.data.message,
    });
  }
};
