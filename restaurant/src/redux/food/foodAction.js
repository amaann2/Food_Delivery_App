import axios from "axios";
import { foodActionTypes } from "./foodActionType";

export const getMyFood =
  (id, currentPage, limit, search) => async (dispatch) => {
    try {
      dispatch({
        type: foodActionTypes.GET_MY_FOOD_REQUEST,
      });
      const params = {
        page: currentPage,
        limit: limit,
        keyword: search,
      };
      const { data } = await axios.get(`/api/v1/menu/restaurant/${id}`, {
        params,
      });
      dispatch({
        type: foodActionTypes.GET_MY_FOOD_SUCCESSS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: foodActionTypes.GET_MY_FOOD_FAIL,
        payload: error.response.data.message,
      });
    }
  };
