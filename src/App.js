import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Common/Header";
import HomePage from "./Home/HomePage.js";
import AboutPage from "./About/AboutPage.js";
import CoursePage from "./Course/CoursePage.js";
import PageNotFoundPage from "./PageNotFoundPage";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/courses" component={CoursePage} />
          <Route path="/about" component={AboutPage} />
          <Route component={PageNotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
