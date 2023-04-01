import "./Advice.css";
import fetchAdvice from "../../../ts/data";

const data = await fetchAdvice();

const Advice = function () {
  return (
    <div>
      <p className="advice">{data.slip.advice}</p>
    </div>
  );
};

export default Advice;
