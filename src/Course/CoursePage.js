import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../Redux/Actions/courseAction";
import PropTypes from "prop-types";
import CourseList from "./CourseList";

class CoursePage extends React.Component {
  componentDidMount() {
    const { courses, loadCourses } = this.props;
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("loading course failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h3>Courses</h3>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursePage.propTypes = {
  loadCourses: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  //debugger; //4
  return { courses: state.courses };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(courseActions, dispatch), // (course) => dispatch(courseActions.createCourse(course)),
//   };
// }

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
