import actionTypes from "../Actions/actionTypes";
export default function courseReducer(state = [], action) {
  //error miss state = []
  switch (action.type) {
    case actionTypes.CREATE_COURSE:
      //debugger; //3
      return [...state, { ...action.course }];
    case actionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state; //error 1 : miss this
  }
}
