import Card from "../card/Card";
import Advice from "./advice/Advice";
import AdviceId from "./advice/AdviceId";
import Dice from "./dice/Dice";
import Divider from "./divider/Divider";
import "./App.css";
import fetchAdvice from "../../ts/data";
import Spinner from "./spinner/Spinner";

let data = await fetchAdvice();

function App() {
  return (
    <Card>
      <div className="advice__components">
        <Spinner />
        <AdviceId id={data.slip.id} />
        <Advice advice={data.slip.advice} />
        <Divider />
      </div>
      <Dice />
    </Card>
  );
}

export default App;
