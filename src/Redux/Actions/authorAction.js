import actionTypes from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import { beginApiCall, apiCallFail } from "./apiStatusAction";

export function loadAuthorsSuccess(authors) {
  return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        dispatch(apiCallFail());
        throw error;
      });
  };
}
