import actionTypes from "./actionTypes";
import * as performanceApi from "../../api/performanceApi";
import { beginApiCall, apiCallFail } from "./apiStatusAction";

export function loadPerformancesSuccess(performances) {
  return { type: actionTypes.LOAD_PERFORMANCES_SUCCESS, performances };
}

export function loadPerformances() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return performanceApi
      .getPerformances()
      .then((performances) => dispatch(loadPerformancesSuccess(performances)))
      .catch((error) => {
        dispatch(apiCallFail());
        throw error;
      });
  };
}
