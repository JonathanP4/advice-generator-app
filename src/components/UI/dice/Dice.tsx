import dice from "../../../assets/icon-dice.svg";
import "./Dice.css";
import {
  changeAdvice,
  toggleSpinner,
  toggleText,
} from "../../../ts/functionality";

const Dice = function () {
  const cascade = () => {
    toggleText();
    toggleSpinner();
    changeAdvice();
  };
  return (
    <div className="dice-img-container" onClick={cascade}>
      <img src={dice} alt="dice" />
    </div>
  );
};

export default Dice;
