import Card from "../card/Card";
import Advice from "./advice/Advice";
import AdviceId from "./advice/AdviceId";
import Dice from "./dice/Dice";
import Divider from "./divider/Divider";
import "./App.css";
import Spinner from "./spinner/Spinner";
import fetchAdvice from "../../ts/data";

let data = await fetchAdvice();

function App() {
  return (
    <Card>
      <Spinner />
      <AdviceId id={data.slip.id} />
      <Advice advice={data.slip.advice} />
      <Divider />
      <Dice />
    </Card>
  );
}

export default App;
