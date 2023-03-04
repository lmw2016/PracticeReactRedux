import actionTypes from "../Actions/actionTypes";
import initialState from "./initialState";
export default function authorReducer(state = initialState.authors, action) {
  //error miss state = []
  switch (action.type) {
    case actionTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state; //error 1 : miss this
  }
}
