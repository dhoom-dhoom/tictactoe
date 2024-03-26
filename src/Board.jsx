import CalculateWinner from './CalculateWinner.jsx';
import Square from './Square.jsx';

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (CalculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = CalculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  
  const rows = [];
  for (let i = 0; i < 3; i++) {
    const currentRow = [];
    
    for (let j = 0; j < 3; j++) {
      const squareIndex = i * 3 + j; 
      currentRow.push(
        <Square
          key={squareIndex} 
          value={squares[squareIndex]}
          onSquareClick={() => handleClick(squareIndex)}
        />
      );
    }
    rows.push(
      <div className="board-row" key={i}>
        {currentRow}
      </div>
    );
  }

  return (
    <>
      <div className="status">{status}</div>
      {rows}
    </>
  );
}
export default Board;