import Row from "react-bootstrap/Row";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

import Sidebar from "./Sidebar";
import PageWrapper from "./PageWrapper";

const Main = () => {
  return (
    <Router>
      <main className="container-fluid">
        <Row className="align-items-center h-100-md-up">
          <section className="col-xs-12 col-md-4 h-100-md-up text-center">
            <Sidebar name="Chris James" title="Web Developer!" />
          </section>
          <section className="col-xs-12 col-md-8 h-100-md-up">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/about"
                component={() => {
                  return (
                    <PageWrapper useClass={"slide"}>
                      <About />
                    </PageWrapper>
                  );
                }}
              />
              <Route
                path="/contact"
                component={() => {
                  return (
                    <PageWrapper useClass={"slide"}>
                      <Contact />
                    </PageWrapper>
                  );
                }}
              />
            </Switch>
          </section>
        </Row>
      </main>
    </Router>
  );
};

export default Main;
