import Col from "react-bootstrap/Col";
import ArrowIcon from "../media/ArrowIcon";

export interface Props {
  onClick: () => void;
  direction: String;
  color: String;
}

const HomeNavigator = (props: Props) => {
  return (
    <Col md={12} className="navigator text-center">
      <span onClick={props.onClick}>
        <ArrowIcon dir={props.direction} color={props.color} />
      </span>
    </Col>
  );
};

export default HomeNavigator;
