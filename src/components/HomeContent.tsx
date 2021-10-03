import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
// import RenderComponent from "./RenderComponent";
import ProfileInfo from "./ProfileInfo";
import ProfileIntro from "./ProfileIntro";

const HomeContent = ({ contentFlow, resetFlow }) => {
  const [contentShow, setcontentShow] = useState(false);

  const elemCalled = () => {
    console.log("helloooo");
  };
  const contents = [ProfileInfo, ProfileIntro];

  useEffect(() => {
    renderContent(contentFlow);
    if (contentFlow !== 0) {
      resetFlow();
    }
  }, [contentFlow, resetFlow]);

  const renderContent = (flow: number) => {
    switch (flow) {
      case 1:
        setcontentShow(true);
        break;
      case -1:
        setcontentShow(false);
        break;
      default:
        // setHomeFlow("Idle");
        break;
    }
  };

  return (
    <Col md={12}>
      {contents.map((Item, key) => {
        return <Item key={key} inProp={contentShow} onClick={elemCalled} />;
      })}
    </Col>
  );
};

export default HomeContent;
