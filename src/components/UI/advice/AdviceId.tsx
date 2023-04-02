import "./AdviceId.css";

const AdviceId = function (prop: any) {
  return (
    <div>
      <h1 id="advice_id">Advice #{prop.id}</h1>
    </div>
  );
};

export default AdviceId;
