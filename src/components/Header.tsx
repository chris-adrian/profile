export interface Props {
  heading: string;
  subHeading?: string;
}

const Header = (props: Props) => {
  return (
    <div>
      <h1>{props.heading}</h1>
      {props.subHeading ? <h2>{props.subHeading}</h2> : ""}
    </div>
  );
};

export default Header;
