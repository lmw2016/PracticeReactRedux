import React from "react";

class CoursePage extends React.Component {
  //class field
  state = {
    course: {
      title: "",
    },
  };

  onChange = (event) => {
    const course = { ...this.state, title: event.target.value };
    this.setState({ course }); //using object short-hand syntax
  };

  onSubmit = (event) => {
    event.preventDefault();
    alert(this.state.course.title);
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
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default CoursePage;
