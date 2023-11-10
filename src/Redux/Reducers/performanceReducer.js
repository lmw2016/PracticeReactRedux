import actionTypes from "../Actions/actionTypes";
import initialState from "./initialState";

export default function performanceReducer(
  state = initialState.performances,
  action
) {
  switch (action.type) {
    case actionTypes.LOAD_PERFORMANCES_SUCCESS:
      return action.performances;
    default:
      return state;
  }
}
