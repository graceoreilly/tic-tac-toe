import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); //want an array with 9 in it and fill each of these 9 indexes with null
  //function to add an x at whatever index is clicked
  function handleClick(i) {
    const nextSquares = squares.slice(); //creates a new array
    nextSquares[i] = "X";
    setSquares(nextSquares); //lets react know the state of the component has changed
  }

  return (
    <>
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


