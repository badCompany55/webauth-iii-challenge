import React, { Component } from "react";
import { Route } from "react-router-dom";

import NavBar from "./comps/nav.js";
import Form from "./comps/form.js";
import TeacherList from "./comps/teacherList.js";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route path="/signup" component={Form} />
        <Route path="/login" component={Form} />
        <Route path="/teachers" component={TeacherList} />
      </div>
    );
  }
}

export default App;
