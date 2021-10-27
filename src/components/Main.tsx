import Row from "react-bootstrap/Row";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
// components
import Profilebar from "./Profilebar";
import TransitionWrapper from "./TransitionWrapper";
// Background
import SubtleImg from "../images/ecailles.png";

const Main = () => {
  return (
    <Router>
      <main
        className="container-fluid"
        style={{ backgroundImage: `url(${SubtleImg})` }}
      >
        <Row className="align-items-center h-100-md-up">
          <section className="col-xs-12 col-md-4 h-100-md-up text-center">
            <Profilebar name="Chris James" title="Web Application Developer" />
          </section>
          <section className="col-xs-12 col-md-8 h-100-md-up">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/about"
                component={() => {
                  return (
                    <TransitionWrapper useClass={"fade-in"} currentState={true}>
                      <About />
                    </TransitionWrapper>
                  );
                }}
              />
              <Route
                path="/contact"
                component={() => {
                  return (
                    <TransitionWrapper useClass={"fade-in"} currentState={true}>
                      <Contact />
                    </TransitionWrapper>
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
