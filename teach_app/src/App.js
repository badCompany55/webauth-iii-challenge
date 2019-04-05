import React, { Component } from "react";
import { Route } from "react-router-dom";

import NavBar from "./comps/nav.js";
import Form from "./comps/form.js";
import TeacherList from "./comps/teacherList.js";
import Home from "./comps/home.js";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Form} />
        <Route path="/login" component={Form} />
        <Route path="/teachers" component={TeacherList} />
      </div>
    );
  }
}

export default App;
