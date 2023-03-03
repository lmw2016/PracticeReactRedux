import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class CourseList extends Component {
  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.props.courses.map((course) => {
              return (
                <tr key={course.id}>
                  <th>
                    <a
                      className="btn btn-light"
                      href={"http://pluralsight.com/courses/" + course.slug}
                    >
                      Watch
                    </a>
                  </th>
                  <th>
                    <Link to={"/course/" + course.slug}>{course.title}</Link>
                  </th>
                  <th>{course.authorId}</th>
                  <th>{course.category}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseList;
