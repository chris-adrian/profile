import { useEffect, useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

export interface Props {
  children?: any;
  useClass: string;
  currentState: boolean;
  timeOut?: number;
}

const TransitionWrapper = (props: Props) => {
  const nodeRef = useRef(null);
  const [pageState, setPageState] = useState(false);

  useEffect(() => {
    setPageState(props.currentState);
  }, [props.currentState]);

  return (
    <Row className="align-items-center h-100-md-up">
      <Col md={12}>
        <CSSTransition
          nodeRef={nodeRef}
          in={pageState}
          timeout={props.timeOut ? props.timeOut : 300}
          className={props.useClass}
          classNames={props.useClass}
        >
          <div ref={nodeRef}>{props.children}</div>
        </CSSTransition>
      </Col>
    </Row>
  );
};

export default TransitionWrapper;
