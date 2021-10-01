// import React from "react";
import { Row } from "react-bootstrap";
import React, { Component } from "react";

export class Home extends Component {
  componentDidMount() {
    document.title = "Profile | Home";
  }
  render() {
    return (
      <>
        <Row className="align-items-center h-100-md-up">
          <section className="profile col-xs-12 col-md-5 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="developer"
              className="responsive-img"
            />
          </section>
          <section className="info col-xs-12 col-md-7">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              facere, illum accusantium minima tempora consequatur dolorem
              fugit? Quia cum quibusdam quidem, quasi, a neque voluptatum, hic
              rem totam explicabo eaque!
            </p>
          </section>
        </Row>
      </>
    );
  }
}

export default Home;
