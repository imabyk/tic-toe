import { useState } from "react";

const Box = ({ turn, changeSign }) => {
  const [change, setChange] = useState("");
  const [boxState, changeBoxState] = useState("");
  const move = () => {
    changeBoxState(turn);
    changeSign();
    setChange("used");
  };

  return (
    <div className={`box ${change}`} onClick={move}>
      {boxState}
    </div>
  );
};

export default Box;
