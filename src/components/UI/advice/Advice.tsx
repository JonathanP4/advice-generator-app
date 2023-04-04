import { useEffect, useState } from "react";
import "./Advice.css";
import fetchAdvice from "../../../ts/data";
import { toggleSpinner, toggleText } from "../../../ts/functionality";

const Advice = function () {
  const [initialAdvice, setAdvice] = useState("0");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAdvice();
        if (!data) throw new Error("Couldn't fetch advice");
        setAdvice(data.slip.advice);
        toggleSpinner();
        toggleText();
      } catch (err) {
        throw err;
      }
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
