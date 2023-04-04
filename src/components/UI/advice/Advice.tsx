import { useEffect, useState } from "react";
import "./Advice.css";
import fetchAdvice from "../../../ts/data";
import { toggleSpinner, toggleText } from "../../../ts/functionality";

const Advice = function () {
  const [initialAdvice, setAdvice] = useState("0");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAdvice();
      setAdvice(data.slip.advice);
      toggleSpinner();
      toggleText();
    };
    fetchData();
  }, []);

  return (
    <div>
      <p className="advice invisible">"{initialAdvice}"</p>
    </div>
  );
};

export default Advice;
