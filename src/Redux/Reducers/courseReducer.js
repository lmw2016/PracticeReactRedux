import actionTypes from "../Actions/actionTypes";
export default function courseReducer(state = [], action) {
  //error miss state = []
  switch (action.type) {
    case actionTypes.CREATE_COURSE:
      //debugger; //3
      return [...state, { ...action.course }];
    default:
      return state; //error 1 : miss this
  }
}
