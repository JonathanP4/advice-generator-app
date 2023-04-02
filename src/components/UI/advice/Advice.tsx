import "./Advice.css";

const Advice = function (prop: any) {
  return (
    <div>
      <p className="advice">"{prop.advice}"</p>
    </div>
  );
};

export default Advice;
