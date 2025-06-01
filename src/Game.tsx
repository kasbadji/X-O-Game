import { useState } from "react"
import Board from "./Components/Board"

const Game = () => {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const next = xIsNext ? 'X' : 'O';

  const handleClick = (index: number) => {
    if (squares[index] != null || winner) return;

    const newSquares = [...squares];
    newSquares[index] = xIsNext ? 'X' : 'O';

    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const CalculateWinner = (squares: (string | null)[]): string | null => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 4, 8], [2, 4, 6],
      [0, 3, 6], [1, 4, 7], [2, 5, 8]
    ];
    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = CalculateWinner(squares);
  const isDraw = squares.every(square => square !== null) && !winner;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Tic-Tac-Toe Game</h1>
      <p className="text-xl mb-2">
        {winner ? `Winner: ${winner}` : isDraw ? "It's a draw!" : `Next Player: ${next}`}
      </p>
      <Board squares={squares} onClick={handleClick} />
      {(winner || isDraw) && (
        <button
          onClick={() => {
            setSquares(Array(9).fill(null));
            setXIsNext(true);
          }}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Restart
        </button>
      )}
    </div>
  );
};

export default Game;
