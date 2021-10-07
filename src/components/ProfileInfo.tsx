import React from "react";
import { CSSTransition } from "react-transition-group";

const ProfileInfo = ({ inProp, onClick }) => {
  const nodeRef = React.useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={inProp}
      timeout={350}
      className="slide"
    >
      <div ref={nodeRef} onClick={onClick}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
          facere, illum accusantium minima tempora consequatur dolorem fugit?
          Quia cum quibusdam quidem, quasi, a neque voluptatum, hic rem totam
          explicabo eaque!
        </p>
      </div>
    </CSSTransition>
  );
};

export default ProfileInfo;
