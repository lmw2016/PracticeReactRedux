import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../Redux/Actions/courseAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursePage extends React.Component {
  //class field
  state = {
    course: {
      title: "",
    },
  };

  onChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course }); //using object short-hand syntax
  };

  onSubmit = (event) => {
    event.preventDefault();
    //debugger; //1
    if (this.state.course.title) {
      this.props.actions.createCourse(this.state.course);
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Courses</h3>
        <h4>Add course</h4>
        <input
          type="text"
          className=""
          onChange={this.onChange}
          value={this.state.course.title}
          style={{ marginRight: "10px" }}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div
            key={course.title + " " + Math.random().toString().substring(3, 8)}
          >
            {course.title}
          </div>
        ))}
      </form>
    );
  }
}

CoursePage.propTypes = {
  //not propType, should not put u
  //dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  //debugger; //4
  return { courses: state.courses };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch), // (course) => dispatch(courseActions.createCourse(course)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
