import { Col } from "react-bootstrap";

const HomeBottom = ({ onClick }) => {
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
          <polygon points="203.718,322.929 21.179,140.984 0,162.232 203.718,365.287 407.437,162.232 386.258,140.984 	" />
          <polygon points="407.437,63.398 386.258,42.15 203.718,224.095 21.179,42.15 0,63.398 203.718,266.453 	" />
        </g>
      </svg>
    </Col>
  );
};

export default HomeBottom;
