import Card from "../card/Card";
import Advice from "./advice/Advice";
import AdviceId from "./advice/AdviceId";
import Dice from "./dice/Dice";
import Divider from "./divider/Divider";
import "./App.css";
import Spinner from "./spinner/Spinner";
import fetchAdvice from "../../ts/data";
import {
  changeAdvice,
  toggleSpinner,
  toggleText,
} from "../../ts/functionality";

function App() {
  return (
    <Card>
      <Spinner />
      <AdviceId id={117} />
      <Advice
        advice={
          "It is easy to sit up and notice, what's difficult is getting up and taking action."
        }
      />
      <Divider />
      <Dice />
    </Card>
  );
}

export default App;
