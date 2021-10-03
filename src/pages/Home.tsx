import { useState } from "react";
import { Row } from "react-bootstrap";
import HomeContent from "../components/HomeContent";
import HomeTop from "../components/HomeTop";
import HomeBottom from "../components/HomeBottom";

const Home = () => {
  const [contentFlow, setContentFlow] = useState(0);
  const goUp = () => {
    contentChange(1);
  };
  const goDown = () => {
    contentChange(-1);
  };
  const contentChange = (flow: number) => {
    setContentFlow(flow);
  };
  const resetFlow = () => {
    setContentFlow(0);
    // console.log("reset");
  };

  return (
    <Row className="home-content align-items-center h-100-md-up">
      <HomeTop onClick={goUp} />
      <HomeContent contentFlow={contentFlow} resetFlow={resetFlow} />
      <HomeBottom onClick={goDown} />
    </Row>
  );
};

export default Home;
