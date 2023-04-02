import dice from "/src/assets/icon-dice.svg";
import "./Dice.css";
import {
  changeAdvice,
  toggleSpinner,
  toggleText,
} from "../../../ts/functionality";

const Dice = function () {
  return (
    <div
      className="dice-img-container"
      onClick={() => {
        toggleText();
        toggleSpinner();
        changeAdvice();
      }}
    >
      <img src={dice} alt="dice" />
    </div>
  );
};

export default Dice;
