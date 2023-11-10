import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import performances from "./performanceReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  performances,
  apiCallsInProgress,
});

export default rootReducer;
