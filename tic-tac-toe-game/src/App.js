import { useState } from "react";

function Square({ value, handleClick }) {
  return (
    <button className="square" onClick={() => handleClick()}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleSquareClick(index) {
    if (squares[index]) return;
    const nextSquares = squares.slice();
    if (xIsNext) nextSquares[index] = "X";
    else nextSquares[index] = "0";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} handleClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} handleClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} handleClick={() => handleSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} handleClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} handleClick={() => handleSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} handleClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} handleClick={() => handleSquareClick(8)} />
      </div>
    </>
  );
}
