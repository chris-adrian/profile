import { useEffect, useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

const PageWrapper = ({ children, useClass }) => {
  const nodeRef = useRef(null);
  const [pageState, setPageState] = useState(false);

  useEffect(() => {
    if (!pageState) {
      setTimeout(() => {
        setPageState(!pageState);
      }, 100);
    }
  }, [pageState]);

  return (
    <Row className="align-items-center h-100-md-up">
      <Col md={12}>
        <CSSTransition
          nodeRef={nodeRef}
          in={pageState}
          timeout={300}
          className={useClass}
          classNames={useClass}
        >
          <div ref={nodeRef}>{children}</div>
        </CSSTransition>
      </Col>
    </Row>
  );
};

export default PageWrapper;
