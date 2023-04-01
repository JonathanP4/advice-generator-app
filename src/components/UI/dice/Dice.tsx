import dice from "/src/assets/icon-dice.svg";
import "./Dice.css";

const Dice = function () {
  return (
    <div className="dice-img-container">
      <img src={dice} alt="dice" />
    </div>
  );
};

export default Dice;
