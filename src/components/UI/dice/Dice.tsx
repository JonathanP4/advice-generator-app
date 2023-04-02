import dice from "/src/assets/icon-dice.svg";
import "./Dice.css";
import {
  changeAdvice,
  toggleSpinner,
  toggleText,
} from "../../../ts/event-handlers";

const Dice = function () {
  return (
    <div
      className="dice-img-container"
      onClick={() => {
        toggleSpinner();
        toggleText();
        changeAdvice();
      }}
    >
      <img src={dice} alt="dice" />
    </div>
  );
};

export default Dice;
