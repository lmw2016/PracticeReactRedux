import actionTypes from "../Actions/actionTypes";
import initialState from "./initialState";

export default function apiStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === actionTypes.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type === actionTypes.API_CALL_FAIL ||
    action.type.substring(action.type.length - 8) === "_SUCCESS"
  ) {
    return state - 1;
  }
  return state;
}
