import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import ArrowUp from "../images/arrow-up.png";
import ArrowDown from "../images/arrow-down.png";

const HomeNavigator = ({ onClick, direction }) => {
  const [arrow, setArrow] = useState(ArrowUp);

  useEffect(() => {
    const initIcon = (direction) => {
      switch (direction) {
        case "up":
          return setArrow(ArrowUp);
        case "down":
          return setArrow(ArrowDown);
        default:
          return console.log("arrow not set");
      }
    };
    initIcon(direction);
  }, [direction]);

  return (
    <Col md={12} className="navigator text-center">
      <img onClick={onClick} src={arrow} alt="home navigator" />
    </Col>
  );
};

export default HomeNavigator;
