import { Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";
import profilePic from "../media/profile.jpg";

export interface Props {
  name: String;
  title: string;
}

const Profilebar = (props: Props) => {
  return (
    <Row className="align-items-center h-100-md-up">
      <Col md={12} className="profile">
        <Row className="align-items-center h-100-md-up">
          <Col xs={4} sm={3} md={12}>
            <img src={profilePic} alt="developer" className="responsive-img" />
          </Col>
          <Col xs={8} sm={9} md={12} className="mt-2">
            <h1 className="">{props.name}</h1>
            <h2>{props.title}</h2>
          </Col>
          <Col md={12} className="mt-3">
            <Navigation />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Profilebar;
