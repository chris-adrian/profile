import React from "react";
import { CSSTransition } from "react-transition-group";

const ProfileIntro = ({ inProp, onClick }) => {
  const nodeRef = React.useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={inProp}
      timeout={350}
      className="slide"
    >
      <div ref={nodeRef} onClick={onClick}>
        <h1>Profile intro:</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          atque?
        </p>
      </div>
    </CSSTransition>
  );
};

export default ProfileIntro;
