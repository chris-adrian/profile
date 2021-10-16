import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Link to="/"> Home </Link>&nbsp;&#124;&nbsp;
      <Link to="/about"> About </Link>&nbsp;&#124;&nbsp;
      <Link to="/contact"> Contact </Link>
    </>
  );
};

export default Navigation;
