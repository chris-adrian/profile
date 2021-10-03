import { Row } from "react-bootstrap";
// import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import Profile from "./Profile";

const Main = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <main className="container-fluid">
      <Row className="align-items-center h-100-md-up">
        <section className="col-xs-12 col-md-4 h-100-md-up text-center">
          <Profile name="Chris James" title="Web Developer!" />
        </section>
        <section className="col-xs-12 col-md-8 h-100-md-up">
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </section>
      </Row>
    </main>
  );
};

export default Main;
