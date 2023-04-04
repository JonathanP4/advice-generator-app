import { useEffect, useState } from "react";
import "./AdviceId.css";
import fetchAdvice from "../../../ts/data";

const AdviceId = function () {
  const [initialId, setId] = useState("...");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAdvice();
      setId(data.slip.id);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 id="advice_id" className="invisible">
        Advice #{initialId}
      </h1>
    </div>
  );
};

export default AdviceId;
