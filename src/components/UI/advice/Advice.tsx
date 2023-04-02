import "./Advice.css";

const Advice: React.FC<{ advice: string }> = function (prop: any) {
  return (
    <div>
      <p className="advice">"{prop.advice}"</p>
    </div>
  );
};

export default Advice;
