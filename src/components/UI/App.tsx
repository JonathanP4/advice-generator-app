import Card from "../card/Card";
import Advice from "./advice/Advice";
import AdviceId from "./advice/AdviceId";
import Dice from "./dice/Dice";
import Divider from "./divider/Divider";
import "./App.css";
import Spinner from "./spinner/Spinner";

function App() {
  return (
    <Card>
      <Spinner />
      <AdviceId />
      <Advice />
      <Divider />
      <Dice />
    </Card>
  );
}

export default App;
