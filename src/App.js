import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Common/Header";
import HomePage from "./Home/HomePage.js";
import AboutPage from "./About/AboutPage.js";
import CoursePage from "./Course/CoursePage.js";
import PageNotFoundPage from "./PageNotFoundPage";
import ManageCoursePage from "./Course/ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <ToastContainer autoClose={2000} hideProgressBar />
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/courses" component={CoursePage} />
          <Route path="/course/:slug" component={ManageCoursePage} />
          <Route path="/course" component={ManageCoursePage} />
          <Route path="/about" component={AboutPage} />
          <Route component={PageNotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
