import { useState } from "react";

function Square({ value, onSquareClick }) {
  function handleClick() {
    setValue("X"); //this set function is telling React to re-render that square whenever it's <button> is clicked
  }
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  ); //rendering the value variable from your component, a placeholder to show the current state in the button element
}

export default function Board() {
  const [xIsNext, setxIsNext] = useState(true)
  //function to add an x at whatever index is clicked
  const [squares, setSquares] = useState(Array(9).fill(null)); //want an array with 9 in it and fill each of these 9 indexes with null
 
  function handleClick(i) {
    if(calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice(); //creates a copy of squares array
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares); //lets react know the state of the component has changed
    setxIsNext(!xIsNext) //state updater function, the state is oppositive of its current value e.g. if true/X, then next time it will be false/O
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
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
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


