import { useState } from "react";
import { TURNOS } from "./constants.js";
import { isWinner, revisarTablero } from "./logic/board.js";

import confetti from "canvas-confetti";
import { Square } from "./components/Square.jsx";
import WinnerModal from "./components/WinnerModal.jsx";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNOS.x);
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === TURNOS.x ? TURNOS.o : TURNOS.x);
    const newWinner = isWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (revisarTablero(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNOS.x);
    setWinner(null);
  };

  return (
    <main className="board">
      <h1>El gato</h1>
      <button onClick={resetGame}>Reiniciar el juego</button>

      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNOS.x}>{TURNOS.x}</Square>
        <Square isSelected={turn === TURNOS.o}>{TURNOS.o}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}
