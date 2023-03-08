import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../Redux/Actions/courseAction";
import { loadAuthors } from "../Redux/Actions/authorAction";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../tools/mockData";

function ManageCoursePage({
  courses,
  loadCourses,
  authors,
  loadAuthors,
  saveCourse,
  history,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("loading course failed: " + error);
      });
    } else {
      setCourse({ ...props.course });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("load author failed: " + error);
      });
    }
  }, [props.course]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid) return;
    saveCourse(course).then(() => {
      history.push("/courses");
    });
  }
  function formIsValid() {
    setErrors({});
  }

  return (
    <>
      <h3>Manage Course</h3>
      <CourseForm
        course={course}
        errors={errors}
        authors={authors}
        onChange={handleChange}
        onSave={handleSave}
      />
    </>
  );
}

ManageCoursePage.propTypes = {
  loadCourses: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  authors: PropTypes.array.isRequired,
  saveCourse: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const course = slug
    ? state.courses.find((course) => course.slug === slug) || null
    : newCourse;
  return {
    course,
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
