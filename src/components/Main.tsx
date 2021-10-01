import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
// import Header from "./Header";
// import Navigation from "./Navigation";

const Main = () => (
  <main className="container-fluid">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </main>
);

export default Main;
