import { useState } from "react";
import Row from "react-bootstrap/Row";
import HomeContent from "../components/HomeContent";
import HomeNavigator from "../components/HomeNavigator";

const Home = () => {
  const [contentChange, setContentChange] = useState(0);

  const onChange = (flow: number) => {
    setContentChange(flow);
  };
  const resetFlow = () => {
    setContentChange(0);
  };

  return (
    <Row className="home-content align-items-center h-100-md-up">
      <HomeNavigator onClick={() => onChange(1)} direction={"up"} />
      <HomeContent onChange={contentChange} resetFlow={resetFlow} />
      <HomeNavigator onClick={() => onChange(-1)} direction={"down"} />
    </Row>
  );
};

export default Home;
