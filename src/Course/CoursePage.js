import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../Redux/Actions/courseAction";
import * as authorActions from "../Redux/Actions/authorAction";
import PropTypes from "prop-types";
import CourseList from "./CourseList";

class CoursePage extends React.Component {
  componentDidMount() {
    const { courses, loadCourses, authors, loadAuthors } = this.props;
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("loading course failed: " + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("load author failed: " + error);
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
  loadAuthors: PropTypes.func.isRequired,
  authors: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  //debugger; //4
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find(
                (author) => author.id === course.authorId
              ).name,
            };
          }),
    authors: state.authors,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(courseActions, dispatch), // (course) => dispatch(courseActions.createCourse(course)),
//   };
// }

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
