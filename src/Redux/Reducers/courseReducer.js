import actionTypes from "../Actions/actionTypes";
import initialState from "./initialState";
export default function courseReducer(state = initialState.courses, action) {
  //error miss state = []
  switch (action.type) {
    case actionTypes.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case actionTypes.UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case actionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state; //error 1 : miss this
  }
}
