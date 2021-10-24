import { useState, useEffect, useMemo } from "react";
import Col from "react-bootstrap/Col";
// Blocks
import ProfileInfo from "../blocks/ProfileInfo";
import ProfileIntro from "../blocks/ProfileIntro";
// Components
import HomeNavigator from "./HomeNavigator";
import TransitionWrapper from "./TransitionWrapper";

const HomeContent = () => {
  const contents = useMemo(() => {
    return [ProfileIntro, ProfileInfo, ProfileIntro];
  }, []);
  const [contentFlow, setContentFlow] = useState(0);
  const [contentState, setContentState] = useState({});

  const changeFlow = (flow: number) => {
    setContentFlow(flow);
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
        setContentFlow(0);
      }
    };
    handleChange(contentFlow);
  }, [contentFlow, contentState]);

  return (
    <>
      <Col md={12}>
        <HomeNavigator
          onClick={() => {
            changeFlow(1);
          }}
          direction={"up"}
        />
      </Col>
      <Col md={12}>
        {contents.map((Content, key) => {
          return (
            <TransitionWrapper
              key={key}
              currentState={contentState[key]}
              useClass={"fade-in"}
            >
              <Content />
            </TransitionWrapper>
          );
        })}
      </Col>
      <Col md={12}>
        <HomeNavigator
          onClick={() => {
            changeFlow(-1);
          }}
          direction={"down"}
        />
      </Col>
    </>
  );
};

export default HomeContent;
