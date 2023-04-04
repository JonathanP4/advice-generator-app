import { useEffect, useState } from "react";
import "./AdviceId.css";
import fetchAdvice from "../../../ts/data";

const AdviceId = function () {
  const [initialId, setId] = useState("...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAdvice();
        if (!data) throw new Error("Couldn't fetch advice");
        setId(data.slip.id);
      } catch (err) {
        throw err;
      }
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
