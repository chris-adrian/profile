import React, { useState, useEffect, useMemo } from "react";
import Col from "react-bootstrap/Col";
import ProfileInfo from "./ProfileInfo";
import ProfileIntro from "./ProfileIntro";

// Conver to Class Component, add dynamic state function
const HomeContent = ({ onChange, resetFlow }) => {
  const contents = useMemo(() => {
    return [ProfileIntro, ProfileInfo, ProfileIntro];
  }, []);
  const [contentState, setContentState] = useState({});

  const elemCalled = () => {
    console.log("test");
  };

  useEffect(() => {
    //Populate content state
    (function () {
      if (Object.keys(contentState).length === 0) {
        let tempContentState = {};
        contents.forEach((item, i) => {
          tempContentState = {
            ...tempContentState,
            [i]: i === 0 ? true : false,
          };
        });
        setContentState({ ...contentState, ...tempContentState });
      }
    })();
  });

  useEffect(() => {
    const handleChange = (flow: number) => {
      if (flow !== 0) {
        let contentStateCopy = JSON.parse(JSON.stringify(contentState)); // Deep copy
        let contentStateLength = Object.keys(contentStateCopy).length;
        let y = 0;
        for (let x = 0; x < contentStateLength; x++) {
          if (contentStateCopy[x] === true) {
            y = x;
            if (
              (x !== 0 && flow > 0) ||
              (flow < 0 && x !== contentStateLength - 1)
            ) {
              contentStateCopy[y] = !contentStateCopy[y]; // toggle active
            }
          }
        }
        if (flow > 0) {
          if (y !== 0) {
            contentStateCopy[y - 1] = !contentStateCopy[y - 1]; // toggle prev
          }
        } else {
          if (y !== contentStateLength - 1) {
            contentStateCopy[y + 1] = !contentStateCopy[y + 1]; // toggle next
          }
        }
        setContentState({ ...contentState, ...contentStateCopy });
        resetFlow();
      }
    };
    handleChange(onChange);
  }, [onChange, contentState, resetFlow]);

  return (
    <Col md={12}>
      {contents.map((Item, key) => {
        return (
          <Item key={key} inProp={contentState[key]} onClick={elemCalled} />
        );
      })}
    </Col>
  );
};

export default HomeContent;
