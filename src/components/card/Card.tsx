import "./Card.css";
const Card = function (props: any) {
  return <div className="card">{props.children}</div>;
};

export default Card;
