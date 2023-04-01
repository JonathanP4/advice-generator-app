import Card from "../card/Card";
import Advice from "./advice/Advice";
import AdviceId from "./advice/AdviceId";
import Dice from "./dice/Dice";
import Divider from "./divider/Divider";
import "./App.css";

function App() {
  return (
    <Card>
      <AdviceId />
      <Advice />
      <Divider />
      <Dice />
    </Card>
  );
}

export default App;
