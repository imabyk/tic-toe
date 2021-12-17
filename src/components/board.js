import { useState } from "react";
import Box from "./box";

var i = 1;
const Board = () => {
  const [turn, setTurn] = useState("O");
  const [msg, setMsg] = useState("");
  const changeSign = () => {
    if (i < 9) {
      if (turn === "O") {
        setTurn("X");
      } else {
        setTurn("O");
      }
      i++;
      console.log(i);
    } else {
      setMsg("NO MORE MOVES");
    }
  };
  return (
    <div className="gameboard">
      <table>
        <tr>
          <td>
            <Box turn={turn} changeSign={changeSign} />
          </td>
          <td>
            <Box turn={turn} changeSign={changeSign} />
          </td>
          <td>
            <Box turn={turn} changeSign={changeSign} />
          </td>
        </tr>
        <tr>
          <td>
            <Box turn={turn} changeSign={changeSign} />
          </td>
          <td>
            <Box turn={turn} changeSign={changeSign} />
          </td>
          <td>
            <Box turn={turn} changeSign={changeSign} />
          </td>
        </tr>
        <tr>
          <td>
            <Box turn={turn} changeSign={changeSign} />
          </td>
          <td>
            <Box turn={turn} changeSign={changeSign} />
          </td>
          <td>
            <Box turn={turn} changeSign={changeSign} />
          </td>
        </tr>
      </table>
      <h1 className="ppp">{msg}</h1>
    </div>
  );
};

export default Board;
