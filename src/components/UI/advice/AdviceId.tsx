import "./AdviceId.css";

const AdviceId: React.FC<{id: string}> = function (prop: any) {
  return (
    <div>
      <h1 id="advice_id">Advice #{prop.id}</h1>
    </div>
  );
};

export default AdviceId;
