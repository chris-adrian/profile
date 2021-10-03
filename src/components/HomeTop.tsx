import { Col } from "react-bootstrap";

const HomeTop = ({ onClick }) => {
  return (
    <Col md={12} className="navigator text-center">
      <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 415 415"
      >
        <g fill="#61DAFB">
          <polygon points="203.718,84.507 386.258,266.453 407.437,245.205 203.718,42.15 0,245.205 21.179,266.453 	" />
          <polygon points="0,344.039 21.179,365.287 203.718,183.341 386.258,365.287 407.437,344.039 203.718,140.984 	" />
        </g>
      </svg>
    </Col>
  );
};

export default HomeTop;
