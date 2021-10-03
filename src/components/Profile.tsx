import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface Props {
  name: String;
  title: string;
}

const Profile = (props: Props) => {
  return (
    <Row className="align-items-center h-100-md-up">
      <Col md={12}>
        <div className="profile">
          <div className="pt-5 pb-5">
            <img
              src="https://via.placeholder.com/150"
              alt="developer"
              className="responsive-img"
            />
            <h1 className="mt-4">{props.name}</h1>
            <h2>{props.title}</h2>
          </div>
          <div className="mb-2">
            <Link to="/"> Home </Link>&nbsp;&#124;&nbsp;
            <Link to="/about"> About </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Profile;
