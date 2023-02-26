import actionTypes from "./actionTypes";

export function createCourse(course) {
  //debugger; //2
  return { type: actionTypes.CREATE_COURSE, course };
}
