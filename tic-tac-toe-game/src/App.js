import { useState } from "react";

function Square({ value, handleClick }) {
  return (
    <button className="square" onClick={() => handleClick()}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleSquareClick(index) {
    if (squares[index] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    if (xIsNext) nextSquares[index] = "X";
    else nextSquares[index] = "0";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) status = "Winner " + winner;
  else status = "Next Player " + (xIsNext ? "X" : "0");

  return (
    <>
      <div className="status">{status}</div>
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

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function jumpTo(move) {}

  const currentSquares = history[history.length - 1];
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) description = "Goto move #" + move;
    else description = "Goto start";
    return (
      <li key={move}>
        <button onClick={jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
